import projects from '../../data/projects.json'
import Image from 'next/image';

export default function ProjectDetails({ params }) {
    const project = projects.find((project) => project.slug === params.slug);
    return(
        <main>
            <h2 className="text-3xl text-center font-bold">{project.title}</h2>
            <h3 className="text-lg text-center">{project.category}</h3>
            
        </main>
    )
}