/* eslint-disable react/no-unescaped-entities */
import Head from "next/head";
import Link from "next/link";
import { HiOutlineEmojiSad } from "react-icons/hi";

const NotFound = () => {
  return (
    <div>
      <Head>
        <title>John | Page Not Found</title>
        <meta name="description" content="404- Page not found" />
        <link rel="icon" href="/titleLogo.jpg" />
      </Head>
      <div className="container mx-auto py-40 h-full flex flex-col justify-center items-center space-y-12">
        <div className="text-center space-y-6">
          <HiOutlineEmojiSad size={75} color="#c5ae2c" className="m-auto" />
          <h1 className="text-4xl sm:text-6xl">404 - Page not found</h1>
          <p className="text-2xl md:text-2xl sm:text-2xl">
            We can't find the page you are looking for
          </p>
        </div>
        <Link href="/">
          <a className="bg-[#285b75] hover:bg-[#2b5062]  text-white px-6 pt-2 pb-3 rounded-md text-lg sm:text-xl focus:outline-none focus:rign-4 focus:ring-blue-600 focus:ring-opacity-50 whitespace-nowrap">
            Go back home
          </a>
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
