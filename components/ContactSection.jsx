/* eslint-disable react/no-unescaped-entities */
import Image from 'next/image'
import profileImage from '../public/assets/profileImage.jpg'
import {FaLinkedinIn, FaGithub, FaFacebook, FaInstagram, FaTwitter} from 'react-icons/fa'

const ContactSection = () => {

  return (
    <div className="w-full lg:h-screen">
      <div className="mx-w-[1240px] m-auto px-4 sm:px-8 md:px-16  pt-16 w-full" >
        <div className="grid lg:grid-cols-6 gap-10 pt-3">
          {/* Left */}
          <div className="col-span-3 lg:col-span-2 w-full h-full shadow-md shadow-gray-300 dark:shadow-gray-800 rounded-xl  px-4 py-4 sm:py-2 md:py-0">
            <div className="lg:p-4 h-full">
              <div className='rounded-2xl overflow-hidden'>
               <Image src={profileImage} placeholder='blur' loading='eager' alt='Profile image' className='hover:scale-105 ease-in duration-300' />
              </div>
              <div>
                <h2 className='py-2 font-[500]'>John Niyontwali</h2>
                <p className='-mt-[5px]'>Full-Stack Developer</p>
                <p className='py-2'>Contact me on +250781161254 or nijohn0006@gmail.com. We can also connect via my social media</p>
              </div>
            <div>
              <p className='uppercase pt-4 text-[#0284c7] font-bold'>Connect with me </p>
              <div className='flex items-center justify-between py-4'>
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
          {/* Right */}
          <div className='col-span-3 lg:col-span-4 w-full h-auto shadow-md dark:shadow-gray-800 shadow-gray-300 rounded-xl lg:px-14'>
            <div className='p-4'>
              <form>
                <div className='grid md:grid-cols-2 gap-8 w-full py-2'>
                  <div className='flex flex-col'>
                    <label className='uppercase text-sm py-[5px]'>Name</label>
                    <input 
                      className='border-2 rounded-lg p-2 flex border-gray-300 dark:border-gray-700 dark:bg-transparent outline-none' 
                      type="text" />
                  </div>
                  <div className='flex flex-col'>
                    <label className='uppercase text-sm py-[5px]'>Phone Number</label>
                    <input 
                      className='border-2 rounded-lg p-2 flex border-gray-300 dark:border-gray-700 dark:bg-transparent outline-none' 
                      type="text" />
                  </div>
                </div>
                <div className='flex flex-col'>
                  <label className='uppercase text-sm py-[5px]'>Email</label>
                  <input 
                    className='border-2 rounded-lg p-2 flex border-gray-300 dark:border-gray-700 dark:bg-transparent outline-none' 
                    type="email" />
                </div>
                <div className='flex flex-col'>
                  <label className='uppercase text-sm py-[5px]'>Subject</label>
                  <input 
                    className='border-2 rounded-lg p-2 flex border-gray-300 dark:border-gray-700 dark:bg-transparent outline-none' 
                    type="text" />
                </div>
                <div className='flex flex-col'>
                  <label className='uppercase text-sm py-[5px]'>Message</label>
                  <textarea 
                    className='border-2 rounded-lg p-2 border-gray-300 dark:border-gray-700 dark:bg-transparent outline-none'
                    rows='9' 
                    type="email">
                  </textarea>
                </div>
                <button className='bg-[#0284c7] dark:bg-[#023c58] rounded-xl text-lg font-[500] w-full p-2 text-gray-100 mt-7'>Send Message</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContactSection