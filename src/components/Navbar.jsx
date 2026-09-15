import { useState } from "react"

const links = [
  { href: "#projects", label: "Work" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
]

function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-10 bg-bg/80 backdrop-blur-md border-b border-rule">
      <div className="max-w-6xl mx-auto px-6 sm:px-12 lg:px-16 py-5 flex items-center justify-between">
        <a href="#top" className="font-display font-medium text-fg">
          Franz Adriene Aclon
        </a>

        <nav className="hidden sm:flex items-center gap-8 text-sm font-medium">
          {links.map((link) => (
            <a key={link.href} href={link.href} className="text-fg-muted hover:text-accent transition-colors duration-300">
              {link.label}
            </a>
          ))}
        </nav>

        <button
          type="button"
          className="sm:hidden flex flex-col justify-center gap-1.5 w-8 h-8"
          aria-expanded={open}
          aria-label="Toggle menu"
          onClick={() => setOpen((o) => !o)}
        >
          <span className={`block h-0.5 w-6 bg-fg transition-transform duration-300 ${open ? "rotate-45 translate-y-2" : ""}`} />
          <span className={`block h-0.5 w-6 bg-fg transition-opacity duration-300 ${open ? "opacity-0" : ""}`} />
          <span className={`block h-0.5 w-6 bg-fg transition-transform duration-300 ${open ? "-rotate-45 -translate-y-2" : ""}`} />
        </button>
      </div>

      {open && (
        <nav className="sm:hidden flex flex-col gap-4 px-6 py-6 border-t border-rule text-sm font-medium">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-fg-muted hover:text-accent transition-colors duration-300"
              onClick={() => setOpen(false)}
            >
              {link.label}
            </a>
          ))}
        </nav>
      )}
    </header>
  )
}

export default Navbar
