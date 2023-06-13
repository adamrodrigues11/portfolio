import projects from '../../data/projects.json'
import Image from 'next/image';

export default function ProjectDetails() {
    const project = projects.find((project) => project.slug === 'agilitek-solutions');
    return(
        <main>
            <h2 className="text-center">{project.title}</h2>
            <h3 className="text-lg text-center">{project.category}</h3>
            <h4 className="mt-4 text-lg font-bold">About the Application</h4>
            <div className="my-4 flex flex-wrap gap-4 xl:flex-nowrap xl:justify-between">
                <div>
                    <div className="flex flex-row flex-wrap items-center gap-2">
                        {project.technologies.map((tech, index) => (
                            <div key={index} className="text-sm border border-slate-500 rounded-md p-0.5">{tech}</div>
                        ))}
                    </div>
                    <p>
                        In the final month of the Software Systems Developer program at BCIT, I completed a project sponsored by a local digital consulting company, <a href="https://agiliteksolutions.com/" target='_blank' rel='noreferrer' className='text-pink-500 hover:underline'>Agilitek Solutions</a>. My team built a data explorer and tool for analyzing correlations in an anonymized customer dataset with 100,000&apos;s of transaction records. The application allows an analyst to group customers into custom segments based on their demographics or transaction records in order to generate targeted comparisons and marketing insights.
                    </p>
                </div>
                <div className='flex flex-row flex-wrap justify-center place-items-center gap-6 xl:justify-start'>
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
            <p className='max-w-2xl'>My main responsibilities included leading the design and implementation of the segment details page and contributing to the design of the overall application architecture.</p>
            <div className="my-4 flex flex-col lg:flex-row">
                <div className='w-full lg:w-1/2 lg:px-4'>
                    <div className='w-full max-w-[300px] sm:max-w-[400px] mx-auto aspect-square rounded-md relative z-0'>
                        <Image 
                            src={project.thumbnail.path}
                            alt={project.thumbnail.alt}
                            fill={true}
                            style={{objectFit: "contain"}}
                        />
                    </div>
                    <div className='w-full'>
                        <p>The main requirments of the segment details page were the ability to quickly visualize the overlap of the selected segments with other existing segments, and to browse the customers that belonged to the selected segment. I implemented these features through an interactive bar chart showing % overlap (with filtering based on segment size and custom selections) and a customer table using server-side pagination.</p>
                    </div>
                </div>
                <div className='w-full lg:w-1/2 lg:px-4'>
                    <div className='w-full max-w-[300px] sm:max-w-[400px] mx-auto aspect-square rounded-md relative z-0'>
                        <Image
                            src={project.image.path}
                            alt={project.image.alt}
                            fill={true}
                            style={{objectFit: "contain"}}
                        />
                    </div>
                    <div className='w-full'>
                        <p>With respect to the overall application architecture, the goal was to create a secure way to interface with the existing databse hosted in AWS RDS with minimal cost for the proof of concept. As such, we decided to build our backend as serverless Lambda functions integrated into an API Gateway which we could make requests to from our client-side application distrubted by a Cloudfront CDN. All the AWS services were set up using <a href="https://sst.dev/" target="_blank" rel="noreferrer" className='text-pink-500 hover:underline'>SST</a>, a modern tool for AWS infrastructure development.</p>
                    </div>
                </div>
            </div>
        </main>
    )
}
