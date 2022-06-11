import React from 'react'

const Stacks = ({stack}) => {
  return (
    <div className='bg-[#1f2937] dark:bg-[#2d333b] text-gray-200 px-2 py-[5px] w-fit text-sm hover:scale-110 ease-in duration-300'>
      {stack}
    </div>
  )
}

export default Stacks