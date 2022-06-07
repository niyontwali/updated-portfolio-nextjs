import html from '../public/assets/skills/html.png'
import css from '../public/assets/skills/css.png'
import javascript from '../public/assets/skills/javascript.png'
import node from '../public/assets/skills/node.png'
import react from '../public/assets/skills/react.png'
import tailwind from '../public/assets/skills/tailwind.png'
import mongo from '../public/assets/skills/mongo.png'
import github from '../public/assets/skills/github.png'
import firebase from '../public/assets/skills/firebase.png'
import git from '../public/assets/skills/git.png'
import nextjs from '../public/assets/skills/nextjs.png'
import postgres from '../public/assets/skills/postgres.png'
import reactnative from '../public/assets/skills/reactnative.png'
import figma from '../public/assets/skills/figma.png'
import bootstrap from '../public/assets/skills/bootstrap.png'
import aws from '../public/assets/skills/aws.png'
import Card from './Card'

const SkillsCards = () => {
  return (
    <div className="pt-20 w-full lg:h-screen px-2">
      <div className="max-w-[1240px] mx-auto flex flex-col justify-center h-full">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 justify-center">
          <Card pic={html} skill='HTML5' />
          <Card pic={css} skill='CSS3' />
          <Card pic={figma} skill='Figma' />
          <Card pic={javascript} skill='JavaScript' />
          <Card pic={node} skill='NodeJs' />
          <Card pic={react} skill='ReactJs' />
          <Card pic={reactnative} skill='React-native' />
          <Card pic={nextjs} skill='NextJs' />
          <Card pic={tailwind} skill='Tailwind CSS' />
          <Card pic={bootstrap} skill='Bootstrap' />
          <Card pic={aws} skill='Cloud DevOps' />
          <Card pic={postgres} skill='PostgreSQL' />
          <Card pic={mongo} skill='Mongo DB' />
          <Card pic={firebase} skill='Firebase' />
          <Card pic={github} skill='Github' />
          <Card pic={git} skill='Git Version Control' />
        </div>
      </div>
    </div>
  )
}

export default SkillsCards