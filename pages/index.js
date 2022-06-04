import Head from 'next/head'
import Main from '../components/Main'
import Navbar from '../components/Navbar'

export default function Home() {
  return (
    <div>
      <Head>
        <title>John | Full-stack Developer</title>
        <meta name="description" content="John's portfolio" />
        <link rel="icon" href="/titleLogo.jpg"/>
      </Head>
      <Navbar />
      <Main />
    </div>
  )
}


