import { useEffect, useRef, useState } from "react";
import { X, ExternalLink } from "lucide-react";
import teaFallback from "@/assets/tea-basket.jpg";

interface PreviewMeta {
  title: string;
  description: string;
  image: string;
  domain: string;
  url: string;
}

interface LinkPreviewProps {
  url: string;
  onClose: () => void;
}

const cache = new Map<string, PreviewMeta>();

function extractDomain(url: string) {
  try {
    return new URL(url).hostname.replace("www.", "");
  } catch {
    return url;
  }
}

async function fetchMeta(url: string): Promise<PreviewMeta> {
  if (cache.has(url)) return cache.get(url)!;

  const domain = extractDomain(url);
  let title = domain;
  let description = "";
  let image = "";

  try {
    // Primary: microlink.io — reliable, free, no key needed
    const res = await fetch(`https://api.microlink.io?url=${encodeURIComponent(url)}`);
    const data = await res.json();
    if (data.status === "success") {
      title = data.data?.title || domain;
      description = data.data?.description || "";
      image = data.data?.image?.url || data.data?.screenshot?.url || "";
    }
  } catch {
    // silently fall through to defaults
  }

  const meta: PreviewMeta = { title, description, image, domain, url };
  cache.set(url, meta);
  return meta;
}

const Shimmer = () => (
  <div className="flex gap-4 p-4 animate-pulse">
    <div className="w-24 h-24 rounded-xl bg-[#e2d9cc] flex-shrink-0" />
    <div className="flex-1 flex flex-col justify-center gap-2.5">
      <div className="h-2.5 bg-[#e2d9cc] rounded-full w-1/3" />
      <div className="h-3.5 bg-[#e2d9cc] rounded-full w-3/4" />
      <div className="h-2.5 bg-[#e2d9cc] rounded-full w-full" />
      <div className="h-2.5 bg-[#e2d9cc] rounded-full w-2/3" />
      <div className="h-2.5 bg-[#e2d9cc] rounded-full w-2/5" />
    </div>
  </div>
);

export default function LinkPreview({ url, onClose }: LinkPreviewProps) {
  const [meta, setMeta] = useState<PreviewMeta | null>(null);
  const [loading, setLoading] = useState(true);
  const [imgError, setImgError] = useState(false);
  const [visible, setVisible] = useState(false);
  const abortRef = useRef(false);

  useEffect(() => {
    abortRef.current = false;
    setLoading(true);
    setMeta(null);
    setImgError(false);
    setVisible(false);

    fetchMeta(url)
      .then((data) => {
        if (abortRef.current) return;
        setMeta(data);
        setLoading(false);
        setTimeout(() => setVisible(true), 30);
      })
      .catch(() => {
        if (abortRef.current) return;
        setMeta({ title: extractDomain(url), description: "", image: "", domain: extractDomain(url), url });
        setLoading(false);
        setTimeout(() => setVisible(true), 30);
      });

    return () => { abortRef.current = true; };
  }, [url]);

  const handleClose = () => {
    setVisible(false);
    setTimeout(onClose, 200);
  };

  const imgSrc = !meta?.image || imgError ? teaFallback : meta.image;

  return (
    <div
      className="relative rounded-2xl bg-white overflow-hidden transition-all duration-300 ease-out"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0) scale(1)" : "translateY(10px) scale(0.98)",
        boxShadow: "0 4px 24px rgba(31,61,43,0.10), 0 1.5px 6px rgba(31,61,43,0.07)",
      }}
    >
      {/* Green left accent bar */}
      <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-[#1F3D2B] to-[#5E7C5A] rounded-l-2xl" />

      {/* Close button */}
      <button
        onClick={handleClose}
        className="absolute top-3 right-3 z-10 w-7 h-7 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors"
        aria-label="Remove preview"
      >
        <X size={13} className="text-gray-500" />
      </button>

      {loading ? (
        <div className="pl-4">
          <Shimmer />
        </div>
      ) : (
        <div className="flex gap-4 p-4 pl-5">
          {/* Preview image */}
          <div className="w-24 h-24 rounded-xl overflow-hidden flex-shrink-0 bg-[#f0ebe3]">
            <img
              src={imgSrc}
              alt={meta!.title}
              onError={() => setImgError(true)}
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
            />
          </div>

          {/* Text */}
          <div className="flex-1 min-w-0 flex flex-col justify-center gap-1 pr-6">
            {/* Domain */}
            <div className="flex items-center gap-1.5">
              <img
                src={`https://www.google.com/s2/favicons?domain=${meta!.domain}&sz=16`}
                alt=""
                className="w-4 h-4 rounded-sm"
                onError={(e) => (e.currentTarget.style.display = "none")}
              />
              <span className="text-xs font-semibold text-[#5E7C5A] uppercase tracking-wide">
                {meta!.domain}
              </span>
            </div>

            {/* Title */}
            <p className="text-sm font-bold text-[#1F3D2B] leading-snug line-clamp-2">
              {meta!.title}
            </p>

            {/* Description */}
            {meta!.description && (
              <p className="text-xs text-gray-500 line-clamp-2 leading-relaxed">
                {meta!.description}
              </p>
            )}

            {/* URL */}
            <a
              href={meta!.url}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="flex items-center gap-1 text-xs text-[#B87333] hover:underline truncate mt-0.5 w-fit max-w-full"
            >
              <ExternalLink size={10} className="flex-shrink-0" />
              <span className="truncate">{meta!.url}</span>
            </a>
          </div>
        </div>
      )}
    </div>
  );
}
