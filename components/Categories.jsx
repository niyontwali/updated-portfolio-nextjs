import { useState, useEffect } from 'react';
import Link from 'next/link';
import { getCategories } from '../services';

const Categories = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getCategories()
      .then((newCategories) => setCategories(newCategories) )
  }, [])
  return (
    <div className='bg-gray-100 dark:bg-[#2d333b] shadow-lg rounded-lg p-8 mb-8 pb-4'>
      <h3 className='text-cl mb-8 font-semibold border-b-2 border-[#e0e6e9] pb-4'>
        Categories
      </h3>
      {categories.map((category) => (
        <Link key={category.slug} href={`/category/${category.slug}`}>
          <span className='cursor-pointer font-semibold hover:text-[#285b75] dark:text-gray-300 hover:font-bold transition-all duration-300 ease block pb-3 mb-3'>{category.name}</span>
        </Link>
      ))}
    </div>
  )
}

export default Categories