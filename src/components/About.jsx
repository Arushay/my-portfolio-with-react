function About() {
  return (
    <section id="about" className="py-20 px-6 bg-slate-800/50">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-4xl font-bold mb-8 text-center">
          About <span className="text-blue-400">Me</span>
        </h2>

        <div className="space-y-4 text-slate-300 leading-relaxed">
          <p>
            I'm a self-taught developer based in Rotterdam, Netherlands. I
            started learning to code because I wanted to build things that
            solve real problems — and that's still what drives me.
          </p>
          <p>
            My focus is on back-end development: building REST APIs,
            working with databases, and writing clean, reliable server-side
            code. I work mainly with <span className="text-blue-400">Node.js</span>,{" "}
            <span className="text-blue-400">Express</span>, and{" "}
            <span className="text-blue-400">PostgreSQL</span>, and I'm
            comfortable with the front-end too (React, Tailwind).
          </p>
          <p>
            Right now I'm building{" "}
            <span className="text-blue-400">Paw-some Learning Missions</span>{" "}
            — a full-stack educational game for toddlers — to sharpen my
            skills and create something useful for my own daughter.
          </p>
          <p>
            I'm currently looking for junior back-end or full-stack
            opportunities where I can grow and contribute to real projects.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;