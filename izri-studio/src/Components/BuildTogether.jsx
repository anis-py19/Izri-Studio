import { useNavigate } from "react-router-dom";

function BuildTogether() {
  const navigate = useNavigate();

  const talents = [
    { title: "Developers", icon: "💻" },
    { title: "Designers", icon: "🎨" },
    { title: "Business Strategists", icon: "📈" },
    { title: "Content Creators", icon: "✍️" },
    { title: "Marketing Experts", icon: "📢" },
    { title: "Entrepreneurs", icon: "🚀" },
    { title: "Students", icon: "🎓" },
    { title: "Creative Thinkers", icon: "🧠" }
  ];

  return (
    <section className="bg-bg py-20 px-7 md:px-16 lg:px-24 relative overflow-hidden">
      {/* Decorative blurry backgrounds */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-accent/5 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        
        {/* Left column: Text Narrative & Badges */}
        <div className="lg:col-span-7 space-y-6">
          <span className="inline-block text-accent font-semibold tracking-[0.25em] text-xs uppercase mb-1">
            Collaboration
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-text-heading font-serif leading-tight">
            Let's <span className="text-accent">Build Together</span>
          </h2>
          <div className="h-1 w-16 bg-accent rounded-full mb-6"></div>

          <p className="text-text-body/90 text-base md:text-lg font-light leading-relaxed">
            At Izri Studio, we believe that the best products are created through collaboration. We don't just work in silos; we construct ecosystems where talented creatives merge their skills to create exceptional digital assets.
          </p>

          <p className="text-text-muted text-sm md:text-base leading-relaxed font-light">
            We are building an open collaborative collective. Whether you want to gain real-world experience, expand your portfolio, learn from industry specialists, or launch a co-founded SaaS project, there is a place for you here.
          </p>

          {/* Talents Badge Showcase */}
          <div className="pt-4">
            <h4 className="text-xs uppercase tracking-wider font-semibold text-text-heading mb-4">
              We Invite Collaborations With:
            </h4>
            <div className="flex flex-wrap gap-3">
              {talents.map((item, idx) => (
                <span
                  key={idx}
                  className="inline-flex items-center gap-2 bg-surface border border-border-subtle shadow-sm px-3.5 py-1.5 rounded-full text-xs font-medium text-text-body/95 hover:border-accent/40 hover:-translate-y-0.5 transition-all duration-300"
                >
                  <span>{item.icon}</span>
                  <span>{item.title}</span>
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Right column: Action Showcase Card */}
        <div className="lg:col-span-5">
          <div className="bg-primary-dark text-white p-8 md:p-10 rounded-2xl shadow-xl border border-white/5 relative overflow-hidden">
            {/* Soft backdrop blur decoration */}
            <div className="absolute right-0 top-0 w-48 h-48 bg-accent/15 rounded-full blur-[80px] pointer-events-none"></div>

            <div className="relative z-10 space-y-6">
              <h3 className="text-xl md:text-2xl font-bold font-serif text-accent">
                Become Part of the Collective
              </h3>
              
              <p className="text-primary-light/80 text-sm font-light leading-relaxed">
                Talented people can collaborate on real-world client briefs, participate in hackathons, build outstanding case studies, learn directly from each other, and create successful digital products together.
              </p>

              <div className="h-[1px] bg-white/10 w-full my-6"></div>

              {/* Two CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 w-full">
                <button
                  onClick={() => navigate("/contact")}
                  className="flex-1 px-5 py-3 bg-accent hover:bg-accent-hover text-white text-xs font-semibold rounded-sm tracking-wider uppercase text-center transition-all duration-300 hover:shadow-lg hover:shadow-accent/25 cursor-pointer"
                >
                  Join Our Network
                </button>
                
                <button
                  onClick={() => navigate("/contact")}
                  className="flex-1 px-5 py-3 border border-white/20 hover:bg-white/10 text-white text-xs font-semibold rounded-sm tracking-wider uppercase text-center transition-all duration-300 cursor-pointer"
                >
                  Start a Collaboration
                </button>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

export default BuildTogether;
