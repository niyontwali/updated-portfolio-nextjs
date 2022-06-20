import Head from "next/head";
import { CgWebsite } from "react-icons/cg";

import BookmarkDetails from "../../components/BookmarkDetails";
import WebData from "../../slugs/bookmarks/WebData";

export default function Web() {
  return (
    <div className="">
      <Head>
        <title>John | Web development</title>
        <meta name="mobile" content="Web development page" />
        <link rel="icon" href="/titleLogo.jpg" />
      </Head>
      <BookmarkDetails
        title="Web Development"
        description="These are bookmarked resources related to web development. I do believe that they can help you advance your skills too."
        icon={<CgWebsite />}
        bookmarkData = {<WebData />}
      />
    </div>
  );
}
