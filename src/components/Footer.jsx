function Footer() {
  return (
    <footer className="py-12 px-6 border-t border-charcoal-light text-center">
      <p className="text-xs tracking-widest uppercase text-taupe-text">
        © {new Date().getFullYear()} Arosha Ayman. Built with React & Tailwind.
      </p>
    </footer>
  );
}

export default Footer;