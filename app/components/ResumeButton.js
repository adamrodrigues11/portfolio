import links from '../data/links.json'
export default function ResumeButton() {
    return (
        <button className='cursor-pointer rounded-md bg-slate-400 py-1 px-2 text-sm uppercase hover:scale-105 transition'>
            <a href={links.resume} target='_blank' rel='noreferrer'>Resume</a>
        </button>
    )
}