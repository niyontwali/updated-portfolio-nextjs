import Image from 'next/image'

const Card = ({html, skill}) => {
  return (
    <>
    <div className="py-6 shadow-xl dark:bg-gray-800 dark:shadow-md dark:shadow-gray-700 rounded-xl hover:scale-105 ease-in duration-300">
      <div className="grid grid-cols-2 gap-2 justify-center items-center">
        <div className="m-auto">
          <Image src={html} placeholder='blur' priority width='64px' height='64px' alt='skill image' />
        </div>
        <div className='flex flex-col items-center justify-center'>
          <h3>{skill}</h3>
        </div>
      </div>
    </div>
    </>
  )
}

export default Card