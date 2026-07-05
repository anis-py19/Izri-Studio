import { NavLink } from "react-router-dom";
import { useState } from "react";
import { HiMenuAlt3, HiX } from "react-icons/hi";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const linkClass = ({isActive}) =>
    `text-sm font-medium tracking-wide uppercase transition-all duration-300 ${isActive ? 'text-accent' : 'text-primary-light/70 hover:text-primary-light'}`;

  const mobileLinkClass = ({isActive}) =>
    `text-lg font-medium tracking-wide uppercase transition-all duration-300 ${isActive ? 'text-accent' : 'text-primary-light/70 hover:text-primary-light'}`;

  return (
    <>
      <header className="header flex items-center justify-between bg-primary-dark/95 backdrop-blur-md w-full h-16 z-50 fixed top-0 px-7 md:px-16 border-b border-white/5">
        <div className="logo flex items-center gap-2">
          <h2 className="font-bold transition-all duration-300 cursor-pointer text-2xl md:text-3xl text-primary-light tracking-tight">
            Izri Studio<span className="text-accent">.</span>
          </h2>
        </div>

        {/* Desktop Nav */}
        <nav className="navbar hidden md:flex items-center gap-8">
          <NavLink to="/" className={linkClass}>Home</NavLink>
          <NavLink to="/about" className={linkClass}>About</NavLink>
          <NavLink to="/services" className={linkClass}>Services</NavLink>
          <NavLink to="/offers" className={linkClass}>Offers</NavLink>
          <NavLink to="/contact" className={linkClass}>Contact</NavLink>
        </nav>

        {/* Desktop CTA */}
        <div className="btn hidden md:block">
          <button className="px-5 py-2 bg-accent hover:bg-accent-hover text-white text-sm font-semibold rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-accent/20 cursor-pointer">
            Get Started
          </button>
        </div>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-primary-light text-2xl cursor-pointer z-50 transition-transform duration-300"
          aria-label="Toggle menu"
        >
          {isOpen ? <HiX /> : <HiMenuAlt3 />}
        </button>
      </header>

      {/* Mobile Menu Overlay — outside header so it's not clipped */}
      <div className={`fixed inset-0 z-40 bg-primary-dark/98 backdrop-blur-lg flex flex-col items-center justify-center gap-8 transition-all duration-500 md:hidden ${isOpen ? 'opacity-100 visible pointer-events-auto' : 'opacity-0 invisible pointer-events-none'}`}>
        <nav className={`flex flex-col items-center gap-6 transition-all duration-500 ${isOpen ? 'translate-y-0' : '-translate-y-8'}`}>
          <NavLink to="/" className={mobileLinkClass} onClick={() => setIsOpen(false)}>Home</NavLink>
          <NavLink to="/about" className={mobileLinkClass} onClick={() => setIsOpen(false)}>About</NavLink>
          <NavLink to="/services" className={mobileLinkClass} onClick={() => setIsOpen(false)}>Services</NavLink>
          <NavLink to="/offers" className={mobileLinkClass} onClick={() => setIsOpen(false)}>Offers</NavLink>
          <NavLink to="/contact" className={mobileLinkClass} onClick={() => setIsOpen(false)}>Contact</NavLink>
        </nav>
        <button
          className="px-6 py-3 bg-accent hover:bg-accent-hover text-white text-sm font-semibold rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-accent/20 cursor-pointer mt-4"
          onClick={() => setIsOpen(false)}
        >
          Get Started
        </button>
      </div>
    </>
  );
}

export default Header;

