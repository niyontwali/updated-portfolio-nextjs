import phantom1 from './public/assets/projects/phantom1.jpg'
import phantom2 from './public/assets/projects/phantom2.jpg'
import flashcard1 from './public/assets/projects/flashcard1.jpg'
import flashcard2 from './public/assets/projects/flashcard2.jpg'
import projectmgmt1 from './public/assets/projects/projectmgmt1.jpg'
import projectmgmt2 from './public/assets/projects/projectmgmt2.jpg'
import epiclib1 from './public/assets/projects/epiclib1.jpg'
import epiclib2 from './public/assets/projects/epiclib2.jpg'
import portfolio1 from './public/assets/projects/portfolio1.jpg'
import portfolio2 from './public/assets/projects/portfolio2.jpg'

export const projects = [
  {
    id: 1,
    position: 'Full Stack Developer | Andela',
    name: 'Phantom',
    stacks: ['Figma','JavaScrip', 'NodeJs', 'ExpressJs', 'ReactJs', 'Redux','PostgreSQL', 'Tailwindcss', 'Sequelize ORM', 'Mocha', 'Chai'],
    image1: phantom1,
    image2: phantom2,
    link: 'https://phantom-frontend-elites.herokuapp.com/',
    description: "This is a project aimed at reducing ample time passengers spend on bus stations while waiting for buses to arrive. I Worked with a team of 4 developers to create Phantom Project's chores and features for both backend and frontend. Personally Implemented chore project set up which included pipeline and Code climate for code optimization, database migration, code linting. Worked on different features which include registration, and CRUD of different operations. Reviewed different PRs from my teammates and tested different features using Mocha and Chai"
  },
  {
    id: 2,
    position: 'Full Stack Developer | Personal',
    name: 'Project Management System',
    stacks: ['Figam','JavaScript', 'GraphQL', 'Exprress-graphQL', 'ReactJs', 'Apollo-client','MongoDB', 'Bootstrap CSS'],
    image1: projectmgmt1,
    image2: projectmgmt2,
    link: 'https://62a49f7ee480b70008341147--classy-dieffenbachia-df9977.netlify.app/',
    description: "This is a management system web application that helps users to manage the projects that they are working on. A project is mapped to its client and the User(Individual Person or Company) are able to store different information for the client and the project as well as manipulate and use them in anyway helpful to them. I worked on this project alone and the challenges encountered where using a new server-side language which is an alternative to Restful APIs i.e GraphQL. I managed to learn a lot while working on the project and am using it to create more advanced applications which you will see soon on this page. "
  },
  {
    id: 3,
    position: 'Full Stack Developer | Andela',
    name: 'FlashCard',
    stacks: ['Figam','TypeScript', 'GraphQL', 'Apollo-server', 'ReactJs', 'Apollo-client','PostgreSQL', 'Tailwindcss', 'Prisma ORM'],
    image1: flashcard1,
    image2: flashcard2,
    link: 'https://luxury-cascaron-90910e.netlify.app/',
    description: "This is a project was created right after the above Management System App where I now wanted to use GraphQL and TypeScript to see how it would work together. I also used Prisma ORM for the first time and it was the easiest ORM I ever level up on so fast and was able to grasp well its concepts. This is a simple flashcard application for amusement and can be used by movie lovers to evaluate how well they know the movies they have ever watched. It has an incredible dashboard for all CRUD(Create, Read, Update and Delete) operations."
  },
  {
    id: 4,
    position: 'Full Stack | Personal',
    name: 'Deprecated Personal Portfolio',
    stacks: ['Figam','JavaScript', 'NodeJs', 'Express', 'ReactJs', 'PostgreSQL','Sequilize ORM', 'Tailwindcss'],
    image1: portfolio1,
    image2: portfolio2,
    link: 'https://njohndeprecated.netlify.com/',
    description: "This project was my previous portfolio and obviously you can see there was a lot of improvement and new skills gained. When I was creating the new portfolio I imagined how coding can really feel tasty and challenging but afterall you get to learn a lot of new skills you can always imagine and appreciate yourself. The most challenge met on the journey to become a programmer I am today is Debugging Tensions. Debugging is a critical skill, but most people aren't born with a mastery of it. Debugging is frustrating. You just wrote a bunch of code, and it doesn't work even though you're pretty sure it should. I learnt a lot of tools that helped to reduce the amount of time spent while debugging and some of them even helped get rid of some bugs during the development and these include Browser Developer Tool, ESLint as well as using TypeScript which is awesome when it comes to type-checking and prevents one from encounting bugs during the runtime."
  },
  {
    id: 5,
    position: 'Frontend Developer | Personal',
    name: 'epicLib - In progress',
    stacks: ['Figam','JavaScript', 'HTML', 'Tailwindcss'],
    image1: epiclib1,
    image2: epiclib2,
    link: 'https://github.com/niyontwali/epicLib',
    description: "This application is in progress and it's main object will be helping beginner to learn and get equiped with the need skills related to JavaScript and most of its frameworks/libraries like Reactjs, Nextjs for the frontend and Nodejs for the backend. This web application will be providing free courses and resources that will be posted on a regulary basis to help the interested end users. I am currently done with the frontend and starting the backend which will be complete soon and the application will be live soon."
  }
]