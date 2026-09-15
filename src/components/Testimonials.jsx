const testimonialList = [
  {
    quote: "A reliable developer who delivers clean, well-structured code.",
    author: "Jane Doe, Project Manager",
  },
  {
    quote: "Great communicator and quick to pick up new technologies.",
    author: "John Smith, Team Lead",
  },
]

function Testimonials() {
  return (
    <section id="testimonials" className="max-w-4xl mx-auto px-5 py-16">
      <h2 className="text-3xl font-semibold text-fg mb-6 text-center">Testimonials</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {testimonialList.map((t) => (
          <div key={t.author} className="bg-bg-raised border border-rule rounded-lg p-6">
            <p className="text-fg-muted italic mb-4">"{t.quote}"</p>
            <p className="text-accent font-medium">{t.author}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Testimonials
