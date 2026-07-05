import { useState } from "react";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    projectType: "Website Development",
    message: ""
  });

  const [formErrors, setFormErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const projectOptions = [
    "Website Development",
    "Business Strategy",
    "UI / UX Design",
    "Brand Identity",
    "SEO & Optimization",
    "Maintenance & Support",
    "Other Collaboration"
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
    // Clear error on write
    if (formErrors[name]) {
      setFormErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const validateForm = () => {
    const errors = {};
    if (!formData.name.trim()) errors.name = "Name is required";
    if (!formData.email.trim()) {
      errors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = "Please enter a valid email address";
    }
    if (!formData.message.trim()) errors.message = "Message cannot be empty";
    return errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = validateForm();
    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
    } else {
      setFormErrors({});
      setIsSubmitted(true);
      // Simulate API call
      setTimeout(() => {
        setIsSubmitted(false);
        setFormData({
          name: "",
          email: "",
          projectType: "Website Development",
          message: ""
        });
        alert("Thank you! Your message has been sent successfully. We will get back to you within 24 hours.");
      }, 1000);
    }
  };

  return (
    <section className="bg-bg text-text-body py-24 min-h-screen">
      <div className="max-w-7xl mx-auto px-7 md:px-16 lg:px-24">
        
        {/* Header Block */}
        <div className="text-center max-w-2xl mx-auto mb-20">
          <span className="inline-block text-accent font-semibold tracking-[0.25em] text-xs uppercase mb-2">
            et In Touch
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-text-heading leading-tight tracking-tight">
            Contact <span className="text-accent">Us</span>
          </h1>
          <div className="h-1 w-16 bg-accent rounded-full mx-auto mt-4 mb-6"></div>
          <p className="text-text-muted text-base md:text-lg font-light leading-relaxed">
            Have a project in mind or want to start a collaboration? Drop us a line below and let's construct something amazing.
          </p>
        </div>

        {/* Contact Page Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Form */}
          <div className="lg:col-span-7 bg-surface p-8 md:p-10 rounded-2xl border border-border-subtle shadow-sm">
            <h3 className="text-xl font-bold text-text-heading font-sans mb-6">
              Send Us a Message
            </h3>

            <form onSubmit={handleSubmit} className="space-y-6">
              
              {/* Name Field */}
              <div className="space-y-1.5">
                <label htmlFor="name" className="text-xs uppercase tracking-wider font-semibold text-text-heading">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className={`w-full px-4 py-3 bg-bg-alt/30 border rounded-sm text-sm focus:outline-none focus:border-accent transition-colors duration-300 ${
                    formErrors.name ? "border-error" : "border-border"
                  }`}
                  placeholder="Your full name"
                />
                {formErrors.name && (
                  <p className="text-xs text-error font-medium">{formErrors.name}</p>
                )}
              </div>

              {/* Email Field */}
              <div className="space-y-1.5">
                <label htmlFor="email" className="text-xs uppercase tracking-wider font-semibold text-text-heading">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className={`w-full px-4 py-3 bg-bg-alt/30 border rounded-sm text-sm focus:outline-none focus:border-accent transition-colors duration-300 ${
                    formErrors.email ? "border-error" : "border-border"
                  }`}
                  placeholder="Your email address"
                />
                {formErrors.email && (
                  <p className="text-xs text-error font-medium">{formErrors.email}</p>
                )}
              </div>

              {/* Project Type Select */}
              <div className="space-y-1.5">
                <label htmlFor="projectType" className="text-xs uppercase tracking-wider font-semibold text-text-heading">
                  Project Scope
                </label>
                <select
                  id="projectType"
                  name="projectType"
                  value={formData.projectType}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-bg-alt/30 border border-border rounded-sm text-sm focus:outline-none focus:border-accent cursor-pointer"
                >
                  {projectOptions.map((opt, oIdx) => (
                    <option key={oIdx} value={opt}>
                      {opt}
                    </option>
                  ))}
                </select>
              </div>

              {/* Message Field */}
              <div className="space-y-1.5">
                <label htmlFor="message" className="text-xs uppercase tracking-wider font-semibold text-text-heading">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  value={formData.message}
                  onChange={handleInputChange}
                  className={`w-full px-4 py-3 bg-bg-alt/30 border rounded-sm text-sm focus:outline-none focus:border-accent transition-colors duration-300 resize-none ${
                    formErrors.message ? "border-error" : "border-border"
                  }`}
                  placeholder="Tell us about your project or goals..."
                ></textarea>
                {formErrors.message && (
                  <p className="text-xs text-error font-medium">{formErrors.message}</p>
                )}
              </div>

              {/* Submit Button */}
              <div>
                <button
                  type="submit"
                  disabled={isSubmitted}
                  className="w-full py-4 bg-accent hover:bg-accent-hover text-white text-xs md:text-sm font-semibold rounded-sm uppercase tracking-wider transition-all duration-300 hover:shadow-lg hover:shadow-accent/25 cursor-pointer disabled:opacity-50"
                >
                  {isSubmitted ? "Sending..." : "Submit Inquiry"}
                </button>
              </div>

            </form>
          </div>

          {/* Right Column: Contact details & Info */}
          <div className="lg:col-span-5 space-y-8">
            
            {/* Details Card */}
            <div className="bg-primary-dark text-white p-8 md:p-10 rounded-2xl shadow-sm border border-white/5 space-y-6 relative overflow-hidden">
              <div className="absolute right-0 top-0 w-36 h-36 bg-accent/10 rounded-full blur-3xl pointer-events-none"></div>

              <h3 className="text-xl font-bold font-serif text-accent relative z-10">
                Contact Information
              </h3>

              <div className="space-y-5 relative z-10 font-light">
                <div className="flex items-start gap-4">
                  <span className="text-xl">✉️</span>
                  <div>
                    <span className="block text-[10px] uppercase text-white/40 tracking-wider">Email Us</span>
                    <a href="mailto:hello@izristudio.com" className="text-sm hover:text-accent transition-colors duration-300">
                      anisrayaneizri@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <span className="text-xl">📞</span>
                  <div>
                    <span className="block text-[10px] uppercase text-white/40 tracking-wider">Call Us</span>
                    <a href="tel:+1234567890" className="text-sm hover:text-accent transition-colors duration-300">
                      +213 780259026
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <span className="text-xl">📍</span>
                  <div>
                    <span className="block text-[10px] uppercase text-white/40 tracking-wider">Our Studio</span>
                    <span className="text-sm">
                      Tipaza , Kolea
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <span className="text-xl">🕒</span>
                  <div>
                    <span className="block text-[10px] uppercase text-white/40 tracking-wider">Business Hours</span>
                    <span className="text-sm">
                      All Time
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Strategy / Partnership Quote Card */}
            <div className="p-8 bg-bg-alt/45 border border-border-subtle rounded-2xl flex flex-col justify-between">
              <span className="text-3xl text-accent font-serif mb-4">“</span>
              <p className="text-sm text-text-body/90 leading-relaxed font-light italic mb-4">
                We believe that the best design starts with standard-setting strategy. Let's align your product's performance with your business KPIs.
              </p>
              <span className="text-xs uppercase tracking-wider font-semibold text-text-heading">
                — Izri Studio Design Team
              </span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default Contact;