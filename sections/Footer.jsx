import {FaLinkedinIn, FaGithub, FaFacebook, FaInstagram, FaTwitter} from 'react-icons/fa'
import Link from "next/link";

const Footer = () => {
  return (
    <>
      <footer className="mt-4 bg-[#e5eaee] dark:bg-[#282d32] border-t-2 border-gray-300 dark:border-t-2 dark:border-[#353c46]">
        <div className="flex flex-col-reverse justify-between lg:px-20 py-4 mx-auto space-y-2 md:flex-row md:space-y-0">
          {/* Social media icons */}
          <div className="flex flex-col-reverse items-center justify-between space-y-8 md:flex-col md:space-y-0 md:items-start">
            {/* copyright to show up on small devices */}
            <div className="mx-auto my-6 text-center text-gray-900 dark:text-gray-300 md:hidden">
              John. N &copy; 2022 All rights Reserved
            </div>
            {/* social media icons */}
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
          {/* list container */}
          <div className="">
          <p className="font-bold text-lg text-center pb-6 text-gray-900 dark:text-gray-300">Userful links</p>
            <div className="flex space-x-6 text-gray-900 font-[500] dark:text-gray-300 justify-center">
              <Link href="/skills"><p className="border-b-2 border-b-transparent hover:border-b-[#0284c7] hover:text-[#0284c7] cursor-pointer">Skills</p></Link>
              <Link href="/projects"><p className="border-b-2 border-b-transparent hover:border-b-[#0284c7] hover:text-[#0284c7] cursor-pointer">Projects</p></Link>
              <Link href="/blog"><p className="border-b-2 border-b-transparent hover:border-b-[#0284c7] hover:text-[#0284c7] cursor-pointer">Blog</p></Link>
            </div>
          </div>
          {/* input container */}
          <div className="flex flex-col justify-between">
            <div className="hidden text-gray-900 dark:text-gray-300 font-[500] md:block pt-6">
              John. N &copy; 2022 All rights Reserved
              <p>Tel No: +250 781 161 254</p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
