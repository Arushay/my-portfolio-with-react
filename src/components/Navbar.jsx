function Navbar() {
  return (
    <nav className="fixed top-0 w-full bg-gray-900/80 backdrop-blur-md border-b border-gray-800 z-50">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <a href="#" className="text-xl font-bold text-blue-400">
          Arosha Ayman
        </a>
        <div className="flex gap-6 text-sm">
          <a href="#projects" className="hover:text-blue-400 transition">Projects</a>
          <a href="#about" className="hover:text-blue-400 transition">About</a>
          <a href="#contact" className="hover:text-blue-400 transition">Contact</a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;