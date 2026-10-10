function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 pt-20">
      <div className="max-w-3xl text-center">
        <h1 className="text-5xl md:text-6xl font-bold mb-6">
          Hi, I'm <span className="text-blue-400">Arosha Ayman</span>
        </h1>
        <p className="text-xl text-gray-300 mb-8">
          Self-taught back-end developer building full-stack apps with
          Node.js, Express, and PostgreSQL. Based in Rotterdam.
        </p>
        <div className="flex gap-4 justify-center">
          <a
            href="#projects"
            className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-lg font-medium transition"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="border border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-gray-900 px-6 py-3 rounded-lg font-medium transition"
          >
            Contact Me
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;