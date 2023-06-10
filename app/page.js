import Socials from './components/Socials'

import Home from './sections/Home'
import About from './sections/About'
import Skills from './sections/Skills'
import Projects from './sections/Projects'

export default function HomePage() {
  return (
    <main className="py-24 px-4 mx-auto sm:w-10/12 xl:8/12">
      <Home />
      <About />
      <Skills />
      <Projects />  
    </main>
  )
}
