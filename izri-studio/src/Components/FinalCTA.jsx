import { useNavigate } from "react-router-dom";

function FinalCTA() {
  const navigate = useNavigate();

  return (
    <section className="bg-bg py-24 px-7 md:px-16 lg:px-24 relative overflow-hidden text-center border-t border-border-subtle">
      {/* Dynamic backdrop glows */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-accent/5 rounded-full blur-[100px] pointer-events-none"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent-hover/5 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-4xl mx-auto relative z-10 space-y-8">
        
        <span className="inline-block text-accent font-semibold tracking-[0.25em] text-xs uppercase mb-1">
          Project Launchpad
        </span>
        
        {/* Title utilizing the custom .animated-border utility from design system */}
        <h2 className="text-4xl md:text-6xl font-bold text-text-heading font-serif tracking-tight leading-tight">
          <span className="animated-border">
            Let's Build Your <span className="text-accent">Next Big Project</span>
          </span>
        </h2>
        
        <p className="text-text-muted text-sm md:text-lg max-w-xl mx-auto font-light leading-relaxed pt-4">
          Partner with us to create a bespoke, responsive web presence and strategic roadmap that turns visitors into lifelong customers.
        </p>

        {/* Action Buttons */}
        <div className="pt-6 flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button
            onClick={() => navigate("/contact")}
            className="px-8 py-3.5 bg-accent hover:bg-accent-hover text-white text-xs md:text-sm font-semibold rounded-sm uppercase tracking-wider transition-all duration-300 hover:shadow-lg hover:shadow-accent/25 cursor-pointer w-full sm:w-auto text-center"
          >
            Contact Us
          </button>
          
          <button
            onClick={() => navigate("/contact")}
            className="px-8 py-3.5 border border-divider text-text-heading hover:bg-bg-alt/30 text-xs md:text-sm font-semibold rounded-sm uppercase tracking-wider transition-all duration-300 cursor-pointer w-full sm:w-auto text-center"
          >
            Start Now
          </button>
        </div>

      </div>
    </section>
  );
}

export default FinalCTA;
