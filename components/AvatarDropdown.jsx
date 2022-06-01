import Link from "next/link";
import Image from "next/image"
import avatar from '../public/assets/projects/avatar.webp'

const AvatarDropdown = ({ handleLogout }) => {
  return (
    <div className="absolute top-[70px] -right-[-70px] w-[300px] bg-[#e5ebee] dark:bg-gray-800 border-[1px] border-[#e5ebee] dark:border-gray-900 text-black dark:text-[#ccc] text-[19px] p-[1rem] rounded-[8px] overflow-hidden shadow-md shadow-[#bdd4df] dark:shadow-gray-800">
      <div className="flex justify-center">
        <Image width='100px' height='100px' priority src={avatar} alt="avatar"/>
      </div>
      <div className="text-center my-4">
        <h3>Sign up or log in to your Account</h3>
      </div>
      <div className="text-center">
        <p>Takes less than a few seconds</p>
      </div>
      <div className="flex justify-between px-3 my-8">
        <div>
          <Link href="/signup">
            <button className='text-sm uppercase py-3 px-8 shadow-sm rounded-lg border-[1px] bg-[#0284c7] border-transparent hover:bg-transparent hover:border-[1px] font-[500] hover:bg-[#a0c4d4] text-white hover:text-black'>Sign Up</button>
          </Link>
        </div>
        <div>
        <Link href="/login">
          <button className='text-sm uppercase py-3 px-8 shadow-sm rounded-lg hover:border-[1px] hover:bg-[#a0c4d4] border-[1px] font-[500] border-[#0284c7] hover:border-[#a0c4d4] hover:text-white text-black dark:text-white'>Login</button>
        </Link>
        </div>
      </div>
    </div>
  );
};


export default AvatarDropdown;
