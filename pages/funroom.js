/* eslint-disable react/no-unescaped-entities */
import Image from 'next/legacy/image';
import Head from 'next/head'
import React from 'react';
import web6 from '../public/assets/projects/web6.png';
import { RiRadioButtonFill } from 'react-icons/ri';
import Link from 'next/link';

const funroom = () => {
  return (
    <div>
    <Head>
        <title>Fun Chat Room</title>
        <meta name='description' content='generated by me'   />
        <link />
    </Head>

    
    <div className='w-full'>
      <div className='w-screen h-[50vh] relative'>
        <div className='absolute top-0 left-0 w-full h-[50vh] bg-black/70 z-10' />
        <Image
          className='absolute z-1'
          layout='fill'
          objectFit='cover'
          src={web6}
          alt='/'
        />
        <div className='absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2'>
          <h2 className='py-2'>Funroom</h2>
          <h3>React/ Nodejs/ Firebase Authentication and Firebase Cloudstore </h3>
        </div>
      </div>

      <div className='max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 py-8'>
        <div className='col-span-4'>
          <p className='text-lg font-semibold'>Project</p>
          <h2>Overview</h2>
          <p>
          Funroom is a real time chat room application built using ReactJs and Firebase. In this app, user can log in with their Google account using Firebase's Google sign-in Authentication. We will also store and retrieve all the chatroom messages using Firebase's Cloud Firestore.
          </p>
          <a
            href='https://github.com/Rohit-59/Funroom'
            target='_blank'
            rel='noreferrer'
          >
            <button className='px-8 py-2 mt-4 mr-8'>Code</button>
          </a>
          <a
            href='https://funroom.vercel.app/'
            target='_blank'
            rel='noreferrer'
          >
            <button className='px-8 py-2 mt-4'>Demo</button>
          </a>
        </div>
        <div className='col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl py-4'>
          <div className='p-5'>
            <p className='text-center font-bold pb-2'>Technologies</p>
            <div className='grid grid-cols-3 md:grid-cols-1'>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> Firebase
              </p>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> React
              </p>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> NodeJs
              </p>
            
          
          
            </div>
          </div>
        </div>
        <Link href='/#projects'>
          <p className='underline cursor-pointer'>Back</p>
        </Link>
      </div>
    </div>
    </div> 
  );
};

export default funroom;
