/* eslint-disable react/no-unescaped-entities */
import React from 'react'
import {FaLinkedinIn, FaGithub, FaFacebook, FaInstagram, FaTwitter} from 'react-icons/fa'

const Main = () => {
  return (
    <div className='w-full h-screen pt-16 text-center'>
      <div className='max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center'>
        <div>
          <p className='uppercase text-sm tracking-widest text-gray-600 dark:text-gray-400'>Let's build the extraordinariness</p>
          <h1 className='py-4 text-gray-700 dark:text-gray-300'>Hi, I'm <span className='text-[#0284c7] border-b-2 border-b-transparent hover:cursor-pointer hover:border-b-[#0284c7]'>John</span></h1>
          <h1 className='py-4 text-gray-700 dark:text-gray-300'>A Full-stack web Developer</h1>
          <p className='text-gray-600 max-w-[70%] m-auto font-[500] dark:text-gray-400'>I'm a full-stack web and mobile developer specializing in building exceptional and scalable digital experiences. I use JavaScript Stack and its technologies like Node.js, Express, React, Next to develop full-stack web apps. I also use react native and flutter to develop mobile apps.</p>
          <div className='flex items-center justify-center space-x-2 sm:justify-between md:justify-between max-w-[350px] m-auto py-6'>
            <div className='rounded-full shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-110 ease-in duration-300'>
              <a href="https://github.com/niyontwali" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
            </div>
            <div className='rounded-full shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-110 ease-in duration-300'>
              <a href="https://www.linkedin.com/in/john-niyontwali-816549111/" target="_blank" rel="noopener noreferrer"><FaLinkedinIn /></a>
            </div>
            <div className='rounded-full shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-110 ease-in duration-300'>
              <a href="https://twitter.com/JohnNiyontwali" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
            </div>
            <div className='rounded-full shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-110 ease-in duration-300'>
              <a href="https://web.facebook.com/niyontwali.john/" target="_blank" rel="noopener noreferrer"><FaFacebook /></a>
            </div>
            <div className='rounded-full shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-110 ease-in duration-300'>
              <a href="https://www.instagram.com/n.john01/" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Main