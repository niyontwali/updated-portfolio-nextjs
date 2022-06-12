import Head from 'next/head'
import Jumbotron from '../components/Jumbotron'
import Projects from '../components/Projects'

export default function Project() {
  return (
    <div>
      <Head>
        <title>John | Projects</title>
        <meta name="description" content="Projects page" />
        <link rel="icon" href="/titleLogo.jpg"/>
      </Head>
      <Projects />
      <div>
        <Jumbotron />
      </div>
    </div>
  )
}
