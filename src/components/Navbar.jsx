function Navbar() {
  return (
    <nav className="fixed top-0 w-full bg-taupe-light/90 backdrop-blur-md z-50">
      <div className="max-w-6xl mx-auto px-6 py-6 flex justify-between items-center text-sm tracking-widest uppercase">
        <a href="#" className="font-serif text-lg font-semibold normal-case text-charcoal">
          Arosha Ayman
        </a>
        <div className="flex gap-8 text-taupe-text">
          <a href="#projects" className="hover:text-olive transition-colors duration-300">Work</a>
          <a href="#about" className="hover:text-olive transition-colors duration-300">About</a>
          <a href="#contact" className="hover:text-olive transition-colors duration-300">Contact</a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;