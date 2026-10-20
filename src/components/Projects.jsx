import projects from "../data/projects";

function Projects() {
  return (
    <section id="projects" className="py-32 px-6 md:px-20 max-w-6xl mx-auto border-t border-taupe-dark">
      <h2 className="text-xs tracking-[0.2em] uppercase text-olive mb-16 font-medium">
        01 / Selected Work
      </h2>
      
      <div className="flex flex-col gap-20">
        {projects.map((project) => (
          <div key={project.title} className="group">
            <div className="flex flex-col md:flex-row md:justify-between md:items-baseline mb-4">
              <h3 className="text-3xl md:text-4xl font-serif text-charcoal group-hover:text-olive transition-colors duration-300">
                {project.title}
              </h3>
              <div className="flex flex-wrap gap-2 text-xs text-taupe-text tracking-wider uppercase mt-2 md:mt-0">
                {project.tech.map((t) => (
                  <span key={t} className="bg-taupe-dark/30 px-2 py-1 rounded-sm">{t}</span>
                ))}
              </div>
            </div>
            
            <p className="text-lg text-taupe-text max-w-3xl mb-6 leading-relaxed font-light">
              {project.description}
            </p>
            
            <div className="flex gap-6 text-sm font-medium text-charcoal">
              {project.live && (
                <a href={project.live} target="_blank" rel="noreferrer" className="border-b border-charcoal pb-0.5 hover:text-olive hover:border-olive transition-colors duration-300">
                  Live Demo ↗
                </a>
              )}
              <a href={project.github} target="_blank" rel="noreferrer" className="border-b border-charcoal pb-0.5 hover:text-olive hover:border-olive transition-colors duration-300">
                GitHub ↗
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;