import projects from '../../data/projects.json'
import Image from 'next/image';

export default function ProjectDetails({ params }) {
    const project = projects.find((project) => project.slug === params.slug);
    return(
        <main>
            <h2 className="text-3xl text-center font-bold">{project.title}</h2>
            <h3 className="text-lg text-center">{project.category}</h3>
            <div className="p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2-1 lg:grid-cols-3-1 gap-8">
                <div className="sm:col-span-2 md:col-span-1 flex flex-col items-start gap-2">
                    <h4 className="text-lg font-bold">About the Application</h4>
                    <div className="flex flex-row flex-wrap items-center gap-2">
                        {project.technologies.map((tech, index) => (
                            <div key={index} className="text-sm border border-slate-500 rounded-md p-0.5">{tech}</div>
                        ))}
                    </div>
                    <p className='text-sm sm:text-base'>{project.appDetails}</p>
                </div>
                <div className="max-w-[400px] place-self-center w-full sm:max-w-[500px] aspect-square rounded-md relative z-0 overflow-hidden">
                    {project.thumbnail && <Image src={project.thumbnail.path} alt={project.thumbnail.alt} fill={true} className="absolute z-10"/>}
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
            <div className="p-4 grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="lg:order-2 flex flex-col items-start gap-2">
                    <h4 className="text-lg font-bold">My Role</h4>
                    <p className='text-sm sm:text-base'>{project.role}</p>
                </div>
                <div className="max-w-[400px] place-self-center w-full lg:order-1 sm:max-w-[600px] aspect-square rounded-md relative z-0 overflow-hidden">
                    {project.image && <Image src={project.image.path} alt={project.image.alt} fill={true} style={{objectFit: "contain"}} className="absolute z-10"/>}
                </div>
            </div>
        </main>
    )
}