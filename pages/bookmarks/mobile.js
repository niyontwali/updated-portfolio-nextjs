import Head from "next/head";
import { BsFillPhoneFill } from "react-icons/bs";

import BookmarkDetails from "../../components/BookmarkDetails";
import MobileData from "../../slugs/bookmarks/MobileData";

export default function Mobile() {
  return (
    <div>
      <Head>
        <title>John | Mobile development</title>
        <meta name="mobile" content="Mobile development page" />
        <link rel="icon" href="/titleLogo.jpg" />
      </Head>
      <BookmarkDetails
        title="Mobile Development"
        description="These are bookmarked resources related to mobile development. I do believe that they can help you advance your skills too."
        icon={<BsFillPhoneFill />}
        bookmarkData={<MobileData />}
      />
    </div>
  );
}
