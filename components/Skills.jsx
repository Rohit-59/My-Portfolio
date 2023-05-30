import React from 'react'
import Image from 'next/image'

const Skills = () => {
  return (
    <div id='skills' className='w-full lg:h-screen p-2 py-10' >
        <div className='max-w-7xl mx-auto flex flex-col justify-center h-full'>
        <p className='font-semibold text-xl tracking-widest text-[#5651e5] uppercase' >Skills</p>
        <h2 className='py-5'  >What I Can do</h2>
            <div className='grid md:grid-cols-2 lg:grid-cols-4' >

    <div className='p-6 m-3 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
    <div className='grid grid-cols-2 gap-4 justify-center items-center' >
  <div className='m-auto' >
  <Image src='/../public/assets/skills/html.png' alt='/' width='64' height='64'/>
  </div>
  <div>
    <h3 className='flex flex-col items-center justify-center' >HTML</h3>
    </div>
    </div>
    </div>
    <div className='p-6 m-3 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
    <div className='grid grid-cols-2 gap-4 justify-center items-center' >
  <div className='m-auto' >
  <Image src='/../public/assets/skills/css.png' alt='/' width='64' height='64'/>
  </div>
  <div>
    <h3 className='flex flex-col items-center justify-center' >CSS</h3>
    </div>
    </div>
    </div>

    <div className='p-6  m-3 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
    <div className='grid grid-cols-2 gap-4 justify-center items-center' >
  <div className='m-auto' >
  <Image src='/../public/assets/skills/javascript.png' alt='/' width='64' height='64'/>
  </div>
  <div>
    <h3 className='flex flex-col items-center justify-center' >Javascript</h3>
    </div>
    </div>
    </div>

    <div className='p-6 m-3 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
    <div className='grid grid-cols-2 gap-4 justify-center items-center' >
  <div className='m-auto' >
  <Image src='/../public/assets/skills/react.png' alt='/' width='64' height='64'/>
  </div>
  <div>
    <h3 className='flex flex-col items-center justify-center' >React</h3>
    </div>
    </div>
    </div>

    <div className='p-6 m-3 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
    <div className='grid grid-cols-2 gap-4 justify-center items-center' >
  <div className='m-auto' >
  <Image src='/../public/assets/skills/node.png' alt='/' width='64' height='64'/>
  </div>
  <div>
    <h3 className='flex flex-col items-center justify-center' >Node</h3>
    </div>
    </div>
    </div>

    <div className='p-6 m-3 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
    <div className='grid grid-cols-2 gap-4 justify-center items-center' >
  <div className='m-auto' >
  <Image src='/../public/assets/skills/tailwind.png' alt='/' width='64' height='64'/>
  </div>
  <div>
    <h3 className='flex flex-col items-center justify-center' >tailwind</h3>
    </div>
    </div>
    </div>

    <div className='p-6 m-3 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
    <div className='grid grid-cols-2 gap-4 justify-center items-center' >
  <div className='m-auto' >
  <Image src='/../public/assets/skills/mongo.png' alt='/' width='64' height='64'/>
  </div>
  <div>
    <h3 className='flex flex-col items-center justify-center' >MongoDB</h3>
    </div>
    </div>
    </div>

    <div className='p-6 m-3 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
    <div className='grid grid-cols-2 gap-4 justify-center items-center' >
  <div className='m-auto' >
  <Image src='/../public/assets/skills/github1.png' alt='/' width='64' height='64'/>
  </div>
  <div>
    <h3 className='flex flex-col items-center justify-center' >GitHub</h3>
    </div>
    </div>
    </div>

    <div className='p-6 m-3 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
    <div className='grid grid-cols-2 gap-4 justify-center items-center' >
  <div className='m-auto' >
  <Image src='/../public/assets/skills/express.png' alt='/' width='64' height='64'/>
  </div>
  <div>
    <h3 className='flex flex-col items-center justify-center' >Express</h3>
    </div>
    </div>
    </div>



            </div>
        </div>
    </div>
  )
}

export default Skills