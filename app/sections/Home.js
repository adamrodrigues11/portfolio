import Image from 'next/image'
import headshot from '../../public/images/headshot.jpg'
import Socials from '../components/Socials'

export default function Home() {
    return(
        <section id="home" className="pt-24 flex flex-col items-center justify-center gap-6">
            <h1 className="text-5xl font-bold text-center">Adam Rodrigues</h1>
            <p className="text-2xl text-center">Full Stack Developer</p>
            <Image src={headshot} alt='headshot' className='rounded-full '/>
            <div className='flex justify-center items-center gap-12'>
                <Socials borderClasses={'border border-slate-400 rounded-full p-2 shadow-md'}/>
            </div>
      </section>
    )
}