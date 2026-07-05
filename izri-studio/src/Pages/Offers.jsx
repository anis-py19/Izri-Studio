import { useNavigate } from "react-router-dom";

function Offers() {
  const navigate = useNavigate();

  const tiers = [
    {
      name: "Essential Brand",
      price: "$2,499",
      period: "per project",
      desc: "Perfect for startups needing a premium visual identity and high-impact landing strategy.",
      features: [
        "Bespoke Brand Identity System",
        "1 Conversion-Optimized Landing Page",
        "Fully Mobile Responsive UI",
        "Basic SEO Configuration",
        "30 Days Post-Launch Support",
        "Figma File Handover"
      ],
      isPopular: false,
      ctaText: "Get Brand Plan"
    },
    {
      name: "Growth Website",
      price: "$4,999",
      period: "per project",
      desc: "Ideal for growing businesses looking for full website development and brand integration.",
      features: [
        "Complete Brand Identity Suite",
        "Up to 5 Pages Custom Developed",
        "Next-gen React & Tailwind Stack",
        "Advanced SEO & Metadata Setup",
        "Speed & Performance Auditing",
        "60 Days Post-Launch Support"
      ],
      isPopular: true,
      ctaText: "Get Growth Plan"
    },
    {
      name: "Bespoke Enterprise",
      price: "Custom",
      period: "based on scope",
      desc: "Tailored for businesses requiring complex systems, web apps, databases, or headless CMS platforms.",
      features: [
        "Everything in Growth Plan",
        "Unlimited Custom Developed Pages",
        "Dedicated Custom Backend / API Routing",
        "Advanced Interactive UX Wireframes",
        "99.9% Lighthouse Speed Tuning",
        "6 Months Premium Support SLA"
      ],
      isPopular: false,
      ctaText: "Inquire Now"
    }
  ];

  return (
    <section className="bg-bg text-text-body py-24 min-h-screen">
      <div className="max-w-7xl mx-auto px-7 md:px-16 lg:px-24">
        
        {/* Header Block */}
        <div className="text-center max-w-2xl mx-auto mb-20">
          <span className="inline-block text-accent font-semibold tracking-[0.25em] text-xs uppercase mb-2">
            Section 08 / Packages
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-text-heading leading-tight tracking-tight">
            Special <span className="text-accent">Offers</span>
          </h1>
          <div className="h-1 w-16 bg-accent rounded-full mx-auto mt-4 mb-6"></div>
          <p className="text-text-muted text-base md:text-lg font-light leading-relaxed">
            Transparent packages designed to meet your business needs, whether you are launching a new brand or building a custom web system.
          </p>
        </div>

        {/* Pricing Grids */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {tiers.map((tier, idx) => (
            <div
              key={idx}
              className={`bg-surface p-8 rounded-2xl border flex flex-col justify-between transition-all duration-300 relative overflow-hidden ${
                tier.isPopular 
                  ? "border-accent shadow-lg md:-translate-y-4 scale-[1.02] md:scale-[1.03] z-10" 
                  : "border-border-subtle shadow-sm hover:shadow-md hover:border-accent/40"
              }`}
            >
              
              {/* Popular flag */}
              {tier.isPopular && (
                <div className="absolute top-0 right-0 bg-accent text-white text-[10px] font-mono font-bold uppercase tracking-widest px-4 py-1.5 rounded-bl-lg">
                  Most Popular
                </div>
              )}

              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-bold text-text-heading font-sans mb-1">
                    {tier.name}
                  </h3>
                  <p className="text-text-muted text-xs leading-relaxed font-light min-h-[48px]">
                    {tier.desc}
                  </p>
                </div>

                <div className="flex items-baseline gap-1">
                  <span className="text-4xl md:text-5xl font-bold text-text-heading font-serif">
                    {tier.price}
                  </span>
                  <span className="text-text-muted text-xs">
                    / {tier.period}
                  </span>
                </div>

                <div className="h-[1px] bg-divider w-full"></div>

                {/* Features list */}
                <ul className="space-y-3.5 text-xs md:text-sm font-light">
                  {tier.features.map((feature, fIdx) => (
                    <li key={fIdx} className="flex items-center gap-3">
                      <span className="w-5 h-5 rounded-full bg-accent/10 flex items-center justify-center text-accent shrink-0">
                        <svg className="w-3 h-3" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                      </span>
                      <span className="text-text-body/90">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Action button */}
              <div className="pt-8">
                <button
                  onClick={() => navigate("/contact", { state: { selectedPlan: tier.name } })}
                  className={`w-full py-3.5 text-xs font-semibold rounded-sm tracking-wider uppercase text-center transition-all duration-300 cursor-pointer ${
                    tier.isPopular
                      ? "bg-accent hover:bg-accent-hover text-white hover:shadow-lg hover:shadow-accent/25"
                      : "border border-divider text-text-heading hover:bg-bg-alt/30"
                  }`}
                >
                  {tier.ctaText}
                </button>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Offers;