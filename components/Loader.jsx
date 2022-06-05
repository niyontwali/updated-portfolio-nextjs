import React from "react";
import { RiLoader4Fill } from "react-icons/ri";

const Loader = () => {
  return (
    <div className='h-screem bg-transparent pt-[50vh] w-10 m-auto'>
      <RiLoader4Fill className="spinner" size={60} color='#0284c7' />
    </div>
  );
};

export default Loader;
