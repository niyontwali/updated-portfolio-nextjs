import Head from "next/head";
import Blog from "../components/Blog";
import { getPosts } from "../services";

export default function Blogs({ posts }) {
  return (
    <>
      <Head>
        <title>John | Blog</title>
        <meta name="description" content="My blogs" />
        <link rel="icon" href="/titleLogo.jpg" />
      </Head>
      <Blog posts={posts} />
    </>
  );
}

export async function getServerSideProps() {
  const posts = (await getPosts()) || [];

  return {
    props: { posts },
  };
}

// export async function getStaticProps() {
//   const posts = (await getPosts()) || [];

//   return {
//     props: { posts }
//   }
// }
