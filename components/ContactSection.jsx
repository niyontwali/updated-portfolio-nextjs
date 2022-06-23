/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import profileImage from "../public/assets/profileImage.jpg";
import { FiPhoneCall } from "react-icons/fi";
import { ImSpinner2 } from "react-icons/im";
import { AiOutlineMail } from "react-icons/ai";
import { useForm } from "react-hook-form";
import axios from "axios";
import toast from "react-hot-toast";

const ContactSection = () => {
  const {
    register,
    handleSubmit,
    formState,
    reset,
    formState: { errors },
  } = useForm();

  const { isSubmitting } = formState;

  const onSubmitForm = async (values) => {
    let config = {
      method: "post",
      url: "https://njohn.netlify.app/api/contact",
      headers: {
        "Content-Type": "application/json",
      },
      data: values,
    };
    try {
      const response = await axios(config);
      if (response.status === 200) {
        toast(`${response.data.message}`, {
          style: {
            border: "1px solid #0a91d5",
            position: "relative",
            background: "#0284c7",
            color: "white",
          },
        });
        reset({
          fullname: "",
          phone: "",
          email: "",
          subject: "",
          message: "",
        });
      }
    } catch (err) {
      console.error(err.message);
    }
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve();
      }, 2000);
    });
  };

  return (
    <div className="w-full lg:h-screen">
      <div className="m-auto px-4 sm:px-8 md:px-40  pt-16 w-full">
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
              <form onSubmit={handleSubmit(onSubmitForm)}>
                <div className="grid md:grid-cols-2 lg:gap-8 w-full py-2">
                  <div className="flex flex-col">
                    <label className="uppercase text-sm py-[5px]">Name</label>
                    <input
                      name="fullname"
                      {...register("fullname", { required: true })}
                      className="border-2 rounded-lg p-2 flex border-gray-300 dark:border-gray-700 dark:bg-transparent outline-none"
                      type="text"
                    />
                    <span className="text-red-600 px-1 text-sm">
                      {errors.fullname?.type === "required" &&
                        "Full names are required"}
                    </span>
                  </div>
                  <div className="flex flex-col">
                    <label className="uppercase text-sm py-[5px]">
                      Phone Number
                    </label>
                    <input
                      name="phone"
                      {...register("phone", { required: true })}
                      className="border-2 rounded-lg p-2 flex border-gray-300 dark:border-gray-700 dark:bg-transparent outline-none"
                      type="text"
                    />
                    <span className="text-red-600 px-1 text-sm">
                      {errors.phone?.type === "required" &&
                        "Phone number is required"}
                    </span>
                  </div>
                </div>
                <div className="flex flex-col">
                  <label className="uppercase text-sm pb-[5px]">Email</label>
                  <input
                    name="email"
                    {...register("email", {
                      required: true,
                    })}
                    className="border-2 rounded-lg p-2 flex border-gray-300 dark:border-gray-700 dark:bg-transparent outline-none"
                    type="email"
                  />
                  <span className="text-red-600 px-1 text-sm">
                    {errors.email?.type === "required" && "Email is required"}
                  </span>
                </div>
                <div className="flex flex-col">
                  <label className="uppercase text-sm py-[5px]">Subject</label>
                  <input
                    name="subject"
                    {...register("subject", {
                      required: true,
                    })}
                    className="border-2 rounded-lg p-2 flex border-gray-300 dark:border-gray-700 dark:bg-transparent outline-none"
                    type="text"
                  />
                  <span className="text-red-600 px-1 text-sm">
                    {errors.subject?.type === "required" &&
                      "Subject field is required"}
                  </span>
                </div>
                <div className="flex flex-col">
                  <label className="uppercase text-sm py-[5px]">Message</label>
                  <textarea
                    name="message"
                    {...register("message", { required: true })}
                    className="border-2 rounded-lg p-2 border-gray-300 dark:border-gray-700 dark:bg-transparent outline-none "
                    rows="4"
                    type="email"
                  ></textarea>
                  <span className="text-red-600 px-1 text-sm">
                    {errors.message?.type === "required" &&
                      "Message content is required"}
                  </span>
                </div>
                <div className="flex justify-center">
                  <button
                    disabled={isSubmitting}
                    className={`bg-[#0284c7] ${isSubmitting ? null : "hover:bg-[#0a91d5]"} dark:bg-[#045d8a] ${isSubmitting ? null : "dark:hover:bg-[#0679b3]"} rounded-xl text-lg font-[500] py-2 px-10 text-gray-100 mt-7 ${
                      isSubmitting ? "disabled:cursor-not-allowed" : null
                    }`}
                  >
                    {isSubmitting ? (
                      <span className="text-white px-4 py-[2px] flex justify-center items-center">
                        <ImSpinner2 size={25} className="animate-spin" />
                      </span>
                    ) : (
                      "Submit"
                    )}
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
