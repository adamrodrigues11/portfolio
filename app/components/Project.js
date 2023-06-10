import Collapsible from './Collapsible'
import Image from 'next/image'

export default function Project({ title, category, thumbnail, technologies, description, demo, github }) {
    return (
        <div className='flex flex-col items-start py-6 max-w-project-card'>
            <h3 className='text-xl font-bold'>{title}</h3>
            <h4 className='text-sm sm:text-base text-slate-500'>{category}</h4>
            <div className='bg-slate-200 dark:bg-slate-700 rounded-md shadow-md w-full aspect-square relative z-0'>
                {thumbnail && <Image src={thumbnail} alt={title} fill={true} className='rounded-md p-4 absolute z-10'/>}
            </div>
            {technologies && technologies.length > 0 && 
                <div className='flex flex-row flex-wrap items-center gap-2'>
                    {technologies.map((tech, index) => (
                        <div key={index} className='text-sm border border-slate-500 rounded-md p-1'>{tech}</div>
                    ))}
                </div>
            }
            {description && ( 
                <Collapsible title='Description'>
                    {description}
                </Collapsible>
            )}
            <div className='flex flex-row gap-4'>
                {demo && <a href={demo} target='_blank' rel='noreferrer' className='text-sm sm:text-base text-slate-500 hover:text-slate-400'>Demo</a>}
                {github && <a href={github} target='_blank' rel='noreferrer' className='text-sm sm:text-base text-slate-500 hover:text-slate-400'>Github</a>}
            </div>
        </div>
    )
}