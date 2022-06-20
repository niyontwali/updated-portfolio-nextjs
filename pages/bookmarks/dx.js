import Head from "next/head";
import { MdOutlineDeveloperBoard } from "react-icons/md";

import BookmarkDetails from "../../components/BookmarkDetails";
import DxData from "../../slugs/bookmarks/DxData";

export default function Dx() {
  return (
    <div>
      <Head>
        <title>John | Developer Experience</title>
        <meta name="dx" content="Developer experience page" />
        <link rel="icon" href="/titleLogo.jpg" />
      </Head>
      <BookmarkDetails
        title="Developer Experience"
        description="These are bookmarked resources related to developer experience. I do believe that they can help you advance your skills too."
        icon={<MdOutlineDeveloperBoard />}
        bookmarkData={<DxData />}
      />
    </div>
  );
}
