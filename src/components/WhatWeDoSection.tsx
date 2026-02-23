import { ArrowRight, Globe, Code2 } from "lucide-react";
import powerImg from "@/assets/power.png";

const WhatWeDoSection = () => {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <p className="text-primary text-sm font-medium mb-2">Our Work</p>
        <h2 className="text-3xl md:text-4xl font-semibold text-foreground mb-4">What We Do</h2>
        <p className="text-muted-foreground mb-16">
          We build and operate thoughtful digital products, and partner with organizations to design and scale durable digital systems.
          Our work is focused on long-term value – where quality, clarity, and growth are allowed to coexist.
        </p>

        {/* Products */}
        <div id="products" className="grid md:grid-cols-2 gap-12 mb-20">
          <div>
            <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center mb-4">
              <Globe className="w-5 h-5 text-primary" />
            </div>
            <h3 className="text-3xl md:text-4xl font-semibold text-foreground mb-4">Digital Products</h3>
            <p className="text-muted-foreground mb-3">
              We build and operate digital products in spaces where quality and scale often come into conflict. Each digital product is chosen deliberately and designed to endure.
            </p>
            <p className="text-muted-foreground mb-6">
              Our focus is on creating systems that enable inclusive growth without sacrificing craft or intent.
            </p>
            <a href="#" className="inline-flex items-center gap-2 border border-border rounded-lg px-4 py-2 text-sm font-medium text-foreground hover:bg-secondary transition-colors">
              Visit Tea Basket <ArrowRight className="w-4 h-4" />
            </a>
          </div>
          <div className="p-12 text-primary-foreground relative overflow-hidden flex items-start min-h-[280px]" style={{ background: 'linear-gradient(135deg, hsl(150, 50%, 20%), hsl(140, 60%, 25%))' }}>
            <div className="relative z-10 w-1/2 flex flex-col pr-8">
              <p className="text-xs opacity-80 mb-1">Flagship Venture</p>
              <h4 className="text-base font-semibold mb-3">Tea Basket</h4>
              <p className="text-xs opacity-90 mb-3">
                A curated e-commerce platform enabling small, high-quality tea producers to reach everyday consumers – without needing large-scale infrastructure.
              </p>
              <p className="text-xs opacity-80">
                Tea Basket reflects our belief that quality should scale without losing its character.
              </p>
            </div>
            <div className="absolute right-0 top-0 bottom-0 w-1/2">
              <img src={powerImg} alt="Power" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>

        {/* Digital Services */}
        <div id="services">
          <div className="flex gap-8 items-start">
            {/* Column 1 */}
            <div className="flex-1">
              <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center mb-4">
                <Code2 className="w-5 h-5 text-primary" />
              </div>
              <h3 className="text-3xl md:text-4xl font-semibold text-foreground mb-2">Digital Services</h3>
              <p className="text-muted-foreground text-sm mb-6">
                We work selectively with organizations to design, build, and scale digital systems – spanning strategy, experience design, and engineering.
              </p>
              <p className="text-muted-foreground text-sm">
                Our services keep us grounded in real-world challenges while informing the long-term products we build.
              </p>
            </div>
            
            {/* Column 2 */}
            <div className="flex-1 space-y-6">
              <div>
                <h4 className="font-semibold text-foreground mb-2">Software Development</h4>
                <p className="text-sm text-muted-foreground">We design and build reliable software systems from concept to deployment, with a focus on scalability, quality, and long-term maintainability.</p>
              </div>
              <div>
                <h4 className="font-semibold text-foreground mb-2">Company Incorporation</h4>
                <p className="text-sm text-muted-foreground">We help organizations set up and transition offshore development centers with clear governance and smooth handover.</p>
              </div>
              <div>
                <h4 className="font-semibold text-foreground mb-2">Data Analytics & Intelligence</h4>
                <p className="text-sm text-muted-foreground">We turn raw data into actionable insight through analytics systems designed for decision-making, not just reporting.</p>
              </div>
            </div>
            
            {/* Column 3 */}
            <div className="flex-1 space-y-6">
              <div>
                <h4 className="font-semibold text-foreground mb-2">Staff Augmentation</h4>
                <p className="text-sm text-muted-foreground">We integrate experienced engineers and designers into your team to close capability gaps and accelerate delivery.</p>
              </div>
              <div>
                <h4 className="font-semibold text-foreground mb-2">AI Strategy & Implementation</h4>
                <p className="text-sm text-muted-foreground">We help teams identify where AI adds real value, define clear roadmaps, and implement solutions that are usable and grounded in reality.</p>
              </div>
              <div>
                <h4 className="font-semibold text-foreground mb-2">System Integration & Architecture</h4>
                <p className="text-sm text-muted-foreground">We design and integrate modern architectures that bring new capabilities into existing systems cleanly and securely.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatWeDoSection;
