import projects from '../../data/projects.json'
import Image from 'next/image';

export default function ProjectDetails({ params }) {
    const project = projects.find((project) => project.slug === params.slug);
    return(
        <main>
            <h2 className="text-3xl text-center font-bold">{project.title}</h2>
            <div className="p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2-1 lg:grid-cols-3-1 gap-4">
                <div className="sm:col-span-2 md:col-span-1 flex flex-col items-start gap-2">
                    <h3 className="text-xl font-bold">{project.category}</h3>
                    <div className="flex flex-row flex-wrap items-center gap-2">
                        {project.technologies.map((tech, index) => (
                            <div key={index} className="text-sm border border-slate-500 rounded-md p-0.5">{tech}</div>
                        ))}
                    </div>
                    <p className='text-sm sm:text-base'>{project.details}</p>
                </div>
                <div className="max-w-[300px] place-self-center w-full sm:max-w-[500px] aspect-square rounded-md relative z-0 overflow-hidden">
                    {project.thumbnail && <Image src={project.thumbnail} alt={project.title} fill={true} className="absolute z-10"/>}
                </div>
                <div className='flex flex-row sm:flex-col justify-center place-items-center gap-6 md:flex-row md:justify-start md:col-span-2'>
                    {project.links?.github && <button className='text-lg bg-slate-200 dark:bg-slate-700 py-4 px-8 rounded-lg shadow-md hover:scale-102 group'>
                        <a className='border-b border-transparent group-hover:border-pink-500' href={project.links.github} target='_blank' rel='noreferrer'>Github</a>
                    </button>}
                    {project.links?.demo && <button className='text-lg bg-slate-200 dark:bg-slate-700 py-4 px-8 rounded-lg shadow-md hover:scale-102 group'>
                        <a className='border-b border-transparent group-hover:border-pink-500' href={project.links.demo} target='_blank' rel='noreferrer'>Demo</a>
                    </button>}
                </div>
            </div>
        </main>
    )
}