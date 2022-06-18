import Head from "next/head";
import Bookmark from "../components/Bookmark";

export default function Bookmarks() {
  return (
    <div>
      <Head>
        <title>John | My Bookmarks</title>
        <meta name="My bookmarks" content="Bookmarks" />
        <link rel="icon" href="/titleLogo.jpg" />
      </Head>
      <Bookmark />
    </div>
  );
}
