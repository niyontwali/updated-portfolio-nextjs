import Image from "next/image";
import { useTheme } from "next-themes";
import { useState, useEffect } from "react";
import Link from "next/link";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { BsFillSunFill, BsFillMoonFill } from "react-icons/bs";
import avatar from "../public/assets/avatar.jpg";
import logo from "../public/assets/navLogo.jpg";
import darkThemelogo from "../public/assets/darkThemeLogo.jpg";
import AvatarDropdown from "../components/AvatarDropdown";

const Navbar = () => {
  // State for toggling the mobile menu component
  const [isOpen, setIsOpen] = useState(false);

  const [open, setOpen] = useState(false);

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
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
    <div className="fixed w-full h-[70px] shadow-xl bg-[#ecf0f3] dark:bg-[#2d333b] z-[100]">
      <div className="flex justify-between items-center h-full px-2 2xl:px-16">
        <div className="md:hidden">
          {theme !== "dark" ? (
            <Link href="/">
              <a>
                <Image
                  className="cursor-pointer"
                  src={logo}
                  alt="my logo"
                  width="80"
                  height="40"
                  priority
                />
              </a>
            </Link>
          ) : (
            <Link href="/">
              <a>
                <Image
                  className="cursor-pointer"
                  src={darkThemelogo}
                  alt="my logo"
                  width="70"
                  height="40"
                  priority
                />
              </a>
            </Link>
          )}
        </div>
        <div className="md:hidden absolute left-[48%] cursor-pointer flex justify-center">
          {renderThemeChanger()}
        </div>
        <div>
          <ul className="hidden md:flex md:items-center gap-10">
            <div className="mr-[20px]">
              {theme !== "dark" ? (
                <Link href="/">
                  <a>
                    <Image
                      className="cursor-pointer"
                      src={logo}
                      alt="my logo"
                      width="80"
                      height="40"
                      priority
                    />
                  </a>
                </Link>
              ) : (
                <Link href="/">
                  <a>
                    <Image
                      className="cursor-pointer"
                      src={darkThemelogo}
                      alt="my logo"
                      width="70"
                      height="40"
                      priority
                    />
                  </a>
                </Link>
              )}
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
            <div className="mr-10 cursor-pointer hover:bg-gray-300 dark:hover:bg-gray-900 p-[7px] rounded-full">
              {renderThemeChanger()}
            </div>
            <div className="flex items-center">
              <Image
                src={avatar}
                alt="my logo"
                width="40"
                height="40"
                priority
                className="rounded-full border-green-900 cursor-pointer"
                onClick={handleClick}
              />
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
              ? "fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#ecf0f3] dark:bg-gray-800 p-10 ease-in duration-300"
              : "fixed left-[-200%] p-10 top-0 ease-in duration-200"
          }
        >
          <div>
            <div className="flex w-full items-center justify-between">
              {theme !== "dark" ? (
                <Link href="/">
                  <a>
                    <Image
                      className="cursor-pointer"
                      src={logo}
                      alt="my logo"
                      width="65"
                      height="35"
                      priority
                    />
                  </a>
                </Link>
              ) : (
                <Link href="/">
                  <a>
                    <Image
                      className="cursor-pointer"
                      src={darkThemelogo}
                      alt="my logo"
                      width="55"
                      height="35"
                      priority
                    />
                  </a>
                </Link>
              )}
              <div
                onClick={handleOpen}
                className="rounded-xl shadow-md shadow-gray-300 dark:shadow-sm dark:shadow-gray-100 p-3 cursor-pointer"
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
          <AvatarDropdown />
        </div>
      )}
    </div>
  );
};

export default Navbar;
