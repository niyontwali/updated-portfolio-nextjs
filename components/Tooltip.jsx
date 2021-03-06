import React from "react";

const Tooltip = ({ title, description }) => {
  return (
    <>
      <div className="absolute hover:hidden cursor-default mt-8 font-bold text-md bg-[#0284c7] px-3 py-2 rounded-xl opacity-0 group-hover:opacity-100 shadow-xl">
        <div className="w-3 h-3 bg-[#0284c7] rotate-45 -mt-[12px]"></div>
        <p className="text-gray-100 text-md"> {title} </p>
        <p className="max-w-[200px] pt-2 font-bold text-gray-200 text-xs">
          { description }
        </p>
      </div>
    </>
  );
};

export default Tooltip;
