import { resume } from './Links'
export default function ResumeButton() {
    return (
        <button className='cursor-pointer rounded-md bg-slate-400 py-1 px-2 text-sm uppercase hover:scale-105 transition'>
            <a href={resume} target='_blank' rel='noreferrer'>Resume</a>
        </button>
    )
}