import ProjectItem from './ProjectItem'
import { projects } from '../projects'

const Projects = () => {
  return (
    <div className='py-10 lg:pt-24 px-6 lg:px-48'>
        {projects.map((project) => (
          <div key={project.id} className='h-[80vh]'>
            <ProjectItem
            position={project.position}
            projectName={project.name}
            stacks={project.stacks}
            link={project.link}
            image1={project.image1}
            image2={project.image2}
            description= {project.description}
        />
          </div>
        ))}
    </div>
  )
}

export default Projects