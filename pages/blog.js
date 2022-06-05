import Head from 'next/head'
import Blog from '../components/Blog'
import Navbar from '../components/Navbar'
import { getPosts } from '../services'


export default function Blogs ({posts}) {
  return (
    <div>
      <Head>
        <title>John | Blog</title>
        <meta name="description" content="My blogs" />
        <link rel="icon" href="/titleLogo.jpg"/>
      </Head>
      <Navbar />
      <Blog posts={posts} />
    </div>
  )
}

export async function getStaticProps() {
  const posts = (await getPosts()) || [];

  return {
    props: { posts }
  }
}