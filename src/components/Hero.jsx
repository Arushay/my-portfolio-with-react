function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center px-6 md:px-20 pt-20 max-w-6xl mx-auto">
      <p className="text-xs text-olive tracking-[0.2em] uppercase mb-8 font-medium">
        Rotterdam, Netherlands → Back-end Developer
      </p>
      
      <h1 className="text-5xl md:text-7xl font-serif leading-[1.1] mb-8 text-charcoal">
        Building systems that <br />
        <span className="italic text-taupe-text">work reliably behind the scenes.</span>
      </h1>
      
      <p className="text-lg md:text-xl text-taupe-text max-w-2xl mb-12 leading-relaxed font-light">
        I'm Arosha. A self-taught developer focused on Node.js, Express, and PostgreSQL. 
        I build clean APIs and full-stack applications, bridging the gap between complex logic and real-world needs.
      </p>

      <div className="flex gap-8 text-sm tracking-widest uppercase font-medium">
        <a href="#projects" className="border-b border-olive text-olive pb-1 hover:text-olive-hover hover:border-olive-hover transition-colors duration-300">
          View Projects
        </a>
        <a href="#contact" className="border-b border-taupe-dark text-taupe-text pb-1 hover:text-charcoal hover:border-charcoal transition-colors duration-300">
          Get in Touch
        </a>
      </div>
    </section>
  );
}

export default Hero;