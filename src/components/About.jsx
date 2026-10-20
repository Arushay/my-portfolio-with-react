function About() {
  return (
    <section id="about" className="py-32 px-6 md:px-20 max-w-6xl mx-auto border-t border-charcoal-light">
      <h2 className="text-xs tracking-[0.2em] uppercase text-olive mb-16 font-medium">
        02 / About Me
      </h2>

      <div className="grid md:grid-cols-2 gap-16">
        {/* Left side: Big statement */}
        <div>
          <h3 className="text-4xl md:text-5xl font-serif leading-tight text-offwhite mb-6">
            From Pakistan to Rotterdam. <br />
            <span className="italic text-taupe-text">Building a new path.</span>
          </h3>
        </div>

        {/* Right side: The story */}
        <div className="space-y-6 text-taupe-text font-light leading-relaxed">
          <p>
            I'm a self-taught developer who found a passion for back-end logic and clean architecture. 
            My journey didn't start in a traditional classroom—it started with curiosity, a laptop, 
            and a determination to build things that work.
          </p>
          <p>
            Today, I focus on building full-stack applications using <span className="text-offwhite font-medium">Node.js</span>, 
            <span className="text-offwhite font-medium"> Express</span>, 
            <span className="text-offwhite font-medium"> PostgreSQL</span>, and 
            <span className="text-offwhite font-medium"> React</span>. I enjoy the challenge of 
            connecting complex systems and making them feel effortless to the user.
          </p>
          <p>
            When I'm not writing code, I'm raising two wonderful kids, studying Dutch, 
            and finding ways to solve real-world problems through technology.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;