function About() {
  return (
    <section id="about" className="max-w-3xl mx-auto px-5 py-16 text-center">
      <h2 className="text-3xl font-semibold text-fg mb-6">About Me</h2>
      <div className="flex flex-col gap-4 text-left">
        <p className="text-fg-muted leading-relaxed">
          I'm a full-stack developer, still actively building on what I've learned
          working with clients. Most days are spent learning something new, then
          finding where it actually fits. Lately that's meant using AI tooling to
          move faster without cutting corners on testing or care.
        </p>
        <p className="text-fg-muted leading-relaxed">
          University and client work taught me the same lesson twice: the hard
          part usually isn't writing the code, it's figuring out what's actually
          wrong. I studied at Bulacan State University, where I learned to sit
          with a problem, mine or a client's, until I understand it, not just
          until it compiles.
        </p>
      </div>
    </section>
  )
}

export default About
