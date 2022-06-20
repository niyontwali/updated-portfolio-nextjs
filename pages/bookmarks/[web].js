import Head from "next/head";
import BookmarkDetails from "../../components/BookmarkDetails";

export default function Web() {
  return (
    <div>
      <Head>
        <title>John | Web development</title>
        <meta name="description" content="Contact me page" />
        <link rel="icon" href="/titleLogo.jpg" />
      </Head>
      <BookmarkDetails />
    </div>
  );
}
