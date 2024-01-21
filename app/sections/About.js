import Link from 'next/link'
import Collapsible from '../components/Collapsible'

export default function About() {
    return (
        <section id="about" className="pt-24">
            <h2>About Me</h2>
            <p>Hi, I&apos;m Adam, a certified math and physics teacher, full stack web developer, and educational technology enthusiast. I work full time as the Ed Tech Coordinator for <Link href={'https://www.stgeorges.bc.ca/'} target='_blank' className='underline text-pink-600'>St. George&apos;s Sr. School</Link>, improving student and teacher experiences through effective and bespoke tech integrations. Welcome to my personal developer portfolio where I will be sharing updates on personal projects and my contributions to open source software. Please feel free to connect with me regarding any software projects, especially in the ed tech space.</p>
            <Collapsible title='My Story'>
                <p>Mathematical physics &mdash;&gt; teaching &mdash;&gt; programming.</p>
                <p>During my BSc in Mathematical Physics at the University of Waterloo, I became involved in online course development for the <Link href='https://www.cemc.uwaterloo.ca/' target='_blank' className='underline text-pink-600'>CEMC</Link> and teaching math and physics. I then went on to receive a BEd from UBC and am now a certified teacher.</p>
                <p>So why begin pursuing web development? Firstly, I am a <span className='text-pink-600'>learner</span>, a <span className='text-pink-600'>deep thinker</span>, and a <span className='text-pink-600'>creator</span>. I want my work to involve new challenges and constant learning, and to leverage technology to improve the way we teach and learn.</p>
                <p>Programming as a hobby slowly morphed into a certificate in web development at BCIT and now into work at the intersection of education and software.</p>
            </Collapsible>
            <Link href='/#projects' scroll={false} className='underline font-bold'><p>Check out some of my latest projects</p></Link>
        </section>
    )
}