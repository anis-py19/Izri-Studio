import { useNavigate } from "react-router-dom";
import image from "./../assets/img1.jpg";

function About() {
  const navigate = useNavigate();

  return (
    <section className="bg-bg text-text-body relative overflow-hidden py-16 md:py-24">
      {/* Container */}
      <div className="max-w-7xl mx-auto px-7 md:px-16 lg:px-24">
        {/* Section Title */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block text-accent font-semibold tracking-[0.25em] text-xs uppercase mb-2">
            Section 02 / About Us
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-text-heading leading-tight tracking-tight">
            About <span className="text-accent">Izri Studio</span>
          </h2>
          <div className="h-1 w-16 bg-accent rounded-full mx-auto mt-4"></div>
        </div>

        {/* Narrative & Visual Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center mb-20">
          {/* Left Column: Short Story & Core Direction */}
          <div className="lg:col-span-7 space-y-6">
            <h3 className="text-2xl md:text-3xl font-bold text-text-heading font-serif">
              Where Vision Meets Craft
            </h3>

            <p className="text-text-body/90 text-base md:text-lg font-light leading-relaxed">
              Izri Studio was founded on the belief that digital experiences
              should be both visually arresting and strategically powerful. We
              don't just build websites; we build cohesive, growth-oriented
              digital assets that elevate businesses and clarify brand
              narratives.
            </p>

            <p className="text-text-muted text-sm md:text-base leading-relaxed">
              Our story started with a small team of creative thinkers who were
              tired of cookie-cutter digital templates. Today, we work with
              ambitious entrepreneurs and established brands alike, refining
              their online presence through custom design, optimized code, and
              brand strategy.
            </p>

            {/* Mission & Vision Row */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
              <div className="p-5 bg-bg-alt/45 border border-border-subtle rounded-lg">
                <h4 className="font-bold text-text-heading text-sm uppercase tracking-wider mb-2 flex items-center gap-2">
                  <span className="text-accent">🎯</span> Our Mission
                </h4>
                <p className="text-text-muted text-xs md:text-sm leading-relaxed">
                  To turn bold business ideas into high-end, responsive digital
                  systems that maximize engagement and drive organic growth.
                </p>
              </div>

              <div className="p-5 bg-bg-alt/45 border border-border-subtle rounded-lg">
                <h4 className="font-bold text-text-heading text-sm uppercase tracking-wider mb-2 flex items-center gap-2">
                  <span className="text-accent">👁️</span> Our Vision
                </h4>
                <p className="text-text-muted text-xs md:text-sm leading-relaxed">
                  To set new standards in branding and development, crafting
                  digital ecosystems where aesthetics and performance coexist.
                </p>
              </div>
            </div>

            <div className="pt-4">
              <button
                onClick={() => navigate("/services")}
                className="px-6 py-3 bg-accent hover:bg-accent-hover text-white text-xs font-semibold rounded-sm tracking-wider uppercase transition-all duration-300 hover:shadow-lg hover:shadow-accent/25 cursor-pointer"
              >
                Learn More
              </button>
            </div>
          </div>

          {/* Right Column: Visual Showcase Block */}
          <div className="lg:col-span-5 relative">
            {/* Elegant Background Card Shadow Backing */}
            <div className="absolute -inset-4 bg-bg-alt/80 rounded-2xl -rotate-2 scale-98 z-0"></div>

            {/* Main Image Wrapper */}
            <div className="relative z-10 w-full aspect-[4/5] rounded-2xl overflow-hidden shadow-xl border border-divider group">
              <img
                src={image}
                alt="Creative Collaboration at Izri Studio"
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary-dark/40 via-transparent to-transparent opacity-60"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
