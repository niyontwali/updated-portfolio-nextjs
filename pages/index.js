import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>John - Portfolio</title>
        <meta name="description" content="John's portfolio" />
        <link rel="icon" href="/titleIcon.png" />
      </Head>
      <h1>Hello World</h1>
    </div>
  )
}
