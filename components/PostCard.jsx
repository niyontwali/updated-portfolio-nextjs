/* eslint-disable @next/next/no-img-element */
import React from 'react';
import moment from 'moment';
import Link from 'next/link';
import { AiOutlineCalendar } from 'react-icons/ai'

const PostCard = ({ post }) => {
  return (
    <div className='bg-white shadow-lg rounded-lg p-0 lg:p-8 pb-12 mb-8'> 
      <div className='relative overflow-hidden shadow-md pb-80 mb-6'>
        <img 
          src={post.featuredImage.url} 
          alt={post.title}
          width='100px'
          height='100px'
          className='object-top absolute h-80 w-full object-cover shadow-lg rounded-t-lg lg:rounded-lg' 
        /> 
      </div>
      <h1 className='transition duration-100 text-center mb-8 cursor-pointer hover:text-pink-600 text-3xl font-semibold'>
        <Link href={`/blog/${post.slug}`}>
          {post.title}
        </Link>
      </h1>  
      <div className='block lg:flex text-center items-center justify-center mb-8 w-full'>
        <div className='flex items-center justify-center mb-4 lg:mb-0 w-full lg:w-auto mr-8'>
          <img src={post.author.photo.url} alt={post.author.name} height="30px" width="30px" />
          <p className="inline aligh-middle text-gray-700 ml-2 text-lg">{post.author.name}</p>
        </div>
        <div className='font-medium text-gray-700 '>
          <AiOutlineCalendar size={25} className='mx-auto inline mr-2 text-pink-500' />
          <span>{moment(post.createdAt).format('MMM DD, YYYY')}</span>
        </div>
      </div>
      <p className='text-center text-lg text-gray-700 font-normal px-4 lg:px-20 mb-8'>{post.excerpt}</p>
      <div className='text-center'>
        <Link href={`/blog/${post.slug}`}>
          <span className='transition duration-500 transform hover:-translate-y-1 inline-block bg-pink-600 text-lg font-medium rounded-full text-white px-8 py-3 cursor-pointer'>Continue reading</span>
        </Link>
      </div>
    </div>
  )
}

export default PostCard