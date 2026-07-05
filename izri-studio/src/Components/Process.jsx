function Process() {
  const steps = [
    {
      num: "01",
      title: "Discovery",
      description: "Understanding your business goals, target audience, competitive landscape, and product objectives.",
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
      )
    },
    {
      num: "02",
      title: "Strategy",
      description: "Mapping the digital architecture, wireframing workflows, choosing technologies, and planning conversions.",
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
        </svg>
      )
    },
    {
      num: "03",
      title: "Execution",
      description: "Crafting bespoke designs and writing high-performance React code structured for speed and clean scaling.",
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      )
    },
    {
      num: "04",
      title: "Delivery",
      description: "Rigorous testing across browsers and viewport widths, loading speed optimizations, and a flawless launch.",
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
        </svg>
      )
    },
    {
      num: "05",
      title: "Support",
      description: "Ongoing optimizations, version maintenance, conversion adjustments, security checkups, and brand scaling advice.",
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      )
    }
  ];

  return (
    <section className="bg-bg py-20 px-7 md:px-16 lg:px-24 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-20">
          <span className="inline-block text-accent font-semibold tracking-[0.25em] text-xs uppercase mb-2">
            Process
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-text-heading font-serif">
            Our <span className="text-accent">Process</span>
          </h2>
          <div className="h-1 w-16 bg-accent rounded-full mx-auto mt-4 mb-4"></div>
          <p className="text-text-muted text-sm md:text-base font-light leading-relaxed mt-4">
            We follow a structured 5-step blueprint to guide your project smoothly from abstract vision to pixel-perfect launch.
          </p>
        </div>

        {/* Timeline Layout */}
        <div className="relative">
          
          {/* Connector Line (Desktop) */}
          <div className="absolute top-[42px] left-4 right-4 h-[2px] bg-divider hidden lg:block z-0"></div>

          {/* Timeline Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-6 relative z-10">
            {steps.map((step, idx) => (
              <div 
                key={idx} 
                className="group flex flex-col items-center lg:items-start space-y-4 text-center lg:text-left bg-surface lg:bg-transparent p-6 lg:p-0 rounded-xl border border-border-subtle lg:border-none shadow-sm lg:shadow-none"
              >
                
                {/* Step Node / Badge */}
                <div className="flex items-center justify-between w-full lg:w-auto">
                  <div className="w-12 h-12 rounded-full bg-accent text-white flex items-center justify-center font-serif text-lg font-bold shadow-md transition-all duration-300 group-hover:scale-110 group-hover:bg-primary-dark">
                    {step.num}
                  </div>
                  
                  {/* Decorative tag for mobile card view */}
                  <span className="lg:hidden w-8 h-8 rounded-lg bg-accent/10 flex items-center justify-center text-accent">
                    {step.icon}
                  </span>
                </div>

                {/* Content */}
                <div className="space-y-2 pt-2">
                  <div className="hidden lg:flex items-center gap-2 text-accent">
                    <span className="w-7 h-7 rounded-lg bg-accent/10 flex items-center justify-center">
                      {step.icon}
                    </span>
                    <span className="text-[10px] uppercase font-mono tracking-widest font-semibold">Phase {step.num}</span>
                  </div>

                  <h3 className="text-lg font-bold text-text-heading transition-colors duration-300 group-hover:text-accent font-sans">
                    {step.title}
                  </h3>
                  
                  <p className="text-text-muted text-xs md:text-sm leading-relaxed font-light">
                    {step.description}
                  </p>
                </div>

                {/* Mobile/Tablet Arrow separators */}
                {idx < steps.length - 1 && (
                  <div className="lg:hidden text-accent text-xl py-2">
                    ↓
                  </div>
                )}
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}

export default Process;
