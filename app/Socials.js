import { FiMail } from 'react-icons/fi'
import { FaLinkedinIn, FaGithub } from 'react-icons/fa'

export default function Socials({ gap, borderClasses }) {
    return (
        <div className={`flex justify-center items-center gap-${gap}`}>
            <a 
                href='https://www.linkedin.com/in/adamrodrigues11/' 
                target='_blank' 
                rel='noreferrer' 
                className={'hover:scale-105 transition' + (borderClasses && ' ' + borderClasses)}
            >
                <FaLinkedinIn size={25} />
            </a>
            <a 
                href='https://github.com/adamrodrigues11' 
                target='_blank' 
                rel='noreferrer'
                className={'hover:scale-105 transition' + (borderClasses && ' ' + borderClasses)}
            >
                <FaGithub size={25} />
            </a>
            <a 
                href='mailto:adamrodrigues11@gmail.com'
                className={'hover:scale-105 transition' + (borderClasses && ' ' + borderClasses)}
            >
                <FiMail size={25} />
            </a>
        </div>
    )
}