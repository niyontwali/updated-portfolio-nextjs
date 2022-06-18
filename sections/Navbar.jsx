import Image from "next/image";
import { useTheme } from "next-themes";
import { useState, useEffect } from "react";
import Link from "next/link";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { SiBookstack } from "react-icons/si";
import {
  BsFillSunFill,
  BsFillMoonFill,
  BsFillBookmarkStarFill,
  BsBook,
} from "react-icons/bs";
import { useSession, signIn, signOut } from "next-auth/react";

import AvatarDropdown from "../components/AvatarDropdown";
import Tooltip from "../components/Tooltip";
import Logo from "../components/Logo";

const Navbar = () => {
  // State for toggling the mobile menu component
  const [isOpen, setIsOpen] = useState(false);

  const [open, setOpen] = useState(false);

  const [mounted, setMounted] = useState(false);

  const [shadow, setShadow] = useState(false);

  const { data: session } = useSession();

  useEffect(() => {
    const handleShadow = () => {
      if (window.scrollY >= 50) {
        setShadow(true);
      } else {
        setShadow(false);
      }
    };
    window.addEventListener("scroll", handleShadow);
    setMounted(true);
  }, []);

  const { systemTheme, theme, setTheme } = useTheme();

  const renderThemeChanger = () => {
    if (!mounted) return null;
    const currentTheme = theme === "system" ? systemTheme : theme;

    if (currentTheme === "dark") {
      return <BsFillSunFill size={24} onClick={() => setTheme("light")} />;
    } else {
      return <BsFillMoonFill size={24} onClick={() => setTheme("dark")} />;
    }
  };

  /**
   * @desc handles the open and close of
   * the mobile menu component
   */
  const handleOpen = () => {
    setIsOpen(!isOpen);
  };

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <div
      className={
        shadow
          ? "fixed w-full h-[70px] shadow-xl bg-[#f3f6f8] dark:bg-[#2d333b] z-[100]"
          : "fixed w-full h-[70px] shadow-md bg-[#f3f6f8] dark:bg-[#2d333b] z-[100]"
      }
    >
      <div className="flex justify-between items-center h-full px-2 2xl:px-16">
        <div className="md:hidden">
         <Logo />
        </div>
        <div className="md:hidden absolute left-[48%] cursor-pointer flex justify-center">
          {renderThemeChanger()}
        </div>
        <div>
          <ul className="hidden md:flex md:items-center gap-8">
            <div className="mr-[20px]">
              <Logo />
            </div>
            <Link href="/">
              <li className="text-sm uppercase font-[500] border-b-2 border-b-transparent hover:border-b-[#0284c7] hover:text-[#0284c7]">
                Home
              </li>
            </Link>
            <Link href="/skills">
              <li className="text-sm uppercase font-[500] border-b-2 border-b-transparent hover:border-b-[#0284c7] hover:text-[#0284c7]">
                Skills
              </li>
            </Link>
            <Link href="/projects">
              <li className="text-sm uppercase font-[500] border-b-2 border-b-transparent hover:border-b-[#0284c7] hover:text-[#0284c7]">
                Projects
              </li>
            </Link>
            <Link href="/blog">
              <li className="text-sm uppercase font-[500] border-b-2 border-b-transparent hover:border-b-[#0284c7] hover:text-[#0284c7]">
                Blog
              </li>
            </Link>
            <Link href="/contact">
              <li className="text-sm uppercase font-[500] border-b-2 border-b-transparent hover:border-b-[#0284c7] hover:text-[#0284c7]">
                Contact
              </li>
            </Link>
          </ul>
        </div>
        <div>
          <ul className="hidden md:flex md:items-center">
            <div className="mr-4 cursor-pointer hover:bg-gray-300 dark:hover:bg-gray-900 p-[7px] rounded-full">
              {renderThemeChanger()}
            </div>
            <div className="text-sm font-[500] cursor-pointer  mr-4 group">
              <Link href="/myLearnings">
                <SiBookstack className="hover:text-[#0284c7]" size={27} />
              </Link>
              <Tooltip title="My Learning Store" />
            </div>
            <div className="text-sm font-[500] cursor-pointer  mr-10 group">
              <Link href="/bookmarks">
                <BsFillBookmarkStarFill
                  className="hover:text-[#0284c7]"
                  size={27}
                />
              </Link>
              <Tooltip title="My Bookmarks" />
            </div>
            <div className="flex items-center">
              <div>
                {!session ? (
                  <button
                    type="button"
                    onClick={() => signIn()}
                    className="text-sm uppercase py-2 px-8 shadow-sm rounded-lg hover:border-[3px] hover:bg-[#0284c7] border-[3px] font-[500] border-[#0284c7] hover:border-[#0284c7] hover:text-white text-black dark:text-white focus:outline-none focus:ring-4 focus:ring-blue-600 focus:ring-opacity-50 whitespace-nowrap"
                  >
                    login
                  </button>
                ) : (
                  <div className="flex items-center space-x-1 sm:space-x-2">
                    <Image
                      src={session.user.image}
                      alt={session.user.name}
                      className="rounded-full border-2 border-blue-500 cursor-pointer"
                      width="40"
                      height="40"
                      onClick={handleClick}
                    />
                    <p>Hi, {session.user.name?.split(" ")?.[1] ?? "Admin"}</p>
                  </div>
                )}
              </div>
            </div>
          </ul>
          <div onClick={handleOpen} className="md:hidden">
            <AiOutlineMenu size={25} />
          </div>
        </div>
      </div>
      <div
        className={
          isOpen
            ? "md:hidden fixed left-0 top-0 w-full h-screen bg-black/50 dark:bg-white/60"
            : ""
        }
      >
        <div
          className={
            isOpen
              ? "fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#ecf0f3] dark:bg-[#2d333b] p-10 ease-in duration-300"
              : "fixed left-[-200%] p-10 top-0"
          }
        >
          <div>
            <div className="flex w-full items-center justify-between">
              <Logo />
              <div
                onClick={handleOpen}
                className="rounded-xl shadow-md shadow-gray-300 dark:shadow-sm dark:shadow-gray-100 p-2 cursor-pointer"
              >
                <AiOutlineClose size={25} />
              </div>
            </div>
            <div className="border-b border-[#0284c7] my-4">
              <p className="w-[85%] md:w-[90%] py-4 font-[500]">
                We can work together to build something incredible
              </p>
            </div>
          </div>
          <div className="py-4 flex-col">
            <ul className="uppercase">
              <Link href="/">
                <li className="py-4 text-sm font-[500]">Home</li>
              </Link>
              <Link href="/skills">
                <li className="py-4 text-sm font-[500]">Skills</li>
              </Link>
              <Link href="/projects">
                <li className="py-4 text-sm font-[500]">Projects</li>
              </Link>
              <Link href="/blog">
                <li className="py-4 text-sm font-[500]">Blog</li>
              </Link>
              <Link href="/contact">
                <li className="py-4 text-sm font-[500]">Contact</li>
              </Link>
            </ul>
          </div>
        </div>
      </div>
      {open && (
        <div className="">
          <AvatarDropdown src={session.user.image} alt={session.user.name} />
        </div>
      )}
    </div>
  );
};

export default Navbar;
