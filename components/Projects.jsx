/* eslint-disable react/no-unescaped-entities */
import React from 'react'
import Image from 'next/image'
import Head from 'next/head'
import web1 from '../public/assets/projects/web1.png'
import web2 from '../public/assets/projects/web2.png'
import web3 from '../public/assets/projects/web3.png'
import web4 from '../public/assets/projects/web4.png'
import web5 from '../public/assets/projects/web5.png'
import web6 from '../public/assets/projects/web6.png'
import web7 from '../public/assets/projects/web7.png'
import web8 from '../public/assets/projects/web8.png'
import Link from 'next/link'
import ProjectItem from './ProjectItem'

const Projects = () => {
   
  return (

  

 

    <div className='w-full' >


    <div id='projects' className='max-w-7xl mx-auto px-2 py-16'>
<p className='font-semibold text-xl tracking-widest text-[#5651e5] uppercase' >Projects</p>
<h2 className='py-5' >What I've Built</h2>
<div className='grid md:grid-cols-2 gap-8 ' >

<ProjectItem
            title='AI-Image Generator'
            backgroundImg={web6}
            projectUrl='/aiimage'
            tech='MERN Stack'

          />
          <ProjectItem
            title='FunRoom'
            backgroundImg={web8}
            projectUrl='/funroom'
            tech='React,Firebase'

          />
              <ProjectItem
            title='Codex'
            backgroundImg={web7}
            projectUrl='/codex'
            tech='OpenAI API, Javascript'

          />
                  <ProjectItem
            title='Newsletter SignUp'
            backgroundImg={web5}
            projectUrl='/news'
            tech='Bootstrap'

          />

{/* 
<ProjectItem
            title='Dice Game'
            backgroundImg={web1}
            projectUrl='/dice'
            tech='Javascript'
          /> */}
          <ProjectItem
            title='Drum Kit'
            backgroundImg={web2}
            projectUrl='/drum'
            tech='HTML, CSS, Javascript'

          />
          <ProjectItem
            title='Simon Game Online'
            backgroundImg={web3}
            projectUrl='/simon'
            tech='HTML, CSS, Javascript'

          />
          {/* <ProjectItem
            title='ToDo-List'
            backgroundImg={web4}
            projectUrl='/todo'
            tech='React JS'

          /> */}
        
        



 




     </div>
    </div>
  </div>

  
  )
}

export default Projects