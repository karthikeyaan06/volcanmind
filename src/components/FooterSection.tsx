import mainLogo from "@/assets/main_logo/main_con.png";

const FooterSection = () => {
  return (
    <footer className="bg-[hsl(var(--footer-bg))] text-[hsl(var(--footer-foreground))]">
      <div className="border-b border-white/10 py-16 text-center">
        <h3 className="mb-2 text-2xl font-semibold text-[hsl(var(--footer-heading))]">
          Building what quality needs to grow
        </h3>
        <p className="text-sm opacity-70">Thoughtful systems designed for the long term</p>
      </div>

      <div className="container mx-auto flex flex-col items-center gap-3 px-6 py-10 text-center">
        <div className="flex items-center gap-2 text-lg font-bold text-[hsl(var(--footer-heading))]">
          <img src={mainLogo} alt="VolcanMind Logo" className="h-8 w-8 object-contain" />
          <span className="font-normal">VolcanMind</span>
        </div>
        <p className="max-w-xs text-sm opacity-70">
          Volcanmind is a products and digital services company focused on building thoughtful, long-term digital systems.
        </p>
      </div>

      <div className="border-t border-white/10">
        <div className="container mx-auto flex justify-center px-6 py-6">
          <p className="text-xs opacity-60">© 2026 VolcanMind. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
