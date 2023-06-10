import Image from 'next/image'
import Link from 'next/link'
import headshot from '../public/images/headshot.jpg'
import skiPortrait from '../public/images/ski-portrait.jpg'
import Socials from './components/Socials'
import Skills from './components/Skills'
import BackToTop from './components/BackToTop'
import projects from './data/Projects'
import Collapsible from './components/Collapsible'


export default function HomePage() {
  return (
    <>
    <main className="py-24 px-4 mx-auto sm:w-10/12 xl:8/12">
      <BackToTop />
      <section id="home" className="pt-24 flex flex-col items-center justify-center gap-6">
        <h1 className="text-5xl font-bold text-center">Adam Rodrigues</h1>
        <p className="text-2xl text-center">Full Stack Developer</p>
        <Image src={headshot} alt='headshot' className='rounded-full '/>
        <div className='flex justify-center items-center gap-12'>
          <Socials borderClasses={'border border-slate-400 rounded-full p-2 shadow-md'}/>
        </div>
      </section>
      <section id="about" className="pt-24">
        <h2 className="text-3xl font-bold">About Me</h2>
        <p className='text-sm sm:text-base'>Mathematical physics &mdash;&gt; teaching &mdash;&gt; programming.</p>
        <p className='text-sm sm:text-base'>My diverse academic and professional background has equipped me with the skills and experience to engineer creative solutions to complex problems. After completing a BSc. in Mathematical Physics at the University of Waterloo, I began to pursue teaching as profession. In the past 5 years, I earned a BEd. from UBC and have helped hundreds of students master concepts in physics, mathematics, and chemistry.</p>
        <p className='text-sm sm:text-base'>So why become a developer? Firstly, I am a <span className='text-pink-600'>learner</span>, a <span className='text-pink-600'>deep thinker</span>, and a <span className='text-pink-600'>creator</span>. I want my work to involve new challenges and constant learning, and to leverage technology to improve the way we teach, learn, and live. Furthermore, I value working in a field where opportunities exist for those with passion and aptitude.</p>
        <p className='text-sm sm:text-base'>Having recently completed the Software Systems Developer program at BCIT, I&apos;m currently looking for a full-time position as a junior developer. My technical expertise is in building fully responsive and intuitive user interfaces, along with robust and logical backend code. I also have hands-on experience working with cloud services and serverless architectures.</p>
        <Link href='/#projects' scroll={false} className='underline font-bold'><p>Check out some of my latest projects</p></Link>
        {/* <Image src={skiPortrait} alt='ski portrait' width='250' height='300' className=''/> */}
        {/* <p className='pt-2'>I like to work keyboards. When I&apos;m not coding, you can find me playing piano in a band called The Dingos. Otherwise, chances are I&apos;m in the mountains playing with gravity.</p> */}
      </section>
      <section id="skills" className="pt-24">   
        <h2 className='text-3xl font-bold'>Technical Skills</h2>
        <Skills />
      </section>
      <section id="projects" className="pt-24">
        <h2 className="text-3xl font-bold">Projects</h2>
        {projects.map((project, index) => (
          <div key={index} className='flex flex-col items-start gap-6 py-6'>
            <h3 className='text-xl font-bold'>{project.title}</h3>
            <p>Image will go here</p>
            <div className='flex flex-row flex-wrap items-center gap-2'>
              {project.technologies.map((tech, index) => (
                <div key={index} className='text-sm border border-slate-500 rounded-md p-1'>{tech}</div>
              ))}
            </div>
            <Collapsible title='Description'>
              <p className='text-sm sm:text-base'>{project.description}</p>
            </Collapsible>
          
          </div>
        ))}
      </section>
    </main>
    <footer className='flex flex-col items-center border-t border-slate-500 p-4'>
      <div className='flex flex-row justify-center items-center gap-6'>
        <Socials />
      </div>
      <p>&copy; Adam Rodrigues 2023</p>
    </footer>
  </>
  )
}
