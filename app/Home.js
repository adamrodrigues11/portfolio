import Image from 'next/image'
import headshot from '../public/images/headshot.jpg'

export default function Home() {
    return (
        <section id="home" className="pt-24 flex flex-col items-center justify-center">
            <h1 className="text-5xl font-bold text-center p-6">Adam Rodrigues</h1>
            <h2 className="text-2xl text-center">Junior Full Stack Developer</h2>
            <Image src={headshot} alt='headshot' className='rounded-full '/>
            <div>         
            </div>
        </section>
    )
}