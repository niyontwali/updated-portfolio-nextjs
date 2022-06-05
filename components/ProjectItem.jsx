import Image from 'next/image'
import Stacks from './Stacks'
import project1 from '../public/assets/projects/netflix.jpg'

const ProjectItem = ({position, projectName,stacks, description}) => {
  return (
    <>
    <div className='mt-20 grid lg:grid-cols-12 grid-cols-1 gap-4 lg:gap-10'>
        <div className='lg:col-span-7'>
          <h2 className=''>{position}</h2>
          <h3 className='py-4 text-2xl font-semibold'>{projectName}</h3>
          <div className='flex gap-2 flex-row flex-wrap'>
            {stacks.map((stack) => (
              <Stacks key={stack} stack={`${stack}`} />
            ))}
          </div>
          <p className='py-6 text-md font-[500]'>{description}</p>
        </div>
        <div className='relative lg:col-span-5 rounded-lg overflow-hidden p-2 group hover:bg-[#0284c7] flex items-center mb-32'>
          <Image src={project1} alt='project one' priority placeholder='blur' className='group-hover:opacity-30 rounded-lg' />
          <div className='hidden group-hover:block absolute top-[50%] right-[14%] translate-x-[-50%] translate-y-[-50%]'>
            <a href='' className='bg-gray-200 py-3 px-6 rounded-full text-xl dark:text-[#1f2937] font-semibold hover:bg-gray-300' >View Project</a>
          </div>
        </div>
      </div>
    </>
  )
}

export default ProjectItem