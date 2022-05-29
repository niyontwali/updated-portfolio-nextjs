import Image from 'next/image'
import {useState} from 'react'
import Link from 'next/link'
import {AiOutlineClose, AiOutlineMenu} from 'react-icons/ai'
import { BsFillSunFill, BsFillMoonFill } from "react-icons/bs";
import avatar from '../public/assets/projects/avatar.webp'
import logo from '../public/assets/navLogo.jpg'
import AvatarDropdown from './AvatarDropdown'

const Navbar = () => {
  // State for toggling the mobile menu component
  const [isOpen, setIsOpen] = useState(false);

  const [open, setOpen] = useState(false);

  /**
 * @desc handles the open and close of
 * the mobile menu component
 */
  const handleOpen = () => {
    setIsOpen(!isOpen)
  }

  const handleClick = () => {
    setOpen(!open);
  };
  
  return (
    <div className='fixed w-full h-[70px] shadow-xl z-[100]'>
      <div className='flex justify-between items-center w-full h-full px-2 2xl:px-16'>
        <Image src={logo} alt="my logo" width='80' height='40'  />
        <div>
          <ul className='hidden md:flex md:items-center'>
            <Link href="/">
              <li className='ml-10 text-sm uppercase font-[500] border-b-2 border-b-transparent hover:border-b-[#0284c7] hover:text-[#0284c7]'>Home</li>
            </Link>
            <Link href="/">
              <li className='ml-10 text-sm uppercase font-[500] border-b-2 border-b-transparent hover:border-b-[#0284c7] hover:text-[#0284c7]'>Skills</li>
            </Link>
            <Link href="/">
              <li className='ml-10 text-sm uppercase font-[500] border-b-2 border-b-transparent hover:border-b-[#0284c7] hover:text-[#0284c7]'>Projects</li>
            </Link>
            <Link href="/">
              <li className='ml-10 text-sm uppercase font-[500] border-b-2 border-b-transparent hover:border-b-[#0284c7] hover:text-[#0284c7]'>Blog</li>
            </Link>
            <Link href="/">
              <li className='ml-10 mr-10 text-sm uppercase font-[500] border-b-2 border-b-transparent hover:border-b-[#0284c7] hover:text-[#0284c7]'>Contact</li>
            </Link>
            <div className='mr-10 cursor-pointer hover:bg-gray-300 p-[7px] rounded-full'>
              <BsFillSunFill size={24} />
            </div>
            <Link href="/">
              <Image src={avatar} alt="my logo" width='40' height='40' className='cursor-pointer' onClick={handleClick} />
            </Link>
          </ul>
          <div onClick={handleOpen} className='md:hidden'>
            <AiOutlineMenu size={25} />
          </div>
        </div>
      </div>
      <div className={isOpen ? 'md:hidden fixed left-0 top-0 w-full h-screen bg-black/50' : ''}>
        <div className={isOpen 
          ? 'fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#ecf0f3] p-10 ease-in duration-300'
          : 'fixed left-[-200%] p-10 top-0 ease-in duration-200'}>
          <div>
            <div className='flex w-full items-center justify-between'>
            <Image src={logo} alt="my logo" width='65' height='35'  />
            <div onClick={handleOpen} className='rounded-xl shadow-md shadow-gray-300 p-3 cursor-pointer'>
              <AiOutlineClose size={25} />
            </div>
            </div>
            <div className='border-b border-[#0284c7] my-4'>
              <p className='w-[85%] md:w-[90%] py-4 font-[500]'>We can work together to build something incredible</p>
            </div>
          </div>
          <div className='py-4 flex-col'>
            <ul className='uppercase'>
              <Link href="/">
              <li className='py-4 text-sm font-[500]'>Home</li>
              </Link>
              <Link href="/">
              <li className='py-4 text-sm font-[500]'>Skills</li>
              </Link>
              <Link href="/">
              <li className='py-4 text-sm font-[500]'>Projects</li>
              </Link>
              <Link href="/">
              <li className='py-4 text-sm font-[500]'>Blog</li>
              </Link>
              <Link href="/">
              <li className='py-4 text-sm font-[500]'>Contact</li>
              </Link>
            </ul>
          </div>
        </div>
      </div>
      {open && (
        <div className="">
          <AvatarDropdown />
        </div>
      )}
    </div>
  )
}

export default Navbar