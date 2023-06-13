'use client';

// TODO: Add an event listener on the clientY position of the mouse to remove the button when the mouse is in the top 1/3 of the screen

import { BsFillArrowUpCircleFill } from 'react-icons/bs';
import { useState, useEffect } from 'react';

export default function BackToTop() {
    const [scrollTop, setScrollTop] = useState(0); 
    const [shouldShow, setShouldShow] = useState(false);

    function scrollToTop() {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    useEffect(() => {
        const handleScroll = () => {
            let currentScrollTop = document.documentElement.scrollTop;
            // if scrolling up and scroll height is more than 200, show the button
            if ( currentScrollTop < scrollTop && window.scrollY > 200) {
                setShouldShow(true);
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
            <div className='fixed bottom-4 right-4 z-10'>
                <button className='animate-bounce-slow rounded-full opacity-80 shadow-md hover:scale-105 transition' onClick={() => scrollToTop()}>
                    <BsFillArrowUpCircleFill size={50} />
                </button>
            </div>
        }
        </>
    )
}