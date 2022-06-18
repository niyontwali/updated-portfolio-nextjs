import Link from "next/link";
import Image from "next/image";
import { signOut } from "next-auth/react";

const AvatarDropdown = ({ src, alt }) => {
  return (
    <div className="absolute top-[70px] -right-[-70px] w-[300px] bg-[#e5ebee] dark:bg-[#2d333b] border-[1px] border-[#e5ebee] dark:border-gray-900 text-black dark:text-[#ccc] text-[19px] p-[1rem] rounded-[8px] overflow-hidden shadow-md shadow-[#bdd4df] dark:shadow-gray-800">
      <div className="flex justify-center">
        <Image
          className="rounded-full"
          width="100px"
          height="100px"
          src={src}
          alt={alt}
          priority
        />
      </div>
      <div className="text-center my-4">
        <h3>Hope to see u back soon</h3>
      </div>
      <div className="flex justify-center my-8">
        <a
          className="text-sm uppercase py-3 px-8 shadow-sm rounded-lg hover:border-[1px] hover:bg-[#0284c7] border-[1px] font-[500] border-[#0284c7] hover:border-[#0284c7] hover:text-white text-black dark:text-white cursor-pointer focus:outline-none focus:ring-4 focus:ring-blue-600 focus:ring-opacity-50 whitespace-nowrap"
          onClick={() => signOut()}
        >
          LOGOUT
        </a>
      </div>
    </div>
  );
};

export default AvatarDropdown;
