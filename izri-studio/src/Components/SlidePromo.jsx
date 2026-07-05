import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function SlidePromo() {
  const navigate = useNavigate();
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      title: "Build Your Digital Business",
      subtitle: "Web Development & Conversion",
      description: "We create high-performance, responsive websites that convert visitors into active customers and scale your brand.",
      buttonText: "Start Your Project",
      bgClass: "from-primary-dark via-primary-dark/90 to-accent/10",
      accentText: "Digital Business",
      link: "/contact"
    },
    {
      title: "Grow Faster With Strategy",
      subtitle: "Branding & Business Strategy",
      description: "Align your visual identity with strategic growth mapping. We combine design, market positioning, and execution.",
      buttonText: "Let's Talk",
      bgClass: "from-primary-dark via-primary-dark/90 to-primary-dark/85",
      accentText: "Strategy",
      link: "/contact"
    },
    {
      title: "Your Vision. Our Execution.",
      subtitle: "Concept to Launch",
      description: "From initial concept sketches to final codebase deployments, we build digital solutions tailored for scaling your idea.",
      buttonText: "Get Started",
      bgClass: "from-primary-dark via-primary-dark/95 to-accent/20",
      accentText: "Execution",
      link: "/services"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <section className="relative w-full h-[65vh] md:h-[60vh] bg-primary-dark text-white overflow-hidden flex items-center border-y border-white/5">
      {/* Decorative background grid pattern */}
      <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none"></div>

      {/* Main Slide Carousel container */}
      <div className="w-full h-full relative">
        {slides.map((slide, idx) => {
          const isActive = idx === currentSlide;
          return (
            <div
              key={idx}
              className={`absolute inset-0 w-full h-full flex items-center px-7 md:px-16 lg:px-24 transition-all duration-1000 ease-in-out ${
                isActive ? "opacity-100 translate-x-0 pointer-events-auto" : "opacity-0 translate-x-8 pointer-events-none"
              }`}
            >
              {/* Slide Background Gradient overlay */}
              <div className={`absolute inset-0 bg-gradient-to-r ${slide.bgClass} pointer-events-none z-0`}></div>

              {/* Decorative side accent blur */}
              <div className="absolute right-0 bottom-0 w-96 h-96 bg-accent/10 rounded-full blur-[120px] pointer-events-none z-0"></div>

              {/* Content box */}
              <div className="relative z-10 max-w-3xl space-y-4 md:space-y-6">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-[1px] bg-accent"></div>
                  <span className="text-accent font-mono uppercase tracking-[0.25em] text-xs font-semibold">
                    {slide.subtitle}
                  </span>
                </div>
                
                <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight font-serif leading-tight">
                  {slide.title.split(slide.accentText)[0]}
                  <span className="text-accent">{slide.accentText}</span>
                  {slide.title.split(slide.accentText)[1]}
                </h2>
                
                <p className="text-primary-light/75 text-sm md:text-lg max-w-xl font-light leading-relaxed">
                  {slide.description}
                </p>

                <div className="pt-4">
                  <button
                    onClick={() => navigate(slide.link)}
                    className="px-6 py-3 bg-accent hover:bg-accent-hover text-white text-xs md:text-sm font-semibold rounded-sm tracking-wider uppercase transition-all duration-300 hover:shadow-lg hover:shadow-accent/25 cursor-pointer"
                  >
                    {slide.buttonText}
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Navigation Indicators */}
      <div className="absolute bottom-8 left-0 right-0 flex justify-center gap-3 z-20">
        {slides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentSlide(idx)}
            className={`w-2.5 h-2.5 rounded-full transition-all duration-350 cursor-pointer ${
              idx === currentSlide ? "bg-accent w-8" : "bg-white/30 hover:bg-white/50"
            }`}
            aria-label={`Go to slide ${idx + 1}`}
          ></button>
        ))}
      </div>
    </section>
  );
}

export default SlidePromo;