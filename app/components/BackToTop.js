'use client';

import { BsFillArrowUpCircleFill } from 'react-icons/bs';
import { useState, useEffect } from 'react';

function scrollToId(id) {
    const element = document.getElementById(id);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
    }
}


export default function BackToTop() {
    const [scrollTop, setScrollTop] = useState(0); 
    const [shouldShow, setShouldShow] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            let currentScrollTop = document.documentElement.scrollTop;
            if ( currentScrollTop < scrollTop) {
                // scrolling up
                if (window.scrollY > 100) {
                    setShouldShow(true);
                }
            } else {
                setShouldShow(false);
            }
            setScrollTop( currentScrollTop <= 0 ? 0 : currentScrollTop);
        }
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [scrollTop]);
        
    return (
        <>
        {shouldShow && 
            <div className='fixed bottom-4 right-4'>
                <button className='animate-bounce-slow rounded-full shadow-md hover:scale-105 transition' onClick={() => scrollToId('home')}>
                    <BsFillArrowUpCircleFill size={50} />
                </button>
            </div>
        }
        </>
    )
}