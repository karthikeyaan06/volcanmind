import { ArrowRight, Globe, Code2 } from "lucide-react";
import powerImg from "@/assets/power.png";

const WhatWeDoSection = () => {
  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-6">
        <div className="rounded-[2rem] border border-slate-900/10 bg-white/72 px-6 py-10 shadow-[0_30px_90px_rgba(15,23,42,0.08)] backdrop-blur-xl md:px-10 md:py-12">
          <p className="text-primary text-sm font-medium mb-2">Our Work</p>
          <h2 className="text-3xl md:text-4xl font-semibold text-foreground mb-4">What We Do</h2>
          <p className="text-muted-foreground mb-16">
            We build and operate thoughtful digital products, and partner with organizations to design and scale durable digital systems.
            Our work is focused on long-term value - where quality, clarity, and growth are allowed to coexist.
          </p>

          <div id="products" className="mb-20 grid gap-12 md:grid-cols-2">
            <div>
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-secondary">
                <Globe className="h-5 w-5 text-primary" />
              </div>
              <h3 className="mb-4 text-3xl font-semibold text-foreground md:text-4xl">Digital Products</h3>
              <p className="mb-3 text-muted-foreground">
                We build and operate digital products in spaces where quality and scale often come into conflict. Each digital product is chosen deliberately and designed to endure.
              </p>
              <p className="mb-6 text-muted-foreground">
                Our focus is on creating systems that enable inclusive growth without sacrificing craft or intent.
              </p>
              <a href="https://teabasket.shop/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-lg border border-border px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-secondary">
                Visit Tea Basket <ArrowRight className="h-4 w-4" />
              </a>
            </div>

            <div className="relative flex min-h-[200px] items-start overflow-hidden p-6 text-primary-foreground md:min-h-[280px] md:p-12" style={{ background: "linear-gradient(135deg, hsl(150, 50%, 20%), hsl(140, 60%, 25%))" }}>
              <div className="relative z-10 flex w-full flex-col pr-4 md:w-1/2 md:pr-8">
                <p className="mb-1 text-xs opacity-80">Flagship Venture</p>
                <h4 className="mb-3 text-base font-semibold">Tea Basket</h4>
                <p className="mb-3 text-xs opacity-90">
                  A curated e-commerce platform enabling small, high-quality tea producers to reach everyday consumers - without needing large-scale infrastructure.
                </p>
                <p className="text-xs opacity-80">
                  Tea Basket reflects our belief that quality should scale without losing its character.
                </p>
              </div>
              <div className="absolute bottom-0 right-0 top-0 w-full opacity-30 md:w-1/2 md:opacity-100">
                <img src={powerImg} alt="Power" className="h-full w-full object-cover" />
              </div>
            </div>
          </div>

          <div id="services">
            <div className="flex flex-col items-start gap-8 lg:flex-row">
              <div className="flex-1">
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-secondary">
                  <Code2 className="h-5 w-5 text-primary" />
                </div>
                <h3 className="mb-2 text-3xl font-semibold text-foreground md:text-4xl">Digital Services</h3>
                <p className="mb-6 text-sm text-muted-foreground">
                  We work selectively with organizations to design, build, and scale digital systems - spanning strategy, experience design, and engineering.
                </p>
                <p className="text-sm text-muted-foreground">
                  Our services keep us grounded in real-world challenges while informing the long-term products we build.
                </p>
              </div>

              <div className="flex-1 space-y-6">
                <div>
                  <h4 className="mb-2 font-semibold text-foreground">Software Development</h4>
                  <p className="text-sm text-muted-foreground">We design and build reliable software systems from concept to deployment, with a focus on scalability, quality, and long-term maintainability.</p>
                </div>
                <div>
                  <h4 className="mb-2 font-semibold text-foreground">Company Incorporation</h4>
                  <p className="text-sm text-muted-foreground">We help organizations set up and transition offshore development centers with clear governance and smooth handover.</p>
                </div>
                <div>
                  <h4 className="mb-2 font-semibold text-foreground">Data Analytics & Intelligence</h4>
                  <p className="text-sm text-muted-foreground">We turn raw data into actionable insight through analytics systems designed for decision-making, not just reporting.</p>
                </div>
              </div>

              <div className="flex-1 space-y-6">
                <div>
                  <h4 className="mb-2 font-semibold text-foreground">Staff Augmentation</h4>
                  <p className="text-sm text-muted-foreground">We integrate experienced engineers and designers into your team to close capability gaps and accelerate delivery.</p>
                </div>
                <div>
                  <h4 className="mb-2 font-semibold text-foreground">AI Strategy & Implementation</h4>
                  <p className="text-sm text-muted-foreground">We help teams identify where AI adds real value, define clear roadmaps, and implement solutions that are usable and grounded in reality.</p>
                </div>
                <div>
                  <h4 className="mb-2 font-semibold text-foreground">System Integration & Architecture</h4>
                  <p className="text-sm text-muted-foreground">We design and integrate modern architectures that bring new capabilities into existing systems cleanly and securely.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatWeDoSection;
