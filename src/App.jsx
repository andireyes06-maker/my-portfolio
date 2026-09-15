import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import About from "./components/About";
import Contact from "./components/Contact";
import { SECTION_CONTAINER } from "./constants";

function App() {
  return (
    <div className="text-fg bg-bg min-h-screen overflow-x-hidden">
      <Navbar />
      <main>
        <section id="top" className={`scroll-mt-16 ${SECTION_CONTAINER}`}>
          <div className="grid md:grid-cols-[1.2fr_1fr] gap-10 md:gap-16 items-center">
            <div>
              <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-medium tracking-tight text-fg leading-[1.15]">
                Thoughtful websites.
                <br />
                Useful software
                <span className="text-accent">.</span>
              </h1>
              <p className="text-fg-muted text-lg mt-6 max-w-[55ch]">
                I'm Franz, a developer based in Bulacan. I build websites,
                assessment tools, and automated workflows for real client needs.
              </p>
              <div className="flex flex-wrap items-center gap-6 mt-8">
                <a
                  href="#projects"
                  className="inline-block border-2 border-accent text-accent font-medium px-6 py-3 hover:bg-accent hover:text-bg transition-colors duration-300"
                >
                  View selected work
                </a>
                <a href="#contact" className="text-fg-muted font-medium hover:text-accent transition-colors duration-300">
                  Get in touch
                </a>
              </div>
            </div>
            <div className="relative">
              <div className="decor-hatch absolute -top-4 -right-4 w-full h-full rounded-sm" />
              <img
                src="/portrait.png"
                alt="Portrait of Franz Adriene Aclon"
                className="relative w-full aspect-[3/4] object-cover rounded-sm border border-rule"
              />
              <p className="text-xs text-fg-muted mt-3 uppercase tracking-widest">
                Franz — Bulacan, Philippines
              </p>
            </div>
          </div>
        </section>
        <Projects />
        <About />
        <Contact />
      </main>
    </div>
  )
}

export default App
