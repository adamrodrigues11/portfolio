import Link from 'next/link'
import { BsFillArrowLeftCircleFill } from 'react-icons/bs'

export default function ProjectDetailsLayout({ children }) {
  return (
    <div>
        <Link href="/#projects" scroll={false} className='fixed z-10 top-24 left-4'>
            <BsFillArrowLeftCircleFill size={40} />
        </Link>
        <div>{children}</div>
    </div>
  )
}
