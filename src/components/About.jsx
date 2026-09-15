import { useReveal } from "../hooks/useReveal"
import { SECTION_CONTAINER } from "../constants"

const skillGroups = [
  { label: "Web development", items: ["JavaScript", "HTML/CSS", "React", "Node.js", "PHP", "Git"] },
  { label: "Automation & integrations", items: ["Airtable", "ActiveCampaign", "Automated workflows"] },
  { label: "Marketing systems", items: ["Email marketing", "Lead generation"] },
  { label: "Currently learning", items: ["Next.js", "APIs"] },
]

function About() {
  const [ref, visible] = useReveal()

  return (
    <section id="about" className={`scroll-mt-16 ${SECTION_CONTAINER}`}>
      <h2 className="font-display text-3xl md:text-4xl font-medium tracking-tight text-fg mb-2">
        About<span className="text-accent">.</span>
      </h2>
      <span className="flex w-16 h-[3px] mb-10" aria-hidden="true">
        <span className="w-1/2 bg-accent" />
        <span className="w-1/2 bg-accent-secondary" />
      </span>
      <div
        ref={ref}
        className={`grid md:grid-cols-2 gap-10 md:gap-16 transition-all duration-700 ease-out motion-reduce:transition-none motion-reduce:opacity-100 motion-reduce:translate-y-0 ${
          visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
        }`}
      >
        <p className="text-fg-muted text-lg leading-relaxed max-w-[55ch]">
          I'm a full-stack developer building on what I've learned working with
          clients — university taught me the theory, client work taught me that
          the hard part is usually figuring out what's actually wrong, not
          writing the code itself. I studied at Bulacan State University, and
          I've been leaning on AI tooling lately to move faster without
          cutting corners on testing or care.
        </p>
        <div className="flex flex-col divide-y divide-rule">
          {skillGroups.map((group) => (
            <div key={group.label} className="py-4 first:pt-0 flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-6">
              <p className="text-xs uppercase tracking-widest text-fg-muted sm:w-44 flex-shrink-0">{group.label}</p>
              <p className="text-fg">{group.items.join(", ")}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default About
