import Head from "next/head";
import { MdCastForEducation } from "react-icons/md";

import BookmarkDetails from "../../components/BookmarkDetails";
import TechnicalData from "../../slugs/bookmarks/TechnicalData";

export default function Technical() {
  return (
    <div>
      <Head>
        <title>John | Mobile development</title>
        <meta name="mobile" content="Mobile development page" />
        <link rel="icon" href="/titleLogo.jpg" />
      </Head>
      <BookmarkDetails
        title="Technical Education"
        description="As a developer you need some real life advices. These are bookmarked resources related to technical Education. I do believe that they can help you advance your skills too."
        icon={<MdCastForEducation />}
        bookmarkData={<TechnicalData />}
      />
    </div>
  );
}
