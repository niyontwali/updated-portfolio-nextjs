/* eslint-disable @next/next/no-img-element */
import React from 'react';
import moment from 'moment';
import Link from 'next/link';
import { AiOutlineCalendar } from 'react-icons/ai'
import SecondaryBtn from './SecondaryBtn';

const PostCard = ({ post }) => {
  return (
    <div className='bg-gray-100 dark:bg-[#2d333b] shadow-lg rounded-lg p-0 lg:px-4 lg:py-6 pb-3 mb-6'> 
      <div className='relative overflow-hidden shadow-md pb-52  sm:pb-80 md:pb-48 mb-6 lg:rounded-lg'>
        <img 
          src={post.featuredImage.url} 
          alt={post.title}
          className='object-top absolute h-52 sm:h-80 md:h-48 w-full object-cover shadow-lg rounded-t-lg lg:rounded-lg lg:hover:scale-105 lg:ease-in duration-300' 
        /> 
      </div>
      <h2 className='transition duration-100 text-center mb-4 cursor-pointer hover:text-[#0284c7] text-2xl font-semibold'>
        <Link href={`/blog/${post.slug}`}>
          {post.title}
        </Link>
      </h2>  
      <div className='flex lg:flex-row flex-col items-center justify-center mb-4 w-full'>
        <div className='flex items-center justify-center mb-4 lg:mb-0 w-full lg:w-auto lg:mr-10 font-semibold'>
          <img src={post.author.photo.url} alt={post.author.name} height="25px" width="25px" className='rounded-full' />
          <p className="inline aligh-middle text-gray-700 dark:text-gray-300 ml-2 text-xs">{post.author.name}</p>
        </div>
        <div className='font-medium text-gray-700 dark:text-gray-300 flex items-center'>
          <AiOutlineCalendar size={20} color='#0284c7' className='mx-auto inline mr-2' />
          <span className='text-xs'>{moment(post.createdAt).format('MMM DD, YYYY')}</span>
        </div>
      </div>
      <p className='text-center text-md text-gray-700 dark:text-gray-300 font-normal px-2 lg:px-2 mb-6'>{post.excerpt} .....</p>
      <div className='text-center my-8'>
        <SecondaryBtn href={`/blog/${post.slug}`} btnName="Continue reading"/>
      </div>
    </div>
  )
}

export default PostCard