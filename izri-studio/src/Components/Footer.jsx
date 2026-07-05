import { Link } from "react-router-dom";
import { HiArrowUp } from "react-icons/hi";
import logoIcon from "../assets/icon.png";

function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const handleSubscribe = (e) => {
    e.preventDefault();
    alert("Thank you for subscribing to Izri Studio newsletter!");
  };

  return (
    <footer className="bg-primary-dark text-primary-light/80 pt-16 pb-8 px-7 md:px-16 lg:px-24 border-t border-white/5 relative z-10">
      {/* Top row: Brand & Newsletter */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pb-12 border-b border-white/10">
        {/* Brand statement */}
        <div className="lg:col-span-5 space-y-4">
          <div className="flex items-center gap-2">
            <img src={logoIcon} alt="Izri Studio Icon" className="w-8 h-8 object-contain" />
            <h2 className="font-bold text-2xl md:text-3xl text-primary-light tracking-tight">
              Izri Studio<span className="text-accent">.</span>
            </h2>
          </div>

          <p className="text-primary-light/60 text-xs md:text-sm max-w-sm leading-relaxed font-light">
            We don't just build websites. We build businesses. Distilling your
            essence into timeless digital solutions.
          </p>
        </div>
      </div>

      {/* Middle row: Multi-column links */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 py-12">
        {/* Col 1: Company Links */}
        <div className="space-y-4">
          <h5 className="text-xs uppercase tracking-wider font-semibold text-primary-light border-b border-white/10 pb-2">
            Company
          </h5>

          <ul className="space-y-2.5 text-xs md:text-sm font-light">
            <li>
              <Link
                to="/about"
                className="hover:text-accent transition-colors duration-300"
              >
                About Us
              </Link>
            </li>
            <li>
              <Link
                to="/services"
                className="hover:text-accent transition-colors duration-300"
              >
                Our Services
              </Link>
            </li>

            <li>
              <Link
                to="/contact"
                className="hover:text-accent transition-colors duration-300"
              >
                Careers
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="hover:text-accent transition-colors duration-300"
              >
                Collaboration
              </Link>
            </li>
          </ul>
        </div>

        {/* Col 2: Resources Links */}
        <div className="space-y-4">
          <h5 className="text-xs uppercase tracking-wider font-semibold text-primary-light border-b border-white/10 pb-2">
            Resources
          </h5>

          <ul className="space-y-2.5 text-xs md:text-sm font-light">
            <li>
              <Link
                to="/services"
                className="hover:text-accent transition-colors duration-300"
              >
                Blog & Insights
              </Link>
            </li>
            <li>
              <Link
                to="/"
                className="hover:text-accent transition-colors duration-300"
              >
                FAQ
              </Link>
            </li>
          </ul>
        </div>

        {/* Col 3: Contact Info */}
        <div className="space-y-4">
          <h5 className="text-xs uppercase tracking-wider font-semibold text-primary-light border-b border-white/10 pb-2">
            Get In Touch
          </h5>

          <ul className="space-y-3 text-xs md:text-sm font-light">
            <li className="flex flex-col">
              <span className="text-[10px] uppercase text-white/40 tracking-wider">
                Email
              </span>
              <a
                href="mailto:anisrayaneizri@gmail.com"
                className="hover:text-accent transition-colors duration-300"
              >
                anisrayaneizri@gmail.com
              </a>
            </li>
            <li className="flex flex-col">
              <span className="text-[10px] uppercase text-white/40 tracking-wider">
                Phone
              </span>
              <a
                href="tel:+213780259026"
                className="hover:text-accent transition-colors duration-300"
              >
                +213 780 25 90 26
              </a>
            </li>
            <li className="flex flex-col">
              <span className="text-[10px] uppercase text-white/40 tracking-wider">
                Office Location
              </span>
              <span>Tipaza , Kolea</span>
            </li>
            <li className="flex flex-col">
              <span className="text-[10px] uppercase text-white/40 tracking-wider">
                Business Hours
              </span>
              <span>All Time</span>
            </li>
          </ul>
        </div>

        {/* Col 4: Socials & Quick Contact */}
        <div className="space-y-4">
          <h5 className="text-xs uppercase tracking-wider font-semibold text-primary-light border-b border-white/10 pb-2">
            Social Media
          </h5>

          <div className="flex gap-4">
            <a
              href="https://www.linkedin.com/in/anis-izri-ba77b233b/"
              target="_blank"
              rel="noreferrer"
              className="hover:text-accent transition-colors duration-300 text-sm"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/anis-py19"
              target="_blank"
              rel="noreferrer"
              className="hover:text-accent transition-colors duration-300 text-sm"
            >
              GitHub
            </a>
            <a
              href="https://www.instagram.com/izri_studio/"
              target="_blank"
              rel="noreferrer"
              className="hover:text-accent transition-colors duration-300 text-sm"
            >
              Instagram
            </a>
            <a
              href="https://www.facebook.com/anis.izri.fr2"
              target="_blank"
              rel="noreferrer"
              className="hover:text-accent transition-colors duration-300 text-sm"
            >
              Facebook
            </a>
          </div>

          <div className="pt-4">
            <Link
              to="/contact"
              className="inline-block px-5 py-2.5 bg-accent hover:bg-accent-hover text-white text-xs font-semibold rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-accent/20 cursor-pointer text-center w-full sm:w-auto"
            >
              Quick Contact
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom row: Copyright & Back to Top */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8 border-t border-white/10 text-xs text-white/45">
        <span>
          © {new Date().getFullYear()} Izri Studio. All Rights Reserved. Made
          with ❤️ by IZRI STUDIO
        </span>

        {/* Back to top button */}
        <button
          onClick={scrollToTop}
          className="flex items-center gap-1.5 hover:text-accent cursor-pointer transition-colors duration-300 group"
          aria-label="Scroll back to top"
        >
          Back To Top
          <span className="w-6 h-6 rounded-full bg-white/5 flex items-center justify-center text-white/60 transition-transform duration-300 group-hover:-translate-y-1">
            <HiArrowUp className="w-3.5 h-3.5" />
          </span>
        </button>
      </div>
    </footer>
  );
}

export default Footer;
