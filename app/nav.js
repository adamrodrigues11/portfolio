'use client';

import Link from 'next/link'
import { useState, useEffect } from 'react'
import { AiOutlineClose, AiOutlineMail, AiOutlineMenu } from 'react-icons/ai'
import { FaLinkedinIn, FaGithub } from 'react-icons/fa'
import ThemeToggle from './ThemeToggle';

export default function Nav() {
    const [isOpen, setIsOpen] = useState(false);
    const [isShadow, setIsShadow] = useState(false);

    useEffect(() => {
        const handleScrollDown = () => {
            if (window.scrollY > 40) {
                setIsShadow(true);
            } else {
                setIsShadow(false);
            }
        }
        window.addEventListener('scroll', handleScrollDown);
    }, [])

    return (
        <nav className={'fixed w-full h-20 z-30 dark:bg-slate-900 bg-slate-100 ' + (isShadow && 'shadow-lg')}>
            {/* Top bar with spread options or menu button*/}
            <div className='relative flex justify-between items-center w-full h-full px-2 z-20 dark:bg-slate-900 bg-slate-100'>
                <Link href='/#home' scroll={false} onClick={() => isOpen && setIsOpen(false)}>Adam</Link>
                <div>
                    <ul className='hidden md:flex md:gap-12'>
                        <Link href='/#home' scroll={false}>
                            <li className='text-sm uppercase border-b border-b-transparent hover:border-b-pink-600'>Home</li>
                        </Link>
                        <Link href='/#about' scroll={false}>
                            <li className='text-sm uppercase border-b border-b-transparent hover:border-b-pink-600'>About</li>
                        </Link>
                        <Link href='/#projects' scroll={false}>
                            <li className='text-sm uppercase border-b border-b-transparent hover:border-b-pink-600'>Projects</li>
                        </Link>
                    </ul>
                </div>
                <div onClick={() => setIsOpen(!isOpen)} className='md:hidden mr-2'>
                    {isOpen ?
                        <AiOutlineClose size={25} /> : 
                        <AiOutlineMenu size={25} />
                    }
                </div>
                <ThemeToggle />
            </div>
            {/* Mobile dropdown menu */}
            <div className={
                'md:hidden absolute left-0 w-[100%] h-fit bg-white p-10 opacity-95 z-10 transition-all ease-in-out duration-500 ' +
                (isOpen ? 
                    'top-20 border-b border-slate-200' : 
                    'top-[-200px]' /* > size of dropdown */
                )
            }>
                <ul className='flex flex-col gap-6'>
                    <Link href='/#home' scroll={false}>
                        <li className='text-sm uppercase hover:text-pink-600' onClick={() => setIsOpen(!isOpen)}>Home</li>
                    </Link>
                    <Link href='/#about' scroll={false}>
                        <li className='text-sm uppercase hover:text-pink-600' onClick={() => setIsOpen(!isOpen)}>About</li>
                    </Link>
                    <Link href='/#projects' scroll={false}>
                        <li className='text-sm uppercase hover:text-pink-600' onClick={() => setIsOpen(!isOpen)}>Projects</li>
                    </Link>
                </ul>
            </div>
        </nav>
    )
}
