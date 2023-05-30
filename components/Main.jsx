/* eslint-disable react/no-unescaped-entities */
import Link from 'next/link'
import React from 'react'
import {AiOutlineClose,AiOutlineMenu,AiOutlineMail} from 'react-icons/ai'
import {FaLinkedinIn,FaGithub,FaTwitter} from 'react-icons/fa'

const Main = () => {
  return (
    <div id='main' className='w-full h-screen text-center'>
<div className='max-w-7xl w-full h-full mx-auto p-2 flex justify-center items-center'>
<div>
  <p className='uppercase text-sm tracking-widest text-gray-700 font-medium' >Let's develop something together</p>
  <h1 className='py-4 text-gray-800'>Hi, I'm <span className='text-[#5651e5]' >Rohit</span> </h1>
  <h1 className='py-2 text-gray-800'>
     A Full-Stack Web Developer
  </h1>
  <p className='py-4 font-medium max-w-[70%] m-auto'>I'm currently aspiring to become a full stack web developer and have worked on web technologies like React, Next, Express, Node, MongoDB, Tailwind, Vite etc. Currently I'm focused on learning new technologies and building responsive web applications with integrated and synchronized front-end and back-end.</p>
  <div className='flex items-center justify-between max-w-[330px] mx-auto py-4'>

<Link href='https://www.linkedin.com/in/rohit-raghuwanshi-487922223/' >
<div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300' >
<FaLinkedinIn/>
</div>

</Link>

<Link href='https://github.com/Rohit-59' >
<div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300' >
<FaGithub/>
</div>
</Link>

<Link href='/#contact' >
<div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300' >
<AiOutlineMail/>
</div>
</Link>

<Link href='https://twitter.com/roheeet5' >
<div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300' >
<FaTwitter/>
</div>
</Link>

</div>



</div>


</div>


    </div>
  )
}

export default Main