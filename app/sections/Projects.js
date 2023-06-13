import ProjectCard from '../components/ProjectCard'
import projects from '../data/projects.js'

export default function Projects() {
    return(
        <section id="projects" className="pt-24">
            <h2 className="text-3xl font-bold">Projects</h2>
            <div className="my-4 py-4 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-auto-fit-350 justify-items-center gap-8">
                {projects.map((project) => (
                    <ProjectCard 
                        key={project.id} 
                        {...project} 
                    />
                ))}
            </div>
      </section>
    )
}