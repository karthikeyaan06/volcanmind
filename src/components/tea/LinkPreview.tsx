import { useEffect, useRef, useState } from "react";
import { X } from "lucide-react";
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

// Simple in-memory cache
const cache = new Map<string, PreviewMeta>();

function extractDomain(url: string) {
  try {
    return new URL(url).hostname.replace("www.", "");
  } catch {
    return url;
  }
}

// Uses allorigins proxy to bypass CORS when fetching HTML
async function fetchMeta(url: string): Promise<PreviewMeta> {
  if (cache.has(url)) return cache.get(url)!;

  const proxyUrl = `https://api.allorigins.win/get?url=${encodeURIComponent(url)}`;
  const res = await fetch(proxyUrl);
  const data = await res.json();
  const html: string = data.contents ?? "";

  const doc = new DOMParser().parseFromString(html, "text/html");

  const getMeta = (selectors: string[]) => {
    for (const sel of selectors) {
      const el = doc.querySelector(sel);
      const val = el?.getAttribute("content") ?? el?.textContent ?? "";
      if (val.trim()) return val.trim();
    }
    return "";
  };

  const title =
    getMeta(['meta[property="og:title"]', 'meta[name="twitter:title"]', "title"]) ||
    "Tea Basket";

  const description =
    getMeta(['meta[property="og:description"]', 'meta[name="description"]', 'meta[name="twitter:description"]']) ||
    "Teas from dedicated producers, curated for everyday drinking.";

  const rawImage = getMeta(['meta[property="og:image"]', 'meta[name="twitter:image"]']);
  const image = rawImage || "";

  const domain = extractDomain(url);

  const meta: PreviewMeta = { title, description, image, domain, url };
  cache.set(url, meta);
  return meta;
}

// Shimmer skeleton
const Shimmer = () => (
  <div className="flex gap-3 p-3 animate-pulse">
    <div className="w-20 h-20 rounded-lg bg-[#d6c9b0] flex-shrink-0" />
    <div className="flex-1 space-y-2 py-1">
      <div className="h-3 bg-[#d6c9b0] rounded w-3/4" />
      <div className="h-3 bg-[#d6c9b0] rounded w-1/2" />
      <div className="h-3 bg-[#d6c9b0] rounded w-5/6" />
      <div className="h-3 bg-[#d6c9b0] rounded w-1/3" />
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
        // slight delay so shimmer is visible before fade-in
        setTimeout(() => setVisible(true), 50);
      })
      .catch(() => {
        if (abortRef.current) return;
        setMeta({
          title: "Tea Basket",
          description: "Teas from dedicated producers, curated for everyday drinking.",
          image: "",
          domain: extractDomain(url),
          url,
        });
        setLoading(false);
        setTimeout(() => setVisible(true), 50);
      });

    return () => {
      abortRef.current = true;
    };
  }, [url]);

  const handleClose = () => {
    setVisible(false);
    setTimeout(onClose, 200);
  };

  const imgSrc = !meta?.image || imgError ? teaFallback : meta.image;

  return (
    <div
      className="relative rounded-xl border border-[#c8b89a] bg-[#faf7f2] shadow-lg overflow-hidden transition-all duration-200"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(8px)",
      }}
    >
      {/* Top accent bar */}
      <div className="h-1 w-full bg-gradient-to-r from-[#1F3D2B] to-[#5E7C5A]" />

      {/* Close button */}
      <button
        onClick={handleClose}
        className="absolute top-2 right-2 z-10 w-6 h-6 rounded-full bg-white/80 hover:bg-white flex items-center justify-center shadow transition-colors"
        aria-label="Remove preview"
      >
        <X size={12} className="text-gray-600" />
      </button>

      {loading ? (
        <Shimmer />
      ) : (
        <a
          href={meta!.url}
          target="_blank"
          rel="noopener noreferrer"
          className="flex gap-3 p-3 group no-underline"
        >
          {/* Preview image */}
          <div className="w-20 h-20 rounded-lg overflow-hidden flex-shrink-0 bg-[#e8ddd0]">
            <img
              src={imgSrc}
              alt={meta!.title}
              onError={() => setImgError(true)}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
          </div>

          {/* Text content */}
          <div className="flex-1 min-w-0 flex flex-col justify-center gap-1">
            <p className="text-xs font-medium text-[#5E7C5A] truncate">{meta!.domain}</p>
            <p className="text-sm font-semibold text-[#1F3D2B] leading-snug line-clamp-1">
              {meta!.title}
            </p>
            <p className="text-xs text-gray-500 line-clamp-2 leading-relaxed">
              {meta!.description}
            </p>
            <p className="text-xs text-[#B87333] truncate mt-0.5 group-hover:underline">
              {meta!.url}
            </p>
          </div>
        </a>
      )}
    </div>
  );
}
