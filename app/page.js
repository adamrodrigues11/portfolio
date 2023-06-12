import Socials from './components/Socials'
import BackToTop from './components/BackToTop'

import Home from './sections/Home'
import About from './sections/About'
import Skills from './sections/Skills'
import Projects from './sections/Projects'

export default function HomePage() {
  return (
    <main style={
      {
        scrollBehavior: 'smooth!important'
      }
    }>
      <Home />
      <About />
      <Skills />
      <Projects />  
      <BackToTop />
    </main>
  )
}
