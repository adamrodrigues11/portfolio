'use client';

import Link from 'next/link'
import { useState, useEffect } from 'react'
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai'
import ThemeToggle from './ThemeToggle';
import Socials from './Socials';
import Image from 'next/image';
import lightModeLogo from '../public/images/light-mode-logo.gif';
import darkModeLogo from '../public/images/dark-mode-logo.gif';
import { useTheme } from 'next-themes';

export default function NavBar() {
    const [isOpen, setIsOpen] = useState(false);
    const [isShadow, setIsShadow] = useState(false);

    const { theme } = useTheme();

    // add shadow to navbar when scrolling down
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
            <div className='relative flex justify-between items-center w-full h-full px-2 z-20 dark:bg-gray-900 bg-slate-100'>
                {/* Logo */}
                <div>
                    <Link href='/#home' scroll={false} onClick={() => isOpen && setIsOpen(false)}>
                        {theme === 'dark' ?
                            <Image src={darkModeLogo} alt='logo'/> :
                            <Image src={lightModeLogo} alt='logo'/>
                        }
                    </Link>
                </div>
                {/* Desktop menu */}
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
                {/* Resume Link and Theme Toggle */}
                <div className='hidden md:flex items-center gap-4'>
                    <button className='cursor-pointer rounded-md bg-slate-400 py-1 px-2 text-sm uppercase hover:scale-105 transition'>
                        <a href='https://drive.google.com/file/d/1yXCIf1pUQH_SsCzSyxjzrg_tG21L7xZW/view?usp=drive_link' target='_blank' rel='noreferrer'>Resume</a>
                    </button>
                    <ThemeToggle />
                </div>
                {/* Mobile menu button */}
                <div onClick={() => setIsOpen(!isOpen)} className='md:hidden mr-2 cursor-pointer'>
                    {isOpen ?
                        <AiOutlineClose size={25} /> : 
                        <AiOutlineMenu size={25} />
                    }
                </div>
            </div>
            {/* Mobile dropdown menu */}
            <div className={
                'md:hidden absolute flex justify-between left-0 w-[100%] h-fit px-6 pb-6 bg-inherit opacity-95 z-10 transition-all ease-in-out duration-500 ' +
                (isOpen ? 
                    'top-20 border-b border-slate-200' : 
                    'top-[-200px]' /* > size of dropdown */
                )
            }>
                <ul className='flex flex-col gap-6 justify-between'>
                    <Link href='/#home' scroll={false}>
                        <li className='text-sm w-fit uppercase border-b border-b-transparent hover:border-b-pink-600' onClick={() => setIsOpen(!isOpen)}>Home</li>
                    </Link>
                    <Link href='/#about' scroll={false}>
                        <li className='text-sm w-fit uppercase border-b border-b-transparent hover:border-b-pink-600' onClick={() => setIsOpen(!isOpen)}>About</li>
                    </Link>
                    <Link href='/#projects' scroll={false}>
                        <li className='text-sm w-fit uppercase border-b border-b-transparent hover:border-b-pink-600' onClick={() => setIsOpen(!isOpen)}>Projects</li>
                    </Link>
                </ul>
                <div className='flex flex-col gap-6 items-end justify-between'>
                    <ThemeToggle />
                    <button className='cursor-pointer rounded-md bg-slate-400 w-fit py-1 px-2 text-sm uppercase hover:scale-105 transition'>
                        <a href='https://drive.google.com/file/d/1yXCIf1pUQH_SsCzSyxjzrg_tG21L7xZW/view?usp=drive_link' target='_blank' rel='noreferrer'>Resume</a>
                    </button>
                    <Socials gap={4} />
                </div>
            </div>
        </nav>
    )
}
