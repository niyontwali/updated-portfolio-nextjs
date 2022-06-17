import Link from "next/link";
import Image from "next/image";
import avatar from "../public/assets/avatar.jpg";

const AvatarDropdown = () => {
  return (
    <div className="absolute top-[70px] -right-[-70px] w-[300px] bg-[#e5ebee] dark:bg-[#2d333b] border-[1px] border-[#e5ebee] dark:border-gray-900 text-black dark:text-[#ccc] text-[19px] p-[1rem] rounded-[8px] overflow-hidden shadow-md shadow-[#bdd4df] dark:shadow-gray-800">
      <div className="flex justify-center">
        <Image
          className="rounded-full"
          width="100px"
          height="100px"
          src={avatar}
          alt="avatar"
          priority
        />
      </div>
      <div className="text-center my-4">
        <h3>Only for authorized personnel</h3>
      </div>
      <div className="flex justify-center my-8">
        <Link href="/login">
          <a className="text-sm uppercase py-3 px-8 shadow-sm rounded-lg hover:border-[1px] hover:bg-[#0284c7] border-[1px] font-[500] border-[#0284c7] hover:border-[#0284c7] hover:text-white text-black dark:text-white">
            Login
          </a>
        </Link>
      </div>
    </div>
  );
};

export default AvatarDropdown;
