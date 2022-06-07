import Image from 'next/image'

const Card = ({pic, skill}) => {
  return (
    <>
    <div className="py-2 h-24 pr-2 shadow-xl dark:bg-[#2d333b] dark:shadow-md dark:shadow-gray-700 rounded-xl hover:scale-105 ease-in duration-300 flex items-center justify-center">
      <div className="grid grid-cols-2 gap-10 justify-center items-center">
        <div className="m-auto">
          <Image src={pic} placeholder='blur' priority width='30px' height='30px' alt='skill image' />
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