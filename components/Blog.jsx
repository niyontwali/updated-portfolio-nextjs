import React from 'react'
import Categories from './Categories'
import PostCard from './PostCard'
import PostWidget from './PostWidget'


const Blog = ({ posts }) => {
  return (
    <div className='mx-auto px-4 sm:px-6 md:px-16 pt-[110px] mb-8'>
      <div className='grid grid-cols-1 lg:grid-cols-12 gap-12'>
        <div className='lg:col-span-8 col-span-1'>
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-8'>
            {posts.map((post) => (
              <PostCard post={post.node} key={post.title} />
            ))}
          </div>
        </div>
        <div className='lg:col-span-4 col-span-1'>
          <div className='lg:sticky relative lg:top-[80px]'>
            <PostWidget />
            <Categories />
          </div>

        </div>
      </div>
    </div>
  )
}

export default Blog;
