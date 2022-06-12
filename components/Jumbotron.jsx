import Link from 'next/link';
import SecondaryBtn from './SecondaryBtn';
import { BsGithub } from 'react-icons/bs';


const Jumbotron = () => {
  return (
    <div className="-mt-10 mb-20 px-4">
      <div className="bg-[#e5ebee] dark:bg-[#2d333b] max-w-[700px] mx-auto text-center rounded-3xl py-10 shadow-xl dark:shadow-lg shadow-gray-300 hover:shadow-gray-400 dark:shadow-gray-700">
        <h1 className='text-2xl font-semibold text-gray-800 dark:text-gray-300 tracking-wider'>For more project especially backend <br/>related projects, please visit</h1>
        <Link href="https://github.com/niyontwali?tab=repositories" passHref>
          <a target="_blank" rel="noopener noreferrer">
            <div className='flex-col justify-center mt-6 cursor-pointer hover:scale-125 ease-in-out duration-300 w-fit mx-auto'>
              <BsGithub className='mx-auto text-[#285b75] dark:text-[#7cc2e5]' size={30}/>
              <p className='text-[#285b75] dark:text-[#7cc2e5] font-bold'>my GitHub</p>
            </div>
          </a>
        </Link>
      </div>
    </div>
  )
}

export default Jumbotron