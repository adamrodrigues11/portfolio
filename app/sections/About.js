import Link from 'next/link'
import Collapsible from '../components/Collapsible'

export default function About() {
    return (
        <section id="about" className="pt-24">
            <h2>About Me</h2>
            <p>Hi, I&apos;m Adam, a junior full stack developer with a passion for engineering creative solutions for complex problems. Having recently completed the Software Systems Developer program at BCIT, I&apos;m currently looking for a full-time position as a junior developer. My technical expertise is in designing fully responsive and intuitive user interfaces, along with programming robust and logical backend code. I also have hands-on experience working with cloud services and serverless architectures.</p>
            <Collapsible title='My Story'>
                <p>Mathematical physics &mdash;&gt; teaching &mdash;&gt; programming.</p>
                <p>My diverse academic and professional background has equipped me with the skills and experience to approach novel problems with unique insights. After completing a BSc. in Mathematical Physics at the University of Waterloo, I pursued a profession in teaching. In the past 5 years, I earned a BEd. from UBC and have helped hundreds of students master concepts in physics, mathematics, and chemistry.</p>
                <p>So why become a developer? Firstly, I am a <span className='text-pink-600'>learner</span>, a <span className='text-pink-600'>deep thinker</span>, and a <span className='text-pink-600'>creator</span>. I want my work to involve new challenges and constant learning, and to leverage technology to improve the way we teach, learn, and live. 've been programming as a hobby for several years, and now I'm excited to finally make a career change.</p>
            </Collapsible>
            <Link href='/#projects' scroll={false} className='underline font-bold'><p>Check out some of my latest projects</p></Link>
        </section>
    )
}