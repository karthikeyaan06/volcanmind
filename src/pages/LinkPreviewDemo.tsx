import { useState, useRef } from "react";
import { Link } from "react-router-dom";
import { Link2 } from "lucide-react";
import LinkPreview from "@/components/tea/LinkPreview";
import teaBasketLogo from "@/assets/main_logo/TeaBasket_Logo-removebg-preview.png";

function isValidUrl(str: string) {
  try {
    const u = new URL(str);
    return u.protocol === "http:" || u.protocol === "https:";
  } catch {
    return false;
  }
}

export default function LinkPreviewDemo() {
  const [input, setInput] = useState("");
  const [previewUrl, setPreviewUrl] = useState("");
  const debounceRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const handleChange = (val: string) => {
    setInput(val);
    if (debounceRef.current) clearTimeout(debounceRef.current);
    debounceRef.current = setTimeout(() => {
      if (isValidUrl(val.trim())) {
        setPreviewUrl(val.trim());
      } else {
        setPreviewUrl("");
      }
    }, 600);
  };

  const handlePaste = (e: React.ClipboardEvent<HTMLInputElement>) => {
    const pasted = e.clipboardData.getData("text");
    if (isValidUrl(pasted.trim())) {
      if (debounceRef.current) clearTimeout(debounceRef.current);
      setInput(pasted.trim());
      setPreviewUrl(pasted.trim());
      e.preventDefault();
    }
  };

  return (
    <div className="min-h-screen" style={{ backgroundColor: "#FAF7F2" }}>
      {/* Navbar */}
      <nav className="bg-white border-b sticky top-0 z-50 px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <img src={teaBasketLogo} alt="TeaBasket" className="w-9 h-9 object-contain" />
          <span className="text-lg">
            <span className="font-light">Tea</span>
            <span className="font-semibold">Basket</span>
          </span>
        </div>
        <Link to="/teabasket" className="text-sm text-gray-500 hover:text-gray-800 transition-colors">
          ← Back
        </Link>
      </nav>

      {/* Main content */}
      <div className="max-w-xl mx-auto px-6 py-16">
        <div className="text-center mb-10">
          <p className="text-sm font-medium tracking-wide mb-2" style={{ color: "#5E7C5A" }}>
            Link Preview
          </p>
          <h1
            className="text-4xl font-bold"
            style={{ fontFamily: "Literata, serif", color: "#1F3D2B" }}
          >
            Paste any URL
          </h1>
          <p className="text-gray-500 mt-3 text-sm">
            Paste or type a link below to see a live preview card — just like WhatsApp or Telegram.
          </p>
        </div>

        {/* Input + preview card */}
        <div className="flex flex-col gap-3">
          {/* Preview card appears above input */}
          {previewUrl && (
            <LinkPreview url={previewUrl} onClose={() => { setPreviewUrl(""); setInput(""); }} />
          )}

          {/* Input field */}
          <div className="relative flex items-center">
            <Link2 size={16} className="absolute left-3 text-gray-400 pointer-events-none" />
            <input
              type="url"
              value={input}
              onChange={(e) => handleChange(e.target.value)}
              onPaste={handlePaste}
              placeholder="https://teabasket.com"
              className="w-full pl-9 pr-4 py-3 rounded-xl border border-[#c8b89a] bg-white text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-[#5E7C5A] transition placeholder-gray-400"
            />
          </div>
        </div>

        {/* Example URLs */}
        <div className="mt-8">
          <p className="text-xs text-gray-400 mb-3 uppercase tracking-wide">Try these</p>
          <div className="flex flex-wrap gap-2">
            {[
              "https://github.com",
              "https://www.wikipedia.org",
              "https://vercel.com",
            ].map((ex) => (
              <button
                key={ex}
                onClick={() => { setInput(ex); setPreviewUrl(ex); }}
                className="text-xs px-3 py-1.5 rounded-full border border-[#c8b89a] bg-white hover:bg-[#f0ebe3] transition-colors text-gray-600"
              >
                {ex.replace("https://", "")}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
