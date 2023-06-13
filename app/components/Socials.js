import { FiMail } from 'react-icons/fi'
import { FaLinkedinIn, FaGithub } from 'react-icons/fa'
import links from '../data/links'

export default function Socials({ borderClasses }) {
    return (
        <>
            <a 
                href={links.linkedIn} 
                target='_blank' 
                rel='noreferrer' 
                className={'hover:scale-105 transition' + (borderClasses && ' ' + borderClasses)}
            >
                <FaLinkedinIn size={25} />
            </a>
            <a 
                href={links.github}
                target='_blank' 
                rel='noreferrer'
                className={'hover:scale-105 transition' + (borderClasses && ' ' + borderClasses)}
            >
                <FaGithub size={25} />
            </a>
            <a 
                href={'mailto:' + links.email}
                className={'hover:scale-105 transition' + (borderClasses && ' ' + borderClasses)}
            >
                <FiMail size={25} />
            </a>
        </>
    )
}