'use client';

import { BsFillArrowLeftCircleFill } from 'react-icons/bs';
import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function BackButton() {
    const [shouldShow, setShouldShow] = useState(false);

    useEffect(() => {
        const handleMouseMove = (e) => {
            let currentCursorPosition = {
                x: e.clientX,
                y: e.clientY
            }
            if ( currentCursorPosition.x < ( window.innerWidth / 3 ) || currentCursorPosition.y < ( window.innerHeight / 3 )) {
                setShouldShow(true);
                
            } else {
                setShouldShow(false);
            }
        }
        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);
        
    return (
        <>
        {shouldShow && 
            <div className='fixed top-28 left-4 z-10'>
                <Link href='/#projects' scroll={false}>
                    <button className='animate-bounce-slow rounded-full opacity-80 shadow-md hover:scale-105 transition'>
                        <BsFillArrowLeftCircleFill size={50} />
                    </button>
                </Link>
            </div>
        }
        </>
    )
}