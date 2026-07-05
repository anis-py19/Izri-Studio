import { useState } from "react";

function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      q: "How long does a project take?",
      a: "Typically, a bespoke design and development lifecycle takes between 4 to 8 weeks. This depends on complexity, features, content readiness, and review speed."
    },
    {
      q: "How much does a website cost?",
      a: "Every project we build is completely custom-designed and custom-coded. We don't use templates. Pricing varies based on the scope, strategic planning depth, animations, and database requirements."
    },
    {
      q: "Do you offer support?",
      a: "Yes, we offer dedicated monthly support contracts that cover software version upgrades, security log audits, content updates, and continuous speed optimization checks."
    },
    {
      q: "Can you redesign existing websites?",
      a: "Yes. We conduct a complete audit of your existing site's UX bottlenecks and load performances, and rebuild the interface from scratch to boost conversions."
    },
    {
      q: "Can you help with SEO?",
      a: "Absolutely. Every website we build is SEO-ready. We structure semantic elements, construct meta tagging schemas, integrate XML sitemaps, and optimize assets from the ground up."
    },
    {
      q: "Do you provide hosting?",
      a: "We deploy your project to high-performance cloud hosting networks (like Vercel, Netlify, or AWS) and coordinate domain linking, but the host account ownership remains yours."
    }
  ];

  const handleToggle = (idx) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section className="bg-bg-alt/30 border-y border-border-subtle py-20 px-7 md:px-16 lg:px-24">
      <div className="max-w-4xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-accent font-semibold tracking-[0.25em] text-xs uppercase mb-2">
            Inquiry
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-text-heading font-serif">
            Frequently Asked <span className="text-accent">Questions</span>
          </h2>
          <div className="h-1 w-16 bg-accent rounded-full mx-auto mt-4"></div>
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="bg-surface rounded-xl border border-border-subtle overflow-hidden shadow-sm transition-all duration-300"
              >
                {/* Trigger Button */}
                <button
                  onClick={() => handleToggle(idx)}
                  className="w-full py-5 px-6 md:px-8 text-left flex items-center justify-between gap-4 cursor-pointer hover:bg-bg-alt/20 transition-colors duration-300"
                >
                  <span className="font-bold text-sm md:text-base text-text-heading font-sans transition-colors duration-350 hover:text-accent">
                    {faq.q}
                  </span>
                  
                  {/* Custom animated chevron indicator */}
                  <span className={`w-6 h-6 rounded-full bg-accent/10 text-accent flex items-center justify-center shrink-0 transition-transform duration-350 ${
                    isOpen ? "rotate-180 bg-accent text-white" : ""
                  }`}>
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                    </svg>
                  </span>
                </button>

                {/* Collapsible Content */}
                <div
                  className={`transition-all duration-350 ease-in-out overflow-hidden ${
                    isOpen ? "max-h-[200px] border-t border-border-subtle" : "max-h-0"
                  }`}
                >
                  <div className="p-6 md:p-8 text-xs md:text-sm text-text-muted leading-relaxed font-light bg-bg/25">
                    {faq.a}
                  </div>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

export default FAQ;
