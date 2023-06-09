import Link from 'next/link';

// TODO: find out why nextjs keeps requesting the page over and over again, which leads to flashing of theme

export default function NotFound() {
    return (
        <div className='flex flex-col justify-center items-center h-screen'>
            <h1 className='text-5xl font-bold'>404</h1>
            <h2 className='text-2xl'>Page Not Found</h2>
            <Link href='/#home' className='text-xl text-blue-500 hover:underline'>
                Back to Home
            </Link>
        </div>
    )
}