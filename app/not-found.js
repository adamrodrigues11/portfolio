import Link from 'next/link';

// TODO: find out why nextjs keeps requesting the page over and over again, which leads to flashing of theme

export default function NotFound() {
    return (
        <div className='flex flex-col justify-center items-center h-screen gap-12'>
            <h2>Page Not Found</h2>
            <p>This page might exist in a parallel universe, but unfortunately it does not in this one.</p>
            <Link href='/#home' className='text-xl text-blue-500 hover:underline'>
                Take Me Back Home
            </Link>
        </div>
    )
}