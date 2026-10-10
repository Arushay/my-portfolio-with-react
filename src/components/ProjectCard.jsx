function ProjectCard({ project }) {
  return (
    <div className="bg-slate-800 rounded-xl p-6 border border-slate-700 hover:border-blue-500 transition flex flex-col">
      <h3 className="text-xl font-bold text-blue-400 mb-3">{project.title}</h3>
      <p className="text-slate-300 text-sm mb-4 flex-grow">{project.description}</p>

      <div className="flex flex-wrap gap-2 mb-4">
        {project.tech.map((t) => (
          <span
            key={t}
            className="text-xs bg-slate-700 text-slate-300 px-2 py-1 rounded"
          >
            {t}
          </span>
        ))}
      </div>

      <div className="flex gap-4 text-sm">
        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-400 hover:text-blue-300 transition"
        >
          GitHub →
        </a>
        {project.live && (
          <a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 hover:text-blue-300 transition"
          >
            Live Demo →
          </a>
        )}
      </div>
    </div>
  );
}

export default ProjectCard;