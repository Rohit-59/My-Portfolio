import React from 'react'
import Image from 'next/image'
import htmli from '../public/assets/skills/html.png'
import cssi from '../public/assets/skills/css.png'
import javascripti from '../public/assets/skills/javascript.png'
import reacti from '../public/assets/skills/react.png'
import nodei from '../public/assets/skills/node.png'
import tailwindi from '../public/assets/skills/tailwind.png'
import mongoi from '../public/assets/skills/mongo.png'
import github1i from '../public/assets/skills/github1.png'
import expressi from '../public/assets/skills/express.png'
import firebase from '../public/assets/skills/firebase.png'

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
  <Image src={htmli} alt='/' width='64' height='64'/>
  </div>
  <div>
    <h3 className='flex flex-col items-center justify-center' >HTML</h3>
    </div>
    </div>
    </div>
    <div className='p-6 m-3 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
    <div className='grid grid-cols-2 gap-4 justify-center items-center' >
  <div className='m-auto' >
  <Image src={cssi} alt='/' width='64' height='64'/>
  </div>
  <div>
    <h3 className='flex flex-col items-center justify-center' >CSS</h3>
    </div>
    </div>
    </div>

    <div className='p-6  m-3 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
    <div className='grid grid-cols-2 gap-4 justify-center items-center' >
  <div className='m-auto' >
  <Image src={javascripti} alt='/' width='64' height='64'/>
  </div>
  <div>
    <h3 className='flex flex-col items-center justify-center' >Javascript</h3>
    </div>
    </div>
    </div>

    <div className='p-6 m-3 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
    <div className='grid grid-cols-2 gap-4 justify-center items-center' >
  <div className='m-auto' >
  <Image src={firebase} alt='/' width='64' height='64'/>
  </div>
  <div>
    <h3 className='flex flex-col items-center justify-center' >Firebase</h3>
    </div>
    </div>
    </div>

    <div className='p-6 m-3 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
    <div className='grid grid-cols-2 gap-4 justify-center items-center' >
  <div className='m-auto' >
  <Image src={reacti} alt='/' width='64' height='64'/>
  </div>
  <div>
    <h3 className='flex flex-col items-center justify-center' >React</h3>
    </div>
    </div>
    </div>

    <div className='p-6 m-3 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
    <div className='grid grid-cols-2 gap-4 justify-center items-center' >
  <div className='m-auto' >
  <Image src={nodei} alt='/' width='64' height='64'/>
  </div>
  <div>
    <h3 className='flex flex-col items-center justify-center' >Node</h3>
    </div>
    </div>
    </div>

    <div className='p-6 m-3 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
    <div className='grid grid-cols-2 gap-4 justify-center items-center' >
  <div className='m-auto' >
  <Image src={tailwindi} alt='/' width='64' height='64'/>
  </div>
  <div>
    <h3 className='flex flex-col items-center justify-center' >tailwind</h3>
    </div>
    </div>
    </div>

    <div className='p-6 m-3 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
    <div className='grid grid-cols-2 gap-4 justify-center items-center' >
  <div className='m-auto' >
  <Image src={mongoi} alt='/' width='64' height='64'/>
  </div>
  <div>
    <h3 className='flex flex-col items-center justify-center' >MongoDB</h3>
    </div>
    </div>
    </div>

    <div className='p-6 m-3 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
    <div className='grid grid-cols-2 gap-4 justify-center items-center' >
  <div className='m-auto' >
  <Image src={github1i} alt='/' width='64' height='64'/>
  </div>
  <div>
    <h3 className='flex flex-col items-center justify-center' >GitHub</h3>
    </div>
    </div>
    </div>

    <div className='p-6 m-3 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
    <div className='grid grid-cols-2 gap-4 justify-center items-center' >
  <div className='m-auto' >
  <Image src={expressi} alt='/' width='64' height='64'/>
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