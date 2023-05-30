/* eslint-disable react/no-unescaped-entities */
import React,{useState,useEffect} from 'react'
import Image from 'next/image' 
import { useRouter } from 'next/router'
import {AiOutlineClose,AiOutlineMenu,AiOutlineMail} from 'react-icons/ai'
import Link from 'next/link'
import {FaLinkedinIn,FaGithub,FaTwitter} from 'react-icons/fa'

const Navbar = () => {

const [nav,setNav] = useState(false);
const [shadow,setShad] = useState(false);
const [navBg, setNavBg] = useState('#ecf0f3');
const [linkColor, setLinkColor] = useState('#1f2937');
const [position, setPosition] = useState('fixed')
const router = useRouter();

useEffect(() => {
  if (
    router.asPath === '/dice' ||
    router.asPath === '/drum' ||
    router.asPath === '/simon' ||
    router.asPath === '/todo'||
    router.asPath === '/news'
  ) {
    setNavBg('transparent');
    setLinkColor('#ecf0f3');
  } else {
    setNavBg('#ecf0f3');
    setLinkColor('#1f2937');
  }
}, [router]);




const handleNav = ()=>{
  setNav(!nav);
}
useEffect (  ()=>{
  const handleShadow = ()=>{
if(window.scrollY>=90){ 
  setShad(true)
}else{ 
  setShad(false)
}
  }
  window.addEventListener('scroll',handleShadow)
},[]);

  return (
    <div  style={{ backgroundColor: `${navBg}` }} className={ shadow? 'fixed w-full h-20 shadow-xl z-[100] bg-[#ecf0f3]': 'fixed w-full h-20  z-[100]' } >
    <div className='flex justify-between items-center w-full h-full px-2 2xl:px-16' >

    <Link href='/'>
    <Image src='/../public/assets/navLogo.png' alt='/' width = "125" height='50'  />

    </Link>

     <div>
    <ul style={{ color: `${linkColor}` }} className=' hidden md:flex pr-4' >
    <Link href='/'>
      <li    className='ml-10 text-sm uppercase hover:border-b' >Home</li>
    </Link>
    <Link href='/#about'>
      <li   className='ml-10 text-sm uppercase hover:border-b' >About</li>
    </Link>
    <Link href='/#skills'>
      <li   className='ml-10 text-sm uppercase hover:border-b' >Skills</li>
    </Link>
    <Link href='/#projects'>
      <li   className='ml-10 text-sm uppercase hover:border-b' >Projects</li>
    </Link>
    <Link href='/#contact'>
      <li   className='ml-10 text-sm uppercase hover:border-b' >Contact</li>
    </Link>

    

    </ul>
    <div onClick={handleNav} className='cursor-pointer pr-3 md:hidden' >
  <AiOutlineMenu size={25}/>
      </div> 

   </div>
 </div>


<div className={!nav?' md:hidden fixed left-0 top-0 w-full h-screen bg-black/70': ""}>

<div className= {!nav?'md:hidden fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#ecf0f3] px-9 py-6 ease-in duration-500': "fixed top-0  px-9 py-6 ease-in duration-500 left-[-100%]"} >
<div> 
  <div className='flex w-full items-center justify-between' >
  <Image src='/../public/assets/navLogo.png' alt='/' width = "87" height='35'  />
  <div onClick={handleNav} className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer' >
  <AiOutlineClose />
  </div>
  </div>

<div className=' border-b border-gray-300 my-3 '>

  <p className='w-[85%] md:w-[90%] py-2 font-medium ' >Let's make something great together</p>
</div>
</div>

<div className=' py-4 flex flex-col'>
<ul className='' >
    <Link href='/'>
      <li  onClick={()=>setNav(true)}   className='py-4 text-sm uppercase hover:border-b' >Home</li>
    </Link>
    <Link href='/#about'>
      <li  onClick={()=>setNav(true)}   className='py-4 text-sm uppercase hover:border-b' >About</li>
    </Link>
    <Link href='/#skills'>
      <li  onClick={()=>setNav(true)}   className='py-4 text-sm uppercase hover:border-b' >Skills</li>
    </Link>
    <Link href='/#projects'>
      <li   onClick={()=>setNav(true)}  className='py-4 text-sm uppercase hover:border-b' >Projects</li>
    </Link>
    <Link href='/#contact'>
      <li  onClick={()=>setNav(true)}   className='py-4 text-sm uppercase hover:border-b' >Contact</li>
    </Link>

    </ul>

<div className='py-12' >
  <p className='uppercase tracking-widest text-[#5651e5]' >Connect with me</p>
<div className='flex justify-between w-full my-4 sm:w-[80%]' >

<Link href='https://www.linkedin.com/in/rohit-raghuwanshi-487922223/' >
<div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300' >
<FaLinkedinIn/>
</div>
</Link>

<Link href='https://github.com/Rohit-59' >
<div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300' >
<FaGithub/>
</div>

</Link>

<Link href='/#contact' >
<div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300' >
<AiOutlineMail/>
</div>
</Link>

<Link href='https://twitter.com/roheeet5' >
<div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300' >
<FaTwitter/>
</div>

</Link>




</div>

</div>






</div>


</div>
</div>
    </div>
  )
}

export default Navbar