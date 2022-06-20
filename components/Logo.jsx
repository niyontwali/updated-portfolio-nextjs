import Link from "next/link"

const Logo = () => {
  return (
    <>
      <Link href="/">
        <div className='flex pb-0 cursor-pointer'>
          <div className="absolute ml-1 lg:ml-2 mt-4 lg:mt-6 w-[50px] lg:w-[40px] h-1 bg-[#f3f6f8] dark:bg-[#2d333b]"></div>
          <p className='text-4xl lg:text-5xl font-abril font-bold w-8'>J</p>
          <p className='text-4xl lg:text-5xl font-abril font-bold -ml-5 lg:-ml-4'>N</p>
        </div>
      </Link>
    </>
  )
}

export default Logo