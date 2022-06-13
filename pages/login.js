import Head from 'next/head'
import Login from '../components/Login'

export default function Project() {
  return (
    <div>
      <Head>
        <title>John | Login</title>
        <meta name="description" content="Login page" />
        <link rel="icon" href="/titleLogo.jpg"/>
      </Head>
      <div>
        <Login />
      </div>
    </div>
  )
}
