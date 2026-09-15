const skillList = [
  "JavaScript",
  "HTML/CSS",
  "React",
  "Node.js",
  "PHP",
  "Git",
  "Airtable",
  "ActiveCampaign",
  "AI Automation",
  "Email Marketing",
  "Lead Generation",
]

const learningList = ["React.js", "Next.js", "APIs"]

function Skills() {
  return (
    <section id="skills" className="max-w-3xl mx-auto px-5 py-16 text-center">
      <h2 className="text-3xl font-semibold text-fg mb-6">Skills</h2>
      <div className="flex flex-wrap justify-center gap-3">
        {skillList.map((skill) => (
          <span
            key={skill}
            className="bg-bg-raised border border-rule text-accent px-4 py-2 rounded-full text-sm"
          >
            {skill}
          </span>
        ))}
      </div>
      <div className="mt-8">
        <div className="text-xs uppercase tracking-widest text-fg-muted mb-3">Currently learning</div>
        <div className="flex flex-wrap justify-center gap-3">
          {learningList.map((skill) => (
            <span
              key={skill}
              className="border border-dashed border-rule text-fg-muted px-4 py-2 rounded-full text-sm"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
