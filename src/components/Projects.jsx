import { useReveal } from "../hooks/useReveal"
import { SECTION_CONTAINER } from "../constants"

const projects = [
  {
    title: "TQ Assessment",
    lead: "A leadership assessment, from first answer to final report.",
    detail:
      "Built the assessment interface, database, scoring logic, and reporting workflow for a client's leadership program.",
    tags: ["Web application", "Database", "Netlify"],
    images: ["/projects/tq-assessment.png"],
    note: "Private client project",
  },
  {
    title: "Burnout Force Check",
    lead: "A free, automated wellbeing check for a client's audience.",
    detail: "Built end to end — from response, to scoring, to automatic follow-up.",
    tags: ["Netlify", "Automation"],
    images: ["/projects/burnout-force.png"],
    link: "https://burnoutforce.higherperformancegroup.com",
  },
  {
    title: "Higher Performance Group Website",
    lead: "A marketing site rebuilt from design into a real, maintainable product.",
    detail: "Site architecture, page templates, and content structure — the homepage and one of its solutions pages, shown here.",
    tags: ["Marketing site"],
    images: ["/projects/hpg-preview-home.png", "/projects/hpg-preview-solutions.png"],
    link: "https://higherperformancegroup.com",
  },
]

function ProjectRow({ project, index }) {
  const [ref, visible] = useReveal()
  const imageBlock = (
    <div
      className={`${project.images.length > 1 ? "grid grid-cols-1 sm:grid-cols-2 gap-3" : ""} ${index % 2 === 1 ? "md:order-2" : ""}`}
    >
      {project.images.map((src) => (
        <img
          key={src}
          src={src}
          alt={`Screenshot of ${project.title}`}
          className="w-full rounded-sm border border-rule object-cover aspect-video group-hover:border-accent/50 transition-colors duration-300"
        />
      ))}
    </div>
  )

  return (
    <div
      ref={ref}
      className={`grid md:grid-cols-2 gap-8 md:gap-12 items-center transition-all duration-700 ease-out motion-reduce:transition-none motion-reduce:opacity-100 motion-reduce:translate-y-0 ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
      } ${index !== 0 ? "pt-20 md:pt-28 border-t border-rule" : ""}`}
    >
      {project.link ? (
        <a href={project.link} target="_blank" rel="noopener noreferrer" className="group">
          {imageBlock}
        </a>
      ) : (
        imageBlock
      )}
      <div className={index % 2 === 1 ? "md:order-1" : ""}>
        <h3 className="font-display text-2xl font-medium tracking-tight text-fg mb-3">
          {project.title}
          <span className="text-accent">.</span>
        </h3>
        <p className="text-fg font-medium text-lg mb-2">{project.lead}</p>
        <p className="text-fg-muted mb-4 max-w-[55ch]">{project.detail}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="inline-block text-xs uppercase tracking-widest text-fg-muted bg-bg-raised px-3 py-1 leading-none"
            >
              {tag}
            </span>
          ))}
        </div>
        {project.link ? (
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block border-2 border-accent text-accent font-medium px-6 py-3 hover:bg-accent hover:text-bg transition-colors duration-300"
          >
            Visit project ↗
          </a>
        ) : (
          <p className="text-fg-muted text-sm italic">{project.note}</p>
        )}
      </div>
    </div>
  )
}

function Projects() {
  return (
    <section id="projects" className={`scroll-mt-16 ${SECTION_CONTAINER}`}>
      <h2 className="font-display text-3xl md:text-4xl font-medium tracking-tight text-fg mb-16">
        Selected work<span className="text-accent">.</span>
      </h2>

      <div className="flex flex-col gap-20 md:gap-28">
        {projects.map((project, i) => (
          <ProjectRow key={project.title} project={project} index={i} />
        ))}
      </div>
    </section>
  )
}

export default Projects
