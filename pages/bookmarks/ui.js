import Head from "next/head";
import { FiUserCheck } from "react-icons/fi";

import BookmarkDetails from "../../components/BookmarkDetails";
import UiData from "../../slugs/bookmarks/UiData";

export default function Ui() {
  return (
    <div>
      <Head>
        <title>John | User Interface </title>
        <meta name="user" content="User Experience" />
        <link rel="icon" href="/titleLogo.jpg" />
      </Head>
      <BookmarkDetails
        title="User Interface"
        description="These are bookmarked resources related to user interface. I do believe that they can help you advance your skills too."
        icon={<FiUserCheck />}
        bookmarkData={<UiData />}
      />
    </div>
  );
}
