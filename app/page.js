import Image from 'next/image'
import headshot from '../public/images/headshot.jpg'
import skiPortrait from '../public/images/ski-portrait.jpg'
import Socials from './Socials'
import Collapsible from './Collapsible'
import Link from 'next/link'

export default function HomePage() {
  return (
    <main className="py-24 px-4 mx-auto sm:w-10/12 xl:8/12">
      <section id="home" className="pt-24 flex flex-col items-center justify-center gap-6">
            <h1 className="text-5xl font-bold text-center">Adam Rodrigues</h1>
            <p className="text-2xl text-center">Full Stack Developer</p>
            <Image src={headshot} alt='headshot' className='rounded-full '/>
            <Socials gap={12} borderClasses={'border border-slate-400 rounded-full p-2 shadow-md'}/>
        </section>
        <section id="about" className="pt-24">
            <h2 className="text-3xl font-bold">About Me</h2>
            <p className='pt-2 text-sm sm:text-base'>Mathematical physics &mdash;&gt; teaching &mdash;&gt; programming.</p>
            <p className='pt-2 text-sm sm:text-base'>My diverse academic and professional background has equipped me with the skills and experience to engineer creative solutions to complex problems. After completing a BSc. in Mathematical Physics at the University of Waterloo, I began to pursue teaching as profession. In the past 5 years, I earned a BEd. from UBC and have helped hundreds of students master concepts in physics, mathematics, and chemistry.</p>
            <p className='pt-2 text-sm sm:text-base'>So why become a developer? Firstly, I am a <span className='text-pink-600'>learner</span>, a <span className='text-pink-600'>deep thinker</span>, and a <span className='text-pink-600'>creator</span>. I want my work to involve new challenges and constant learning, and to leverage technology to improve the way we teach, learn, and live. Furthermore, I value working in a field where opportunities exist for those with passion and aptitude.</p>
            <p className='pt-2 text-sm sm:text-base'>Having recently completed the Software Systems Developer program at BCIT, I&apos;m currently looking for a full-time position as a junior developer. My technical expertise is in building fully responsive and intuitive user interfaces, along with robust and logical backend code. I also have hands-on experience working with cloud services and serverless architectures.</p>
            <Link href='/#projects' scroll={false} className='pt-2 underline font-bold'><p>Check out some of my latest projects</p></Link>
            {/* <Image src={skiPortrait} alt='ski portrait' width='250' height='300' className=''/> */}
            {/* <p className='pt-2'>I like to work keyboards. When I&apos;m not coding, you can find me playing piano in a band called The Dingos. Otherwise, chances are I&apos;m in the mountains playing with gravity.</p> */}
            <h3 className='text-2xl font-bold'>Skills</h3>
            <p>Skills grid with logos will go here, filter dropdown for categories</p>
        </section>
        <section id="projects" className="pt-24 flex flex-col items-center justify-center">
            {/* maybe do grid instead of flex */}
            <h2 className="text-3xl font-bold self-start">Projects</h2>
            <p>Projects will go here with title, screencast video or image as thumbnail, clickable to github repo. Technologies tags. Collapsible with description</p>
        </section>
    </main>
  )
}
