'use client';
import { skills, categories } from '../data/skills';
import Image from 'next/image';
import React from 'react';

export default function Skills() {
    const [category, setCategory] = React.useState(null);

    return (
        <section id="skills" className="pt-24">   
            <h2 className='text-3xl font-bold'>Technical Skills</h2>
            <div className='mx-auto my-4'>
                <div className='flex justify-start items-center gap-2 py-4'>
                    <div className='hidden sm:inline-flex'>Category:&nbsp;</div>
                    <select className='p-2 rounded-md bg-slate-200 dark:bg-slate-700' onChange={(e) => setCategory(e.target.value ? Number(e.target.value) : null)}>
                        <option value={''}>All</option>
                        {categories.map((category) => (
                            <option key={category.id} value={category.id}>{category.name}</option>
                        ))}
                    </select>
                </div>
                <div className='grid grid-cols-auto-fit gap-4'>
                    {skills.filter((skill) => category === null || skill.category === category).map((skill) => (
                        <div key={skill.name} className='flex flex-col items-center justify-center p-2 sm:p-4 rounded-md shadow-md bg-slate-200 dark:bg-slate-700'>
                            <Image 
                                key={skill.name}
                                src={`/images/skills/${skill.icon}.png`}
                                alt={skill.name}
                                width={50}
                                height={50}
                            />
                            <div className='text-sm sm:text-base'>{skill.name}</div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}