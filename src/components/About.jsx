import React from 'react'

const About = () => {
    return (
        <div name="about" className='w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white'>
            <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
                <div className='pb-8'>
                    <p className='text-4xl font-bold inline border-b-4 border-gray-500'> About</p>
                </div>

                <p className='text-xl mt-20' >
                    Hello! I’m Abhishek Rathore, a passionate and dedicated full-stack developer from Ashta, Madhya Pradesh. As a fresher in the field, I am eager to leverage my skills and knowledge to create impactful web applications. My journey into web development is driven by a fascination with how websites work and a strong desire to build seamless and intuitive user experiences.
                </p>
                <br />
                <p className='text-xl' >
                    Starting from curiosity, I have transformed my interest in web technologies into a dedicated pursuit of a career in web development. My learning journey has been hands-on, involving the creation of several projects that demonstrate my growing expertise.
                </p>
            </div>
        </div>
    )
}

export default About