import Link from "next/link";
import Image from "next/image"
import styles from '../styles/avatar.module.css'
import avatar from '../public/assets/projects/avatar.webp'

const AvatarDropdown = ({ handleLogout }) => {
  return (
    <div className={styles.avatarDropdown}>
      <div className="flex justify-center">
        <Image width='100px' height='100px' src={avatar} alt="avatar"/>
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
            <button className='text-sm uppercase py-3 px-8 shadow-sm rounded-lg border-[1px] bg-[#0284c7] hover:bg-transparent hover:border-[1px] font-[500] hover:bg-[#a0c4d4] text-white hover:text-black'>Sign Up</button>
          </Link>
        </div>
        <div>
        <Link href="/login">
          <button className='text-sm uppercase py-3 px-8 shadow-sm rounded-lg hover:border-[1px] hover:bg-[#a0c4d4] border-[1px] font-[500] border-[#0284c7] hover:border-[#a0c4d4] hover:text-white text-black'>Login</button>
        </Link>
        </div>
      </div>
    </div>
  );
};


export default AvatarDropdown;
