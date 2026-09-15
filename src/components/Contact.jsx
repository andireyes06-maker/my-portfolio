import { useState } from "react"
import styled from "styled-components"
import { useReveal } from "../hooks/useReveal"
import { SECTION_CONTAINER } from "../constants"

const CONTACT_EMAIL = "andireyes06@gmail.com"
const LINKEDIN_URL = "https://www.linkedin.com/in/franz-adriene-aclon-00a785304/"

const SubmitButton = styled.button`
  background: var(--accent);
  color: var(--bg);
  font-weight: 600;
  font-size: 0.9rem;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  padding: 0.75rem 2rem;
  border-radius: 0;
  align-self: flex-start;

  &:hover {
    opacity: 0.9;
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`

function encode(data) {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&")
}

function Contact() {
  const [ref, visible] = useReveal()
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")
  const [status, setStatus] = useState("idle") // idle | sending | success | error

  function handleSubmit(e) {
    e.preventDefault()
    setStatus("sending")
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "contact", name, email, message }),
    })
      .then(() => {
        setStatus("success")
        setName("")
        setEmail("")
        setMessage("")
      })
      .catch(() => setStatus("error"))
  }

  return (
    <section id="contact" className="scroll-mt-16 bg-fg text-bg">
      <div
        ref={ref}
        className={`${SECTION_CONTAINER} grid md:grid-cols-2 gap-10 md:gap-16 items-start transition-all duration-700 ease-out motion-reduce:transition-none motion-reduce:opacity-100 motion-reduce:translate-y-0 ${
          visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
        }`}
      >
        <div>
          <h2 className="font-display text-3xl md:text-4xl font-medium tracking-tight mb-4 max-w-[16ch]">
            Let's build something useful<span className="text-accent-secondary">.</span>
          </h2>
          <p className="text-bg/70 text-lg mb-6">Have a project in mind? Tell me about it.</p>
          <div className="flex flex-wrap items-center gap-6">
            <a href={`mailto:${CONTACT_EMAIL}`} className="text-accent-secondary font-semibold text-lg hover:text-bg transition-colors duration-300">
              Email me ↗
            </a>
            <a href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer" className="text-bg/80 font-medium hover:text-accent-secondary transition-colors duration-300">
              LinkedIn ↗
            </a>
          </div>
        </div>

        <form
          name="contact"
          onSubmit={handleSubmit}
          data-netlify="true"
          className="flex flex-col gap-4"
        >
          <input type="hidden" name="form-name" value="contact" />
          <div className="flex flex-col gap-1">
            <label htmlFor="name" className="text-xs uppercase tracking-widest text-bg/60">Name</label>
            <input
              id="name"
              type="text"
              name="name"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="bg-bg/10 border border-bg/50 text-bg rounded-sm px-4 py-3"
            />
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="email" className="text-xs uppercase tracking-widest text-bg/60">Email</label>
            <input
              id="email"
              type="email"
              name="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="bg-bg/10 border border-bg/50 text-bg rounded-sm px-4 py-3"
            />
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="message" className="text-xs uppercase tracking-widest text-bg/60">Message</label>
            <textarea
              id="message"
              name="message"
              required
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="bg-bg/10 border border-bg/50 text-bg rounded-sm px-4 py-3"
              rows={4}
            />
          </div>
          <SubmitButton type="submit" disabled={status === "sending"}>
            {status === "sending" ? "Sending…" : "Send message"}
          </SubmitButton>
          {status === "success" && (
            <p role="status" className="text-accent-secondary text-sm">Message sent — thank you.</p>
          )}
          {status === "error" && (
            <p role="alert" className="text-bg font-medium text-sm">Something went wrong — please email me directly.</p>
          )}
        </form>
      </div>
    </section>
  )
}

export default Contact
