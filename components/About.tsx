import AboutHeader from "./_about/AboutHeader";
import AboutText from "./_about/AboutText";
import AboutCarousel from "./_about/AboutCarousel";

export default function AboutSection() {
  return (
    <section
      id="about"
      className="mx-auto py-20 flex flex-col md:flex-row items-center md:items-start gap-12"
    >
      {/* Left: Text */}
      <div className="md:w-1/2">
        <AboutHeader />
        <AboutText />
      </div>

      {/* Right: Image carousel */}
      <div className="md:w-1/2 flex justify-center">
        <AboutCarousel />
      </div>
    </section>
  );
}
