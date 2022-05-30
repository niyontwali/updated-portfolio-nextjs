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
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <Card html={html} skill='HTML5' />
          <Card html={css} skill='CSS3' />
          <Card html={figma} skill='Figma Design Tool' />
          <Card html={javascript} skill='JavaScript' />
          <Card html={node} skill='NodeJs' />
          <Card html={react} skill='ReactJs' />
          <Card html={reactnative} skill='React-native' />
          <Card html={nextjs} skill='NextJs' />
          <Card html={tailwind} skill='Tailwind CSS' />
          <Card html={bootstrap} skill='Bootstrap' />
          <Card html={aws} skill='Cloud DevOps' />
          <Card html={postgres} skill='PostgreSQL' />
          <Card html={mongo} skill='Mongo DB' />
          <Card html={firebase} skill='Firebase' />
          <Card html={github} skill='Github' />
          <Card html={git} skill='Git Version Control' />
        </div>
      </div>
    </div>
  )
}

export default SkillsCards