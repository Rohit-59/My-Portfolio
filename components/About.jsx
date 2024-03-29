import React from 'react'
import Image from 'next/image' 
import about2 from '../public/assets/about2.png'

const About = () => {
  return (
    <div id='about' className='w-full md:h-screen p-4 flex items-center py-16' >
        <div className='max-w-7xl m-auto md:grid grid-cols-3 gap-8' >
        <div className='col-span-2'>
<p className=' text-xl font-semibold  tracking-widest text-[#5651e5] uppercase' >About</p>
<h2 className='py-4 '>Who Am I ?</h2>
<p className='py-2 text-gray-700 font-medium'>I am currently a CSE senior at IET DAVV, Indore, Madhya Pradesh.
</p><p className='py-2 text-gray-700 font-medium' >I have spent the last year learning full stack web development from different platforms. I always had a knack for web and tech in my school life and here I am learning new things about tech everyday by making different projects and building myself while doing it.
</p><p className='py-2 text-gray-700 font-medium'>I have made a significant amount of projects using differnt web technologies. I constantly update myself about new web technologies. I have worked with React JS, MongoDB, Firebase, Tailwind, Next JS etc.
</p>
<p className='py-2 text-gray-700 font-medium cursor-pointer'>You can check out some of my latest projects in the Projects Section.</p>
        </div>
        <div className='w-full h-auto shadow-xl hover:scale-105 shadow-gray-400 rounded-xl flex justify-center p-4 ease-in duration-200'>
        <Image className='rounded-xl' src={about2} alt='/' width = "290" height={200}  />
        </div>

        </div>
    </div>
  )
}

export default About