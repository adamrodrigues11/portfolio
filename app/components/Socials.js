import { FiMail } from 'react-icons/fi'
import { FaLinkedinIn, FaGithub } from 'react-icons/fa'
import { linkedIn, github, email } from '../data/Links'

export default function Socials({ borderClasses }) {
    return (
        <>
            <a 
                href={linkedIn} 
                target='_blank' 
                rel='noreferrer' 
                className={'hover:scale-105 transition' + (borderClasses && ' ' + borderClasses)}
            >
                <FaLinkedinIn size={25} />
            </a>
            <a 
                href={github}
                target='_blank' 
                rel='noreferrer'
                className={'hover:scale-105 transition' + (borderClasses && ' ' + borderClasses)}
            >
                <FaGithub size={25} />
            </a>
            <a 
                href={'mailto:' + email}
                className={'hover:scale-105 transition' + (borderClasses && ' ' + borderClasses)}
            >
                <FiMail size={25} />
            </a>
        </>
    )
}