/* eslint-disable @next/next/no-img-element */
import { useState, useEffect } from "react";
import moment from "moment";
import Link from "next/link";
import { getRecentPosts, getSimilarPosts } from "../services";
import RecentPostsLoader from "./RecentPostsLoader";

const PostWidget = ({ categories, slug }) => {
  const [relatedPosts, setRelatedPosts] = useState([]);
  const [loading, setLoading] = useState(null);

  useEffect(() => {
    if (slug) {
      getSimilarPosts(categories, slug).then((result) =>
        setRelatedPosts(result)
      );
    } else {
      getRecentPosts().then((result) => setRelatedPosts(result));
    }
  }, [slug, categories]);

  useEffect(() => {
    if (relatedPosts.length === 0) {
      setLoading(true);
    } else {
      setLoading(false);
    }
  }, [relatedPosts]);
  return (
    <div className="bg-gray-100 dark:bg-[#2d333b] shadow-lg rounded-lg px-8 py-5 mb-8">
      <h3 className="text-cl mb-8 font-semibold border-b-2 border-[#e0e6e9] pb-4">
        {slug ? "Related Posts" : "Recent Posts"}
      </h3>
      {loading ? (
        <RecentPostsLoader />
      ) : (
        relatedPosts.map((post) => (
          <div key={post.title} className="flex items-center w-full mb-4">
            <div className="w-16 flex-none">
              <img
                alt={post.title}
                height="100px"
                width="100px"
                className="align-middle rounded-full"
                src={post.featuredImage.url}
              />
            </div>
            <div className="flex-grow ml-4">
              <p className="text-gray-500 dark:text-gray-300 font-xs">
                {moment(post.createdAt).format("MMM DD, YYYY")}
              </p>
              <Link href={`/blog/${post.slug}`}>
                <p className="font-semibold hover:text-[#285b75] hover:font-bold transition-all duration-300 ease cursor-pointer">
                  {post.title}
                </p>
              </Link>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default PostWidget;
