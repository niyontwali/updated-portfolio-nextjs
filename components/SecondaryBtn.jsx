import Link from 'next/link'

const SecondaryBtn = ({href}) => {
  return (
    <div>
      <Link href={href}>
        <a  className="relative inline-flex items-center px-10 py-2 overflow-hidden text-lg font-medium text-[#285b75] dark:text-gray-300 outline outline-offset-0 outline-[#285b75] dark:outline-gray-300 border-[#285b75] rounded-full hover:text-white dark:hover:text-black group">
          <span className="absolute left-0 block w-full h-0 transition-all bg-[#285b75] dark:bg-gray-300 group-hover:h-full group-hover:top-0 duration-400 ease"></span>
          <span className="absolute right-0 flex items-center justify-center w-10 h-10 duration-300 transform translate-x-full group-hover:translate-x-0 ease">
          <svg className="w-5 h-5 pt-[4px]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
          </span>
          <span className="relative">Continue reading</span>
        </a>
      </Link>
    </div>
  )
}

export default SecondaryBtn