const projectList = [
  {
    title: "TQ Assessment",
    description:
      "A full web application built to run a client's leadership assessment end to end: its own database, scoring, and reporting.",
    tags: ["Web application", "Database", "Netlify"],
  },
  {
    title: "Burnout Force Check",
    description:
      "A free assessment tool built for a client, automated end to end from response to follow-up.",
    tags: ["Netlify", "Automation"],
    link: "https://burnoutforce.higherperformancegroup.com",
  },
  {
    title: "Higher Performance Group Website",
    description:
      "A client's public-facing marketing site, rebuilt from their design into a working, maintainable site.",
    tags: ["Marketing site"],
    link: "https://higherperformancegroup.com",
  },
]

function Projects() {
  return (
    <section id="projects" className="max-w-5xl mx-auto px-5 py-16">
      <h2 className="text-3xl font-semibold text-fg mb-6 text-center">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projectList.map((project) => (
          <div key={project.title} className="bg-bg-raised border border-rule rounded-lg p-6">
            <h3 className="text-xl font-semibold text-fg mb-2">{project.title}</h3>
            <p className="text-fg-muted mb-4">{project.description}</p>
            <div className="flex flex-wrap gap-2 mb-4">
              {project.tags.map((tag) => (
                <span key={tag} className="text-xs text-fg-muted border border-rule rounded-full px-3 py-1">
                  {tag}
                </span>
              ))}
            </div>
            {project.link && (
              <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-accent hover:text-fg">
                Visit project →
              </a>
            )}
          </div>
        ))}
      </div>
    </section>
  )
}

export default Projects
