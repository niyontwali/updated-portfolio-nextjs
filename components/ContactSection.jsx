/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import profileImage from "../public/assets/profileImage.jpg";
import { FiPhoneCall } from "react-icons/fi";
import { AiOutlineMail } from "react-icons/ai";

const ContactSection = () => {
  return (
    <div className="w-full lg:h-screen">
      <div className="mx-w-[1240px] m-auto px-4 sm:px-8 md:px-40  pt-16 w-full">
        <div className="grid lg:grid-cols-6 gap-8 pt-3">
          {/* Left */}
          <div className="col-span-3 lg:col-span-3 max-w-[400px] mx-auto lg:mx-0 mt-4 lg:mt-16 h-fit shadow-md shadow-gray-300 dark:shadow-gray-800 rounded-xl  px-4 py-4 sm:py-2 md:py-0">
            <div className="lg:p-4">
              <div className="rounded-2xl overflow-hidden">
                <Image
                  src={profileImage}
                  placeholder="blur"
                  alt="Profile image"
                  className="hover:scale-105 ease-in duration-300"
                  priority
                />
              </div>
              <div>
                <h2 className="py-2 font-[500]">John Niyontwali</h2>
                <p className="-mt-[5px]">Full-Stack Developer</p>
                <div className="mt-6">
                  <div className="flex items-center gap-2">
                    <FiPhoneCall size={20} color="#0284c7" className="mt-1" />
                    <p>+250 781 161 254</p>
                  </div>
                  <div className="mt-2 flex gap-3">
                    <AiOutlineMail size={20} color="#0284c7" className="mt-1" />
                    <p>nijohn0006@gmail.com</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Right */}
          <div className="col-span-3 lg:col-span-3 w-full h-auto shadow-md dark:shadow-gray-800 shadow-gray-300 rounded-xl lg:px-10 lg:mt-14">
            <div className="p-4">
              <form>
                <div className="grid md:grid-cols-2 lg:gap-8 w-full py-2">
                  <div className="flex flex-col">
                    <label className="uppercase text-sm py-[5px]">Name</label>
                    <input
                      className="border-2 rounded-lg p-2 flex border-gray-300 dark:border-gray-700 dark:bg-transparent outline-none"
                      type="text"
                    />
                  </div>
                  <div className="flex flex-col">
                    <label className="uppercase text-sm py-[5px]">
                      Phone Number
                    </label>
                    <input
                      className="border-2 rounded-lg p-2 flex border-gray-300 dark:border-gray-700 dark:bg-transparent outline-none"
                      type="text"
                    />
                  </div>
                </div>
                <div className="flex flex-col">
                  <label className="uppercase text-sm pb-[5px]">Email</label>
                  <input
                    className="border-2 rounded-lg p-2 flex border-gray-300 dark:border-gray-700 dark:bg-transparent outline-none"
                    type="email"
                  />
                </div>
                <div className="flex flex-col">
                  <label className="uppercase text-sm py-[5px]">Subject</label>
                  <input
                    className="border-2 rounded-lg p-2 flex border-gray-300 dark:border-gray-700 dark:bg-transparent outline-none"
                    type="text"
                  />
                </div>
                <div className="flex flex-col">
                  <label className="uppercase text-sm py-[5px]">Message</label>
                  <textarea
                    className="border-2 rounded-lg p-2 border-gray-300 dark:border-gray-700 dark:bg-transparent outline-none"
                    rows="4"
                    type="email"
                  ></textarea>
                </div>
                <div className="flex justify-center">
                  <button className="bg-[#0284c7] hover:bg-[#0a91d5] dark:bg-[#045d8a] dark:hover:bg-[#0679b3] rounded-xl text-lg font-[500] py-2 px-6 text-gray-100 mt-7">
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
