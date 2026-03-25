import { useState, useRef } from "react";
import { Link } from "react-router-dom";
import { Link2, ClipboardPaste } from "lucide-react";
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

const EXAMPLES = [
  "https://github.com",
  "https://www.wikipedia.org",
  "https://vercel.com",
  "https://tailwindcss.com",
];

export default function LinkPreviewDemo() {
  const [input, setInput] = useState("");
  const [previewUrl, setPreviewUrl] = useState("");
  const debounceRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const triggerPreview = (val: string) => {
    if (debounceRef.current) clearTimeout(debounceRef.current);
    debounceRef.current = setTimeout(() => {
      setPreviewUrl(isValidUrl(val.trim()) ? val.trim() : "");
    }, 500);
  };

  const handleChange = (val: string) => {
    setInput(val);
    triggerPreview(val);
  };

  const handlePaste = (e: React.ClipboardEvent<HTMLInputElement>) => {
    const pasted = e.clipboardData.getData("text");
    if (isValidUrl(pasted.trim())) {
      e.preventDefault();
      if (debounceRef.current) clearTimeout(debounceRef.current);
      setInput(pasted.trim());
      setPreviewUrl(pasted.trim());
    }
  };

  const handleClose = () => {
    setPreviewUrl("");
    setInput("");
  };

  const pickExample = (ex: string) => {
    setInput(ex);
    setPreviewUrl(ex);
  };

  return (
    <div className="min-h-screen" style={{ backgroundColor: "#FAF7F2" }}>
      {/* Navbar */}
      <nav className="bg-white border-b sticky top-0 z-50 px-6 py-4 flex items-center justify-between shadow-sm">
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

      {/* Main */}
      <div className="max-w-lg mx-auto px-6 py-16">
        {/* Header */}
        <div className="text-center mb-12">
          <span
            className="inline-block text-xs font-semibold tracking-widest uppercase px-3 py-1 rounded-full mb-4"
            style={{ backgroundColor: "#e8f0e9", color: "#1F3D2B" }}
          >
            Link Preview
          </span>
          <h1
            className="text-4xl font-bold leading-tight"
            style={{ fontFamily: "Literata, serif", color: "#1F3D2B" }}
          >
            Paste any URL
          </h1>
          <p className="text-gray-400 mt-3 text-sm leading-relaxed">
            Instantly see a rich preview card — just like WhatsApp or Telegram.
          </p>
        </div>

        {/* Card area */}
        <div className="flex flex-col gap-3">
          {/* Preview card */}
          {previewUrl && (
            <LinkPreview url={previewUrl} onClose={handleClose} />
          )}

          {/* Input */}
          <div className="relative flex items-center">
            <Link2 size={15} className="absolute left-4 text-gray-400 pointer-events-none" />
            <input
              type="url"
              value={input}
              onChange={(e) => handleChange(e.target.value)}
              onPaste={handlePaste}
              placeholder="Paste or type a URL…"
              className="w-full pl-10 pr-4 py-3.5 rounded-2xl border border-[#d4c5ae] bg-white text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-[#5E7C5A] focus:border-transparent transition placeholder-gray-300"
            />
            {input && (
              <button
                onClick={handleClose}
                className="absolute right-4 text-gray-300 hover:text-gray-500 transition-colors text-lg leading-none"
              >
                ×
              </button>
            )}
          </div>

          {/* Paste hint */}
          {!input && (
            <div className="flex items-center justify-center gap-2 text-xs text-gray-400 mt-1">
              <ClipboardPaste size={12} />
              <span>Card appears instantly after pasting a valid link</span>
            </div>
          )}
        </div>

        {/* Example pills */}
        <div className="mt-10">
          <p className="text-xs text-gray-400 mb-3 uppercase tracking-widest text-center">
            Try an example
          </p>
          <div className="flex flex-wrap justify-center gap-2">
            {EXAMPLES.map((ex) => (
              <button
                key={ex}
                onClick={() => pickExample(ex)}
                className="text-xs px-4 py-2 rounded-full bg-white border border-[#d4c5ae] hover:bg-[#f0ebe3] hover:border-[#b89e7a] transition-all text-gray-600 shadow-sm"
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
