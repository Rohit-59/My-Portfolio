/* eslint-disable react/no-unescaped-entities */
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import cont from '../public/assets/contact.jpg'
import {AiOutlineClose,AiOutlineMenu,AiOutlineMail} from 'react-icons/ai'
import {FaLinkedinIn,FaGithub,FaTwitter} from 'react-icons/fa'
import { HiOutlineChevronDoubleUp } from 'react-icons/hi';

const Contact = () => {
  return (
    <div id='contact' className='w-full lg:h-screen p-4 py-7' >
    <div className='max-w-7xl px-2 py-12 m-auto w-full' >
   
<p className=' text-xl font-semibold  tracking-widest text-[#5651e5] uppercase' >Contact</p>
<h2 className='py-4 '>Connect with me</h2>

<div className='grid lg:grid-cols-5 gap-8' >
{/* left side */}
<div className='col-span-3 lg:col-span-2 w-full h-full shadow-xl shadow-gray-400 rounded-xl p-4 ' >
<div className='lg:p-4 h-full'>
<div>
  <Image className='rounded-xl hover:scale-105 ease-in duration-300' src={cont} alt='cont' />
  </div>
<div>
<h2 className='py-4 uppercase font-semibold'>Rohit Raghuwanshi</h2>
<p className='uppercase font-medium'>Full-Stack Developer</p>
<p className='py-4 font-medium' >Contact me and let's talk</p>
</div>


<div>
  <p className='uppercase pt-7 font-medium' >Connect with Me</p>
  <div  className='flex items-center justify-between max-w-[330px] mx-auto py-4'>   
 

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

<Link href='/#contact'>
<div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300' >
<AiOutlineMail/>
</div>
</Link>

<Link href='https://twitter.com/roheeet5'>
<div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300' >
<FaTwitter/>
</div>
</Link>



</div>
</div>

  </div>
</div>
{/* right side */}
<div className='col-span-3 w-full h-auto shadow-xl shadow-gray-400 rounded-xl lg:p-4'>
            <div className='p-4'>
              <form
                action='https://getform.io/f/08ebcd37-f5b5-45be-8c13-714f011ce060'
                method='POST'
                encType='multipart/form-data'
              >
                <div className='grid md:grid-cols-2 gap-4 w-full py-2'>
                  <div className='flex flex-col'>
                    <label className='uppercase text-sm py-2'>Name</label>
                    <input
                      className='border-2 rounded-lg p-3 flex border-gray-300'
                      type='text'
                      name='name'
                    />
                  </div>
                  <div className='flex flex-col'>
                    <label className='uppercase text-sm py-2'>
                      Phone Number
                    </label>
                    <input
                      className='border-2 rounded-lg p-3 flex border-gray-300'
                      type='text'
                      name='phone'
                    />
                  </div>
                </div>
                <div className='flex flex-col py-2'>
                  <label className='uppercase text-sm py-2'>Email</label>
                  <input
                    className='border-2 rounded-lg p-3 flex border-gray-300'
                    type='email'
                    name='email'
                  />
                </div>
                <div className='flex flex-col py-2'>
                  <label className='uppercase text-sm py-2'>Subject</label>
                  <input
                    className='border-2 rounded-lg p-3 flex border-gray-300'
                    type='text'
                    name='subject'
                  />
                </div>
                <div className='flex flex-col py-2'>
                  <label className='uppercase text-sm py-2'>Message</label>
                  <textarea
                    className='border-2 rounded-lg p-3 border-gray-300'
                    rows='10'
                    name='message'
                  ></textarea>
                </div>
                <button className='w-full p-4 text-gray-100 mt-4'>
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
        <div className='flex justify-center py-12'>
          <Link href='/'>
        
              <div className='rounded-full shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-110 ease-in duration-300'>
                <HiOutlineChevronDoubleUp
                  className='text-[#5651e5]'
                  size={30}
                />
              </div>
            
          </Link>
        </div>
      </div>
    </div>

  )
}

export default Contact