import Head from 'next/head'
import Projects from '../components/Projects'
import Navbar from '../components/Navbar'

export default function Project() {
  return (
    <div>
      <Head>
        <title>John | Projects</title>
        <meta name="description" content="Projects page" />
        <link rel="icon" href="/titleLogo.jpg"/>
      </Head>
      <Navbar />
      <Projects />
    </div>
  )
}
