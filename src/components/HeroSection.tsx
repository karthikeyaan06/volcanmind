import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative overflow-hidden px-4 pb-10 pt-12 md:px-6">
      <div className="container mx-auto relative z-10 mb-8 text-center">
        <a
          href="mailto:info@volcanmind.com?subject=Application%20for%20Engineering%20Position%20at%20VolcanMind"
          className="inline-flex items-center rounded-full cursor-pointer transition-all duration-300 group overflow-hidden mb-6"
          style={{
            height: '40px',
            padding: '3px',
            backgroundColor: '#E9ECFF',
            border: '2px solid transparent',
            backgroundImage: 'linear-gradient(#E9ECFF, #E9ECFF), linear-gradient(90deg, #BFC6FF 0%, #D6D9FF 50%, #BFC6FF 100%)',
            backgroundOrigin: 'border-box',
            backgroundClip: 'padding-box, border-box',
            boxShadow: '0 4px 12px rgba(99, 102, 241, 0.15)'
          }}
        >
          <span className="text-xs font-semibold rounded-full bg-white px-4 py-1.5" style={{ color: '#3F51B5', fontWeight: 600 }}>
            We're hiring!
          </span>
          <span className="flex items-center text-xs font-medium px-3" style={{ color: '#3F51B5', fontWeight: 500 }}>
            Join our engineering team
            <ArrowRight className="transition-transform duration-300 group-hover:translate-x-1" style={{ width: '14px', height: '14px', marginLeft: '6px' }} strokeWidth={1.5} />
          </span>
        </a>

        <h1 className="text-3xl md:text-5xl lg:text-6xl font-normal text-foreground leading-tight max-w-3xl mx-auto tracking-tight" style={{ fontFamily: '"Hiragino Mincho ProN", serif' }}>
          Building digital systems for meaningful businesses
        </h1>

        <p className="text-foreground text-lg md:text-xl lg:text-2xl mt-6 max-w-2xl mx-auto font-normal">
          Digital products and Digital services designed to <span className="font-bold">Endure</span>.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8">
          <Button onClick={() => scrollTo("products")} className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-lg px-6">
            Explore what we build
          </Button>
        </div>
      </div>

      <div className="container mx-auto px-0 md:px-6">
        <div className="hero-visual-panel relative overflow-hidden rounded-[2rem] border border-slate-900/10 px-6 py-10 text-left shadow-[0_40px_120px_rgba(15,23,42,0.12)] md:px-10">
          <div className="hero-visual-panel__glow" />
          <div className="relative z-10 grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
            <div className="max-w-2xl">
              <p className="text-xs font-semibold uppercase tracking-[0.32em] text-primary/75">
                Abstract geometric art representing digital systems
              </p>
              <h2 className="mt-4 max-w-xl text-2xl font-semibold leading-tight text-slate-900 md:text-4xl">
                A living systems backdrop for products, services, and long-term digital craft.
              </h2>
              <p className="mt-4 max-w-xl text-sm leading-6 text-slate-600 md:text-base">
                Motion, structure, and restraint echo the way VolcanMind builds: connected, durable, and designed to scale without losing clarity.
              </p>
            </div>

            <div className="grid gap-3 sm:grid-cols-3 lg:grid-cols-1">
              <div className="hero-metric-card">
                <span className="hero-metric-label">Products</span>
                <strong className="hero-metric-value">Deliberate</strong>
              </div>
              <div className="hero-metric-card">
                <span className="hero-metric-label">Services</span>
                <strong className="hero-metric-value">Grounded</strong>
              </div>
              <div className="hero-metric-card">
                <span className="hero-metric-label">Systems</span>
                <strong className="hero-metric-value">Enduring</strong>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
