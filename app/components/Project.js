import Collapsible from './Collapsible'
import Image from 'next/image'

export default function Project({ title, category, thumbnail, technologies, description, demo, github }) {
    return (
        <div className='h-fit flex flex-col items-start p-2 gap-2 max-w-project-card bg-slate-200 dark:bg-slate-700 rounded-md shadow-md'>
            <h3 className='text-xl font-bold'>{title}</h3>
            <h4 className='text-sm sm:text-base'>{category}</h4>
            <div className='w-full aspect-square rounded-md relative z-0 overflow-hidden group'>
                {thumbnail && <Image src={thumbnail} alt={title} fill={true} className='absolute z-10'/>}
                <div className='flex gap-12 justify-center items-center absolute top-0 left-0 w-full h-full z-20'>
                    {demo && 
                        <button className='bg-slate-700 p-4 rounded-lg shadow-md hover:scale-105 opacity-0 group-hover:opacity-90 transition-opacity ease-linear'>
                            <a href={demo} target='_blank' rel='noreferrer' className='text-lg text-slate-50'>Demo</a>
                        </button>
                    }
                    {github &&
                        <button className='bg-slate-700 p-4 rounded-lg shadow-md hover:scale-105 opacity-0 group-hover:opacity-90 transition-opacity ease-linear'>
                            <a href={github} target='_blank' rel='noreferrer' className='text-lg text-slate-50'>Github</a>
                        </button> 
                    }
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
                <Collapsible title='Details'>
                    {description}
                </Collapsible>
            )}
        </div>
    )
}