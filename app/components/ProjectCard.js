import Image from 'next/image'
import Link from 'next/link'


export default function ProjectCard({ slug, title, category, thumbnail, technologies, description }) {
    return (
        <Link href={`/projects/${slug}`}>
            <div className='h-full flex flex-col items-start p-2 gap-2 max-w-project-card bg-slate-200 dark:bg-slate-700 rounded-md shadow-md hover:cursor-pointer hover:scale-102 transition-all ease-in-out group'>
                <h3 className='text-xl font-bold'>{title}</h3>
                <h4 className='text-sm sm:text-base'>{category}</h4>
                <div className='w-full aspect-square rounded-md relative z-0 overflow-hidden'>
                    {thumbnail && <Image src={thumbnail.path} alt={thumbnail.alt} fill={true} className='absolute z-10 group-hover:blur-xs'/>}
                    <div className='flex gap-12 justify-center items-center absolute top-0 left-0 w-full h-full z-20'>
                        <div className='text-xl bg-slate-200 dark:bg-slate-700 py-4 px-8 rounded-lg shadow-md opacity-0 group-hover:opacity-90 transition-opacity ease-linear'>
                            <p className='border-b border-transparent hover:border-pink-500'>Details</p>
                        </div>
                    </div>
                </div>
                {technologies && technologies.length > 0 && 
                    <div className='flex flex-row flex-wrap items-center gap-2'>
                        {technologies.map((tech, index) => (
                            <div key={index} className='text-sm border border-slate-500 rounded-md p-0.5'>{tech}</div>
                        ))}
                    </div>
                }
                {description && ( 
                    <p>{description}</p>
                )}
            </div>
        </Link>
    )
}