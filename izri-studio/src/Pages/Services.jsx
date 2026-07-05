import { useNavigate } from "react-router-dom";

function Services() {
  const navigate = useNavigate();

  const services = [
    {
      title: "Business Strategy",
      description: "Define your market position, identify growth avenues, map target demographics, and design products aligned with business metrics.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      )
    },
    {
      title: "Website Development",
      description: "Performant, fully responsive, and highly secure web systems built with modern stacks (React, Vite, Tailwind v4). Custom coded for scale.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      )
    },
    {
      title: "Landing Pages",
      description: "Conversion-optimized landing layouts structured to capture leads, tell product stories, and drive sales funnel metrics.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
        </svg>
      )
    },
    {
      title: "UI / UX Design",
      description: "Immersive layout mapping, interactive wireframes, and custom design systems balancing visual flair with usability.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zm0 8a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1v-2zm0 8a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1v-2z" />
        </svg>
      )
    },
    {
      title: "Brand Identity",
      description: "Distill the soul of your company into standard-setting visual markers: typography guidelines, logo kits, palettes, and brand voice books.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
        </svg>
      )
    },
    {
      title: "SEO Optimization",
      description: "Rank higher on search results with semantic code headers, meta configuration, sitemap integration, and mobile compatibility enhancements.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
      )
    },
    {
      title: "Performance Optimization",
      description: "Optimize image sizes, implement lazy loading, minify script structures, and refine DOM tree parsing to score perfect Google Lighthouse ratings.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      )
    },
    {
      title: "Maintenance & Support",
      description: "Continuous version updates, server maintenance logs, security audits, database backups, and dedicated active communication.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      )
    }
  ];

  return (
    <section className="bg-bg text-text-body py-24 min-h-screen">
      <div className="max-w-7xl mx-auto px-7 md:px-16 lg:px-24">
        
        {/* Header Block */}
        <div className="text-center max-w-2xl mx-auto mb-20">
          <span className="inline-block text-accent font-semibold tracking-[0.25em] text-xs uppercase mb-2">
            Section 03 / Services
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-text-heading leading-tight tracking-tight">
            Best <span className="text-accent">Services</span>
          </h1>
          <div className="h-1 w-16 bg-accent rounded-full mx-auto mt-4 mb-6"></div>
          <p className="text-text-muted text-base md:text-lg font-light leading-relaxed">
            We don't just build websites. We build businesses. Explore our suite of modern digital solutions tailored to elevate your business.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((svc, idx) => (
            <div
              key={idx}
              className="bg-surface p-8 rounded-xl border border-border-subtle shadow-sm flex flex-col justify-between transition-all duration-300 hover:-translate-y-2 hover:shadow-md hover:border-accent/40 group relative overflow-hidden"
            >
              {/* Subtle accent hover indicator background line */}
              <div className="absolute top-0 left-0 w-0 h-1 bg-accent transition-all duration-300 group-hover:w-full"></div>
              
              <div>
                {/* Icon wrapper */}
                <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center text-accent mb-6 transition-all duration-300 group-hover:bg-accent group-hover:text-white">
                  {svc.icon}
                </div>
                
                {/* Title */}
                <h3 className="text-lg font-bold text-text-heading mb-3 font-sans transition-colors duration-300 group-hover:text-accent">
                  {svc.title}
                </h3>
                
                {/* Description */}
                <p className="text-text-muted text-sm leading-relaxed font-light">
                  {svc.description}
                </p>
              </div>

              {/* Card Action Link CTA */}
              <div className="pt-6">
                <button
                  onClick={() => navigate("/contact")}
                  className="text-xs uppercase font-semibold tracking-wider text-accent group-hover:text-accent-dark flex items-center gap-1 cursor-pointer transition-colors duration-300"
                >
                  Get Started 
                  <svg className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Services;