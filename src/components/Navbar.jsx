import { useState } from "react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full bg-charcoal/90 backdrop-blur-md z-50 border-b border-charcoal-light">
      <div className="max-w-6xl mx-auto px-6 py-6 flex justify-between items-center">
        {/* Logo */}
        <a href="#" className="font-serif text-lg font-semibold text-offwhite">
          Arosha Ayman
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8 text-sm tracking-widest uppercase text-taupe-text">
          <a href="#projects" className="hover:text-olive transition-colors duration-300">Work</a>
          <a href="#about" className="hover:text-olive transition-colors duration-300">About</a>
          <a href="#contact" className="hover:text-olive transition-colors duration-300">Contact</a>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          className="md:hidden text-offwhite focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-charcoal border-b border-charcoal-light px-6 py-4 flex flex-col gap-4 text-sm tracking-widest uppercase text-taupe-text">
          <a href="#projects" onClick={() => setIsOpen(false)} className="hover:text-olive transition-colors duration-300">Work</a>
          <a href="#about" onClick={() => setIsOpen(false)} className="hover:text-olive transition-colors duration-300">About</a>
          <a href="#contact" onClick={() => setIsOpen(false)} className="hover:text-olive transition-colors duration-300">Contact</a>
        </div>
      )}
    </nav>
  );
}

export default Navbar;