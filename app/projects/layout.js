import Link from 'next/link';
import { FiArrowLeft } from 'react-icons/fi';
import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

export default function ProjectDetailsLayout({ children }) { 
  // Temporary workaround for an unresolved bug in nextjs where the page does not scroll to the top when navigating to a new page
  // if smooth scrolling is enabled. See https://github.com/vercel/next.js/issues/28778
  const pathname = usePathname()
  useEffect(() => {
    if (pathname.startsWith('/projects')) {
      window.scrollTo(0, 0)
    }
  }, [pathname])

  return (
    <div>
        <Link href='/#projects' scroll={false}>
            <button className='flex gap-2 hover:scale-105 hover:text-pink-500 transition'>
                <FiArrowLeft size={25} /> Back to All Projects
            </button>
        </Link>
        <div className='mt-4 w-full border-b border-slate-500'></div>
        <div className='mt-4'>{children}</div>
    </div>
  )
}
