import { useState } from "react"

const CONTACT_EMAIL = "andireyes06@gmail.com"
const LINKEDIN_URL = "https://www.linkedin.com/in/franz-adriene-aclon-00a785304/"

function encode(data) {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&")
}

function Contact() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")

  function handleSubmit(e) {
    e.preventDefault()
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "contact", name, email, message }),
    })
      .then(() => alert("Message sent!"))
      .catch((error) => alert(error))
  }

  return (
    <section id="contact" className="max-w-xl mx-auto px-5 py-16">
      <h2 className="text-3xl font-semibold text-fg mb-2 text-center">Contact</h2>
      <p className="text-fg-muted text-center mb-8">
        Or reach me directly at{" "}
        <a href={`mailto:${CONTACT_EMAIL}`} className="text-accent hover:text-fg">
          {CONTACT_EMAIL}
        </a>{" "}
        or on{" "}
        <a href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer" className="text-accent hover:text-fg">
          LinkedIn
        </a>
        .
      </p>
      <form
        name="contact"
        onSubmit={handleSubmit}
        data-netlify="true"
        className="flex flex-col gap-4"
      >
        <input type="hidden" name="form-name" value="contact" />
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="bg-bg-raised border border-rule text-fg rounded px-4 py-2"
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="bg-bg-raised border border-rule text-fg rounded px-4 py-2"
        />
        <textarea
          name="message"
          placeholder="Message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="bg-bg-raised border border-rule text-fg rounded px-4 py-2"
          rows={4}
        />
        <button
          type="submit"
          className="text-bg bg-accent hover:opacity-90 font-medium py-2 px-6 rounded self-start"
        >
          Submit
        </button>
      </form>
    </section>
  )
}

export default Contact
