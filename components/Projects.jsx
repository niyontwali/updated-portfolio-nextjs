import ProjectItem from './ProjectItem'

const project1 = ['JavaScrip', 'TypeScript', 'NodeJs', 'ExpressJs', 'ReactJs', 'NextJs', 'Firebase', 'graphQL', 'graphCMS', 'Appolo GraphQL', 'MongoDB', 'PostgreSQL', 'HTML', 'CSS']

const Projects = () => {
  return (
    <div className='pt-10 lg:pt-28 px-6 lg:px-48'>
      <ProjectItem
        position='Full Stack Develop | Tech Lead'
        projectName='Refy'
        stacks={project1}
        description= 'Assembled and lead a team of 8 developers to create core features and integrate third party APIs. Implemented CI/CD pipeline with Typescript type-checking, database migration, code linting and preview deploys.'
      />
      <ProjectItem
        position='Full Stack Develop | Tech Lead'
        projectName='Refy'
        stacks={project1}
        description= 'Assembled and lead a team of 8 developers to create core features and integrate third party APIs. Implemented CI/CD pipeline with Typescript type-checking, database migration, code linting and preview deploys.'
      />
    </div>
  )
}

export default Projects