import Image from 'next/image'
import Stacks from './Stacks'

import PrimaryBtn from './PrimaryBtn'

const ProjectItem = ({position, projectName,stacks, description, link, image1, image2}) => {
  return (
    <>
    <div className='mt-12 grid lg:grid-cols-12 grid-cols-1 gap-4 lg:gap-10 items-center'>
        <div className='lg:col-span-7'>
          <h2 className=''>{position}</h2>
          <h3 className='py-4 text-2xl font-semibold'>{projectName}</h3>
          <div className='flex gap-2 flex-row flex-wrap'>
            {stacks.map((stack) => (
              <Stacks key={stack} stack={`${stack}`} />
            ))}
          </div>
          <p className='py-6 text-md font-[500] text-justify'>{description}</p>
          <div className='pt-4 pl-2'>
            <PrimaryBtn projectLink= {link} />
          </div>
        </div>
        <div className='relative lg:col-span-5 rounded-lg overflow-hidden p-2 flex flex-col gap-2 items-center'>
          <Image src={image1} height='1000' alt='project one' priority placeholder='blur' className='rounded-lg hover:scale-105 ease-in duration-300' title="Project Dashboard" />
          <Image src={image2} height='1000' alt='project one' priority placeholder='blur' className='rounded-lg hover:scale-105 ease-in duration-300' />
        </div>
      </div>
    </>
  )
}

export default ProjectItem