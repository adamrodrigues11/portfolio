import Link from 'next/link';
import { FiArrowLeft } from 'react-icons/fi';

export default function ProjectDetailsLayout({ children }) {
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
