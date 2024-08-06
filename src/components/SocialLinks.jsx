import React from 'react'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { HiOutlineMail } from 'react-icons/hi'
import { BsFillPersonLinesFill } from 'react-icons/bs'
const SocialLinks = () => {
    const links = [
        {
            id: 1,
            child: (
                <>
                    Linkedin <FaLinkedin size={30} />
                </>
            ),
            href: 'https://www.linkedin.com/in/abhishek-rathore-0a9b8029a?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3B8nwaIViaTWuxe%2FuYUVw%2F4g%3D%3D',
            style: 'rounded-tr-md'
        },
        {
            id: 2,
            child: (
                <>
                    Github <FaGithub size={30} />
                </>
            ),
            href: 'https://github.com/abhishekrathore165',
        },
        {
            id: 3,
            child: (
                <>
                    Mail <HiOutlineMail size={30} />
                </>
            ),
            href: 'mailto:abhishekrathore468@gmail.com',
        },
        {
            id: 4,
            child: (
                <>
                    Resume <BsFillPersonLinesFill size={30} />
                </>
            ),
            href: '/resume.pdf',
            style: 'rounded-br-md',
            download: true,
        },
    ]
    return (
        <div className='hidden lg:flex flex-col top-[35%] left-0 fixed'>
            <ul>
                {links.map(({id,child,href,style,download}) => (
                    <li key={id} className={`flex justify-between items-center w-40 h-14 px-4 bg-gray-500 ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-300 ${style}`}>
                        <a href={href} className='flex justify-between w-full text-white' download={download} target='_blank' rel="noreferrer">
                            <>
                                {child}
                            </>
                        </a>
                    </li>
                ))}

            </ul>
        </div>
    )
}

export default SocialLinks