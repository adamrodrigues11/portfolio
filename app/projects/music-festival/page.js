import projects from '../../data/projects.js'
import Image from 'next/image';

export default function ProjectDetails() {
    const project = projects.find((project) => project.slug === "music-festival");
    return(
        <main>
            <h2 className="text-3xl text-center font-bold">{project.title}</h2>
            <h3 className="text-lg text-center">{project.category}</h3>
            <h4 className="mt-4 text-lg font-bold">About the Application</h4>
            <div className="my-4 flex flex-wrap gap-4 xl:flex-nowrap xl:justify-between">
                <div>
                    <div className="flex flex-row flex-wrap items-center gap-2">
                        {project.technologies.map((tech, index) => (
                            <div key={index} className="text-sm border border-slate-500 rounded-md p-0.5">{tech}</div>
                        ))}
                    </div>
                    <p>For one of my projects in the Software Systems Developer program at BCIT, I worked in a team of four to develop a fully-featured website and ticket management system for a mock music festival. The goal of the project was to create a website using ASP.NET Core MVC and MS SQL that would allow for recurring revenue generation. The website allows users to browse artists for the current festival and purchase tickets via PayPal. It also includes an admin dashboard for managing festivals, ticket types, and viewing sales data. Roles and authorization are managed through Microsoft Identity Framework.</p>
                </div>
                <div className='flex flex-row flex-wrap justify-center place-items-center gap-6 xl:justify-start'>
                    <button className='text-lg bg-slate-200 dark:bg-slate-700 py-2 sm:py-4 px-4 sm:px-8 rounded-lg shadow-md hover:scale-102 group'>
                        <a className='border-b border-transparent group-hover:border-pink-500' href={project.links.github} target='_blank' rel='noreferrer'>Github</a>
                    </button>
                    <button className='text-lg bg-slate-200 dark:bg-slate-700 py-2 sm:py-4 px-4 sm:px-8 rounded-lg shadow-md hover:scale-102 group'>
                        <a className='border-b border-transparent group-hover:border-pink-500' href={project.links.demo} target='_blank' rel='noreferrer'>Demo</a>
                    </button>
                    <div>
                        <div className='text-sm sm:text-base'><span className='font-bold'>Email/Username:&nbsp;</span>{project.demoLogin.email}</div>
                        <div className='text-sm sm:text-base'><span className='font-bold'>Password:&nbsp;</span>{project.demoLogin.password}</div>
                    </div>
                </div>
            </div>
            <h4 className="mt-4 text-lg font-bold">My Role</h4>
            <p>As the database lead, my main responsibilities included devising a normalized database schema for the application (see ERD), and implementing the database using MS SQL and Entity Framework. My goal was to create a database structure that would allow for re-use of ticket types in several festivals, but with a specific alloted quantity of each type for a given festival. Additionally, Microsoft Identity Framework was used to generate the default authorization tables for the application; these are connected to the custom schema via the unique email address of each user. I also contributed to the development of the UI using Razor Pages and Bootstrap, and deployed the database and application to Azure.</p>
            <div className='w-full max-w-[300px] sm:max-w-[600px] mx-auto aspect-square rounded-md relative z-0'>
                <Image
                    src={project.image.path}
                    alt={project.image.alt}
                    fill={true}
                    style={{objectFit: "contain"}}
                />
            </div>
        </main>
    )
}