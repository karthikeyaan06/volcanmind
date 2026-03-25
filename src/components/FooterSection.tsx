import mainLogo from "@/assets/main_logo/main_con.png";

const FooterSection = () => {

  return (
    <footer className="bg-[hsl(var(--footer-bg))] text-[hsl(var(--footer-foreground))]">
      {/* Tagline Section: "Building what quality needs to grow" */}
      <div className="border-b border-white/10 py-16 text-center">
        <h3 className="text-2xl font-semibold text-[hsl(var(--footer-heading))] mb-2">
          Building what quality needs to grow
        </h3>
        <p className="text-sm opacity-70">Thoughtful systems designed for the long term</p>
      </div>

      {/* Main Footer Content */}
      <div className="container mx-auto px-6 py-10 flex flex-col items-center text-center gap-3">
        <div className="flex items-center gap-2 font-bold text-lg text-[hsl(var(--footer-heading))]">
          <img src={mainLogo} alt="VolcanMind Logo" className="w-8 h-8 object-contain" />
          <span className="font-normal">VolcanMind</span>
        </div>
        <p className="text-sm opacity-70 max-w-xs">
          Volcanmind is a products and digital services company focused on building thoughtful, long-term digital systems.
        </p>
      </div>

      {/* Copyright */}
      <div className="border-t border-white/10">
        <div className="container mx-auto px-6 py-6 flex justify-center">
          <p className="text-xs opacity-60">© 2026 VolcanMind. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
