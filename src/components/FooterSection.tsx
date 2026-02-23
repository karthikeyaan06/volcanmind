import { Link } from "react-router-dom";

const footerLinks = ["Overview", "Features", "Pricing", "Careers", "Help", "Privacy"];

const FooterSection = () => {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="bg-[hsl(var(--footer-bg))] text-[hsl(var(--footer-foreground))]">
      {/* Tagline */}
      <div className="border-b border-white/10 py-16 text-center">
        <h3 className="text-2xl font-semibold text-[hsl(var(--footer-heading))] mb-2">
          Building what quality needs to grow
        </h3>
        <p className="text-sm opacity-70">Thoughtful systems designed for the long term</p>
      </div>

      {/* Footer content */}
      <div className="container mx-auto px-6 py-10">
        <div className="flex flex-col md:flex-row md:items-start gap-8">
          <div className="flex-1">
            <div className="flex items-center gap-2 font-bold text-lg text-[hsl(var(--footer-heading))] mb-3">
              <div className="w-6 h-6 bg-white/20 rounded flex items-center justify-center text-[10px]">
                Logo
              </div>
              <span className="font-normal">VolcanMind</span>
            </div>
            <p className="text-sm opacity-70 max-w-xs">
              Volcanmind is a products and digital services company focused on building thoughtful, long-term digital systems.
            </p>
          </div>
          <nav className="flex flex-wrap gap-6 text-sm">
            {footerLinks.map((link) => (
              <button
                key={link}
                onClick={() => scrollTo(link.toLowerCase())}
                className="hover:text-[hsl(var(--footer-heading))] transition-colors"
              >
                {link}
              </button>
            ))}
          </nav>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-white/10">
        <div className="container mx-auto px-6 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs opacity-60">© 2026 VolcanMind. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <a href="#" className="opacity-60 hover:opacity-100 transition-opacity" aria-label="X/Twitter">
              <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
            </a>
            <a href="#" className="opacity-60 hover:opacity-100 transition-opacity" aria-label="LinkedIn">
              <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
            </a>
            <a href="#" className="opacity-60 hover:opacity-100 transition-opacity" aria-label="Facebook">
              <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
