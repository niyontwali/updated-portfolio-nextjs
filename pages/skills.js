import Head from 'next/head'
import SkillsCards from '../components/SkillsCards'
import Navbar from '../components/Navbar'

export default function Skills() {
  return (
    <div>
      <Head>
        <title>John | Skills</title>
        <meta name="description" content="My skills and languages" />
        <link rel="icon" href="/titleLogo.jpg"/>
      </Head>
      <Navbar />
      <SkillsCards />
    </div>
  )
}