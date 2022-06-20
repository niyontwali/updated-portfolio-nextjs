import Head from "next/head";
import { SiSuperuser } from "react-icons/si";

import BookmarkDetails from "../../components/BookmarkDetails";
import UxData from "../../slugs/bookmarks/UxData";

export default function Ux() {
  return (
    <div>
      <Head>
        <title>John | User Experience </title>
        <meta name="user" content="User Experience" />
        <link rel="icon" href="/titleLogo.jpg" />
      </Head>
      <BookmarkDetails
        title="User Experience"
        description="These are bookmarked resources related to user experience. I do believe that they can help you advance your skills too."
        icon={<SiSuperuser />}
        bookmarkData={<UxData />}
      />
    </div>
  );
}
