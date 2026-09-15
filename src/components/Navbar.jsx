function Navbar() {
  return (
    <header className="bg-bg-raised border-b border-rule md:sticky top-0 z-10">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <a href="#about" className="font-medium text-fg mb-4 md:mb-0">
          Franz Adriene Aclon
        </a>
        <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center gap-5">
          <a href="#about" className="text-fg-muted hover:text-accent">About</a>
          <a href="#projects" className="text-fg-muted hover:text-accent">Projects</a>
          <a href="#skills" className="text-fg-muted hover:text-accent">Skills</a>
          <a href="#contact" className="text-fg-muted hover:text-accent">Contact</a>
        </nav>
      </div>
    </header>
  )
}

export default Navbar
