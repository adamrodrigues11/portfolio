'use client';

import Link from 'next/link'
import { useState } from 'react'
import { AiOutlineClose, AiOutlineMail, AiOutlineMenu } from 'react-icons/ai'
import { FaLinkedinIn, FaGithub } from 'react-icons/fa'
import { TbMoon } from 'react-icons/tb'

export default function Nav() {
    const [isOpen, setIsOpen] = useState(false);
    // const [navBg, setNavBg] = useState('#0141ff');

    return (
        <nav className={'fixed w-full h-20 z-[100]'}>
            {/* Top bar with spread options or menu button*/}
            <div className='flex justify-between items-center w-full h-full px-2'>
                <Link href='/#home'>Adam</Link>
                <div>
                    <ul className='hidden md:flex md:gap-12'>
                        <Link href='/#home'>
                            <li className='text-sm uppercase hover:border-b'>Home</li>
                        </Link>
                        <Link href='/#about'>
                            <li className='text-sm uppercase hover:border-b'>About</li>
                        </Link>
                        <Link href='/#projects'>
                            <li className='text-sm uppercase hover:border-b'>Projects</li>
                        </Link>
                    </ul>
                </div>
                <div onClick={() => setIsOpen(!isOpen)} className='md:hidden mr-2'>
                    <AiOutlineMenu size={25} />
                </div>
                <div className='hidden md:block'>
                    <TbMoon size={25} />
                </div>
            </div>
            {/* Mobile dropdown menu */}
            <div className={isOpen ? 'md:hidden flex flex-col justify-center items-center w-full h-screen bg-[#0141ff] text-white' : 'hidden'}>
                Opened
            </div>
        </nav>
    )
}
