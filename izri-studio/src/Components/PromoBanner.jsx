import { useNavigate } from "react-router-dom";

function PromoBanner() {
  const navigate = useNavigate();

  return (
    <section className="bg-primary-dark text-white py-12 px-7 md:px-16 lg:px-24 border-y border-white/5 relative overflow-hidden">
      {/* Subtle decorative background gradient */}
      <div className="absolute top-0 right-0 w-80 h-full bg-gradient-to-l from-accent/15 via-transparent to-transparent pointer-events-none"></div>

      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row lg:items-center justify-between gap-8 relative z-10">
        
        {/* Left Side: Copy */}
        <div className="space-y-3 max-w-2xl">
          <span className="text-accent font-mono uppercase tracking-[0.25em] text-[10px] md:text-xs font-semibold">
            Let's Collaborate
          </span>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold font-serif tracking-tight leading-tight">
            Ready to Build Something <span className="text-accent">Amazing?</span>
          </h2>
          <p className="text-primary-light/70 text-xs md:text-base font-light">
            Let's transform your ideas into a powerful, high-performance digital experience.
          </p>
        </div>

        {/* Right Side: CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 sm:items-center">
          <button
            onClick={() => navigate("/contact")}
            className="px-6 py-3 bg-accent hover:bg-accent-hover text-white text-xs md:text-sm font-semibold rounded-sm uppercase tracking-wider transition-all duration-300 hover:shadow-lg hover:shadow-accent/25 cursor-pointer whitespace-nowrap text-center"
          >
            Book Free Consultation
          </button>
          
          <button
            onClick={() => navigate("/contact")}
            className="px-6 py-3 border border-white/20 hover:bg-white/10 text-white text-xs md:text-sm font-semibold rounded-sm uppercase tracking-wider transition-all duration-300 cursor-pointer whitespace-nowrap text-center"
          >
            Get Quote
          </button>
        </div>

      </div>
    </section>
  );
}

export default PromoBanner;
