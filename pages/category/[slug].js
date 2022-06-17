import Head from "next/head";

import { getCategories, getCategoryPost } from "../../services";
import PostCard from "../../components/PostCard";
import Categories from "../../components/Categories";

const CategoryPost = ({ posts }) => {
  return (
    <div>
      <Head>
        <title>John | Blog Category</title>
        <meta name="description" content="Blog Category" />
        <link rel="icon" href="/titleLogo.jpg" />
      </Head>
      <div className="pt-16 container mx-auto px-10 mb-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="col-span-1 lg:col-span-8">
            {posts.map((post, index) => (
              <PostCard key={index} post={post.node} />
            ))}
          </div>
          <div className="col-span-1 lg:col-span-4">
            <div className="relative lg:sticky top-8">
              <Categories />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default CategoryPost;

// Fetch data at build time
export async function getServerSideProps({ params }) {
  // Using getServerSideProps if more efficient on my blog that getStaticProps with getStaticPaths
  const posts = await getCategoryPost(params.slug);

  return {
    props: { posts },
  };
}

// export async function getStaticPaths() {
//   const categories = await getCategories();
//   return {
//     paths: categories.map(({ slug }) => ({ params: { slug } })),
//     fallback: false,
//   };
// }
