import { useReveal } from "../hooks/useReveal"
import { SECTION_CONTAINER } from "../constants"

const skillGroups = [
  { label: "Web development", items: ["JavaScript", "HTML/CSS", "React", "Node.js", "PHP", "Git"] },
  { label: "Automation & integrations", items: ["Airtable", "ActiveCampaign", "Automated workflows"] },
  { label: "Marketing systems", items: ["Email marketing", "Lead generation"] },
  { label: "Currently learning", items: ["Next.js", "APIs"] },
]

function Skills() {
  const [ref, visible] = useReveal()

  return (
    <section id="skills" className={`scroll-mt-16 ${SECTION_CONTAINER}`}>
      <h2 className="font-display text-3xl md:text-4xl font-medium tracking-tight text-fg mb-10">
        Skills<span className="text-accent">.</span>
      </h2>
      <div
        ref={ref}
        className={`flex flex-col divide-y divide-rule max-w-[65ch] transition-all duration-700 ease-out motion-reduce:transition-none motion-reduce:opacity-100 motion-reduce:translate-y-0 ${
          visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
        }`}
      >
        {skillGroups.map((group) => (
          <div key={group.label} className="py-4 first:pt-0 flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-6">
            <p className="text-xs uppercase tracking-widest text-fg-muted sm:w-44 flex-shrink-0">{group.label}</p>
            <p className="text-fg">{group.items.join(", ")}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Skills
