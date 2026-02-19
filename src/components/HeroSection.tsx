import { ArrowRight, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/mainpic.jpg";

const HeroSection = () => {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="pt-12 pb-0 overflow-hidden relative">
      <div className="absolute inset-0 opacity-60 bottom-1/3" style={{backgroundImage: 'radial-gradient(circle, rgba(150,150,150,0.4) 1.5px, transparent 1.5px)', backgroundSize: '20px 20px', maskImage: 'radial-gradient(ellipse 70% 70% at 50% 30%, black 30%, transparent 80%)', WebkitMaskImage: 'radial-gradient(ellipse 70% 70% at 50% 30%, black 30%, transparent 80%)'}}></div>
      <div className="container mx-auto px-6 text-center relative z-10 mb-8">
        <div 
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
        </div>

        <h1 className="text-4xl md:text-5xl lg:text-6xl font-normal text-foreground leading-tight max-w-3xl mx-auto tracking-tight" style={{ fontFamily: '"Hiragino Mincho ProN", serif' }}>
          Building digital systems for meaningful businesses.
        </h1>

        <p className="text-muted-foreground text-lg mt-6 max-w-lg mx-auto">
          Products and digital services designed to endure.
        </p>

        <div className="flex items-center justify-center gap-4 mt-8">
          <Button variant="outline" className="rounded-lg gap-2 px-5 border-2 border-gray-300 text-gray-600 hover:bg-primary hover:text-white hover:border-primary transition-colors">
            <span className="w-4 h-4 rounded-full border-2 border-gray-400 flex items-center justify-center group-hover:border-white">
              <Play className="w-1.5 h-1.5 text-gray-600" />
            </span>
            Showreel
          </Button>
          <Button onClick={() => scrollTo("products")} className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-lg px-6">
            Explore what we build
          </Button>
        </div>
      </div>

      <div className="mt-16 container mx-auto px-6">
        <img src={heroImage} alt="Abstract geometric art representing digital systems" className="w-full h-auto object-cover max-h-[500px] object-center" />
      </div>
    </section>
  );
};

export default HeroSection;
