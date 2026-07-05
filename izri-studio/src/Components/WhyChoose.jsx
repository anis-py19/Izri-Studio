function WhyChoose() {
  const features = [
    {
      title: "Custom Solutions",
      description: "No pre-made templates. We design and build from scratch to ensure your system perfectly serves your brand strategy.",
      emoji: "💡"
    },
    {
      title: "Fast Delivery",
      description: "Optimized pipelines, sprint iterations, and focused workflows guarantee that your product launches on schedule.",
      emoji: "⚡"
    },
    {
      title: "Premium Quality",
      description: "Every pixel, transition speed, copy styling, and font kerning is audited to match elite luxury design standards.",
      emoji: "💎"
    },
    {
      title: "Business Thinking",
      description: "We don't just build layouts; we plan client funnels, conversions, product-market positioning, and growth metrics.",
      emoji: "📈"
    },
    {
      title: "Modern Technologies",
      description: "Built with cutting-edge libraries like React 19, Tailwind v4, and Vite to ensure speed, stability, and clean codebase.",
      emoji: "🛠️"
    },
    {
      title: "SEO Ready",
      description: "Configured with semantic HTML tag flows, search indexing configurations, and metadata strategies from day one.",
      emoji: "🔍"
    },
    {
      title: "Mobile First",
      description: "Every layout scales seamlessly. Fluid testing on screen sizes ensures a stunning mobile, tablet, and desktop view.",
      emoji: "📱"
    },
    {
      title: "Scalable Architecture",
      description: "Modular component layouts and cleanly layered structures ensure that updating or adding features is fluid as you scale.",
      emoji: "🏗️"
    },
    {
      title: "Lifetime Advice",
      description: "We provide strategic guidance and expert consultations even after the initial build, forming a long-term alliance.",
      emoji: "🤝"
    },
    {
      title: "Transparent Process",
      description: "Clear timelines, regular sprint reviews, and open Slack/email channels keep you in the loop at every milestone.",
      emoji: "👁️"
    }
  ];

  return (
    <section className="bg-bg-alt/35 border-y border-border-subtle py-20 px-7 md:px-16 lg:px-24">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-16">
          <span className="inline-block text-accent font-semibold tracking-[0.25em] text-xs uppercase mb-2">
            Core Features
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-text-heading font-serif leading-tight">
            Why Choose <br />
            <span className="text-accent">Izri Studio</span>
          </h2>
          <div className="h-1 w-16 bg-accent rounded-full mt-4"></div>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {features.map((feat, idx) => (
            <div
              key={idx}
              className="bg-surface p-6 rounded-xl border border-border-subtle shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between group"
            >
              <div>
                {/* Emoji/Icon header */}
                <div className="w-10 h-10 rounded-lg bg-bg-alt/60 flex items-center justify-center text-xl mb-4 group-hover:bg-accent/10 transition-colors duration-300">
                  {feat.emoji}
                </div>
                
                {/* Feature Title */}
                <h3 className="text-base font-bold text-text-heading mb-2 font-sans transition-colors duration-300 group-hover:text-accent">
                  {feat.title}
                </h3>
                
                {/* Feature Description */}
                <p className="text-text-muted text-xs md:text-sm leading-relaxed font-light">
                  {feat.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default WhyChoose;
