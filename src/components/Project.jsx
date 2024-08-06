import React from 'react'
import project1 from '../assets/portfolio/project1.png'
import project2 from '../assets/portfolio/project2.png'
import project3 from '../assets/portfolio/project3.png'
import project4 from '../assets/portfolio/project4.png'
const Project = () => {
    const projects = [
        {
            id: 1,
            src: project1,
            link: 'https://burger-food-clone.vercel.app/',
            code: "https://github.com/abhishekrathore165/Burger-Food-Clone"
        },
        {
            id: 2,
            src: project2,
            link: 'https://job-portal-six-ashy.vercel.app/',
            code: "https://github.com/abhishekrathore165/JobPortal"
        },
        {
            id: 3,
            src: project3,
            link: 'https://image-generate-app.vercel.app/',
            code: "https://github.com/abhishekrathore165/Image-Generate-App"
        },
        {
            id: 4,
            src: project4,
            link: 'https://abhishekrathore165.github.io/College-website-app/',
            code: "https://github.com/abhishekrathore165/College-website-app"
        },
    ]
    return (
        <div name="project" className='bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen'>
            <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
                <div className='pb-8'>
                    <p className='text-4xl font-bold inline border-b-4 border-gray-500'>Project</p>
                    <p className='py-6'>Check out some of my work right here</p>
                </div>

                <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0'>
                    {
                        projects.map(({ id, src, link,code }) => (
                            <div key={id} className='shadow-md shadow-gray-600 rounded-lg'>
                                <img src={src} alt="project" className='rounded-md duration-200 hover:scale-105 w-full h-[187px]' />
                                <div className='flex items-center justify-center'>
                                    <a href={link} target='_blank' rel="noreferrer" ><button className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105'>Demo</button></a>
                                  <a href={code} target='_blank' rel="noreferrer" ><button className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105'>Code</button></a> 
                                </div>
                            </div>
                        ))
                    }
                </div>


            </div>
        </div>
    )
}

export default Project