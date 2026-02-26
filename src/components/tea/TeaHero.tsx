import TeaButton from "./TeaButton";
import heroImage from "@/assets/tea-hero.jpg";

const TeaHero = () => {
  return (
    <section
      className="relative h-screen bg-cover bg-center flex items-center justify-center text-center"
      style={{ backgroundImage: `url(${heroImage})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Content */}
      <div className="relative z-10 max-w-3xl px-6 text-white">
        <p className="mb-4 text-sm tracking-wide uppercase opacity-80">
          Teabasket
        </p>

        <h1 className="text-4xl md:text-6xl font-serif font-semibold leading-tight mb-6">
          Better tea,<br /> made accessible
        </h1>

        <p className="text-lg opacity-90 mb-8">
          Teas from dedicated producers, curated for everyday drinking
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <TeaButton variant="primary">Shop teas →</TeaButton>
          <TeaButton variant="secondary">Explore Our Teas</TeaButton>
        </div>
      </div>
    </section>
  );
};

export default TeaHero;