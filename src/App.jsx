import { Contact } from "./components/contact";
import { Education } from "./components/education";
import { Footer } from "./components/footer";
import { Navbar } from "./components/navbar";
import { Projects } from "./components/projects";
import { Skills } from "./components/skills";
import {Intro } from "./components/hero"

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <Intro />
      <Projects />
      <Skills />
      <Education />
      <Contact />
      <Footer />
    </main>
  )
}

