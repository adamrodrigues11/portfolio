import Socials from './Socials'

export default function Footer() {
    return(
        <footer className='flex flex-col items-center border-t border-slate-500 p-4'>
            <div className='flex flex-row justify-center items-center gap-6'>
                <Socials />
            </div>
            <p>&copy; Adam Rodrigues 2023</p>
        </footer>
    )
}