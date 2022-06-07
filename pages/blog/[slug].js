import Head from 'next/head'
import { getPosts, getPostDetails } from '../../services';
import Categories from '../../components/Categories';
import PostDetail from '../../components/PostDetail';
import PostWidget from '../../components/PostWidget';
import Author from '../../components/Author';
import Comments from '../../components/Comments';
import CommentsForm from '../../components/CommentsForm';


const PostDetails = ({ post }) => {
  return (
    <div>
       <Head>
        <title>John | Blog Detail</title>
        <meta name="description" content="Blog Detail" />
        <link rel="icon" href="/titleLogo.jpg"/>
      </Head>
      <div className='pt-20 container mx-auto px-4 lg:px-10 mb-8'>
        <div className='grid grid-cols-1 lg:grid-cols-12 gap-12'>
          <div className='col-span-1 lg:col-span-8'>
            <PostDetail post = {post} />
            <Author author = { post.author } />
            <CommentsForm slug={post.slug} />
            <Comments slug = {post.slug} />
          </div>
          <div className='col-span-1 lg:col-span-4'>
            <div className='relative lg:sticky lg:top-[80px]'>
              <PostWidget slug = { post.slug } categories= {post.categories.map((category) => category.slug)} />
              <Categories />
            </div>
          </div>
        </div>
        </div>
    </div>
  )
}

export default PostDetails

export async function getStaticProps({ params }) {
  const data = (await getPostDetails(params.slug));

  return {
    props: { post: data }
  }
}

export async function getStaticPaths() {
  const posts = await getPosts() 
  
  return {
    paths: posts.map(({ node: {slug}}) => ({ params: { slug }})),
    fallback: false
  }
}