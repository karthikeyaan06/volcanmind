import Ephemeral from "@/assets/Ephemeral.png";
import Wildcrafted from "@/assets/Wildcrafted.png";
import Codecraft from "@/assets/Codecraft_.png";
import Convergence from "@/assets/Convergence.png";
import ImgCompress from "@/assets/ImgCompress.png";
import Epicurious from "@/assets/Epicurious.png";
import Watchtower from "@/assets/Watchtower.png";
import Renaissance from "@/assets/Renaissance.png";

const clientLogos = [
  { name: "Ephemeral", img: Ephemeral },
  { name: "Wildcrafted", img: Wildcrafted },
  { name: "Codecraft", img: Codecraft },
  { name: "Convergence", img: Convergence },
  { name: "ImgCompress", img: ImgCompress },
  { name: "Epicurious", img: Epicurious },
  { name: "Watchtower", img: Watchtower },
  { name: "Renaissance", img: Renaissance },
];

const ExperienceSection = () => {
  return (
    <section id="experience" className="py-20 border-t border-border">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl font-semibold text-foreground mb-4">Experience Across Industries</h2>
            <p className="text-muted-foreground font-medium mb-4">Shaped by building across contexts and scales</p>
            <p className="text-sm text-muted-foreground mb-3">
              Our team's perspective has been shaped by building products within established organizations and growing ventures across industries.
            </p>
            <p className="text-sm text-muted-foreground mb-3">
              We carry those learnings into every system we design and build today.
            </p>
            <p className="text-sm text-muted-foreground mb-4">
              Our current project profiles are from Healthcare, Supply chain and Logistic clientele*
            </p>
            <p className="text-xs text-muted-foreground italic">* Client names not disclosed due to NDA agreements</p>
          </div>
          <div className="grid grid-cols-3 gap-8 items-start w-[480px] h-[150px] ml-24">
            {clientLogos.map((logo, index) => (
              <div 
                key={logo.name} 
                className="flex items-center justify-center animate-fade-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <img src={logo.img} alt={logo.name} className="w-full h-auto max-h-10 object-contain" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
