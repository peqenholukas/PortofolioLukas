import React from 'react'

const About = () => {
    return (
        <div name="about" className='w-full h-screen bg-gradient-to-b from-slate-800 to-black text-white'>
            <div className='max-w-screen-lg p-4 mx-auto flex-col justify-center w-full h-full'>
                <div className='pb-8'>
                    <p className='text-4xl font-bold inline border-b-4 border-gray-500'>About</p>
                </div>

                <p className='text-xl mt-20'>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quas corporis, necessitatibus voluptas dolore doloremque, tempore corrupti et, dolor exercitationem libero adipisci ratione magni. Ad quam delectus nihil dolorem dolore sunt voluptatem eligendi blanditiis ab facere? Repellat, ratione autem. Molestias sunt excepturi sit quam nesciunt earum quia blanditiis libero nam optio.
                </p>
                <br />
                <p className='text-xl'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae facere enim optio labore porro voluptate doloribus sequi dolor recusandae obcaecati rerum nobis nemo exercitationem, fugiat consequatur impedit aperiam quia voluptatem provident inventore possimus. Iste odit, a quas repudiandae molestiae autem ratione necessitatibus quaerat nesciunt iusto cupiditate nam nemo mollitia laborum.
                </p>
            </div>
        </div>
    )
}

export default About