import React from 'react'

const RecentPostsLoader = () => {
  return (
    <div>
      <div className='flex gap-2 pb-6'>
        <div className='bg-gray-200 dark:bg-[#22272e] rounded-full w-[80px] h-10 skeleton'></div>
        <div>
          <div className='bg-gray-200 dark:bg-[#22272e] w-[100px] h-4 rounded-md mb-2 skeleton'></div>
          <div className='bg-gray-200 dark:bg-[#22272e] w-[200px] h-4 rounded-md mb-3 skeleton'></div>
        </div>
      </div>
      <div className='flex gap-2 pb-6'>
        <div className='bg-gray-200 dark:bg-[#22272e] rounded-full w-[80px] h-10 skeleton'></div>
        <div>
          <div className='bg-gray-200 dark:bg-[#22272e] w-[100px] h-4 rounded-md skeleton'></div>
          <div className='bg-gray-200 dark:bg-[#22272e] w-[200px] h-4 mt-2 rounded-md mb-3 skeleton'></div>
        </div>
      </div>
      <div className='flex gap-2'>
        <div className='bg-gray-200 dark:bg-[#22272e] rounded-full w-[80px] h-10 skeleton'></div>
        <div>
          <div className='bg-gray-200 dark:bg-[#22272e] w-[100px] h-4 rounded-md skeleton'></div>
          <div className='bg-gray-200 dark:bg-[#22272e] w-[200px] h-4 mt-2 rounded-md skeleton'></div>
        </div>
      </div>  
    </div>
  )
}

export default RecentPostsLoader