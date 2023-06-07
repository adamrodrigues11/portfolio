import Image from 'next/image'
import headshot from '../public/images/headshot.jpg'
import Socials from './Socials'

export default function HomePage() {
  return (
    <main className="p-24">
      <section id="home" className="pt-24 flex flex-col items-center justify-center gap-6">
            <h1 className="text-5xl font-bold text-center">Adam Rodrigues</h1>
            <h2 className="text-2xl text-center">Full Stack Developer</h2>
            <Image src={headshot} alt='headshot' className='rounded-full '/>
            <Socials gap={12} borderClasses={'border border-slate-400 rounded-full p-2 shadow-md'}/>
        </section>
        <section id="about" className="pt-24 flex flex-col items-center justify-center">
            <h2 className="text-5xl font-bold text-center">About</h2>
            <p className="text-xl text-center">I am a junior full stack developer with a passion for learning and creating.</p>
        </section>
        <section id="projects" className="pt-24 flex flex-col items-center justify-center">
            <h2 className="text-5xl font-bold text-center">Projects</h2>
        </section>
    </main>
  )
}
