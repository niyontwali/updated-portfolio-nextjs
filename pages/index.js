import Head from "next/head";
import Main from "../components/Main";

export default function Home() {
  return (
    <div>
      <Head>
        <title>John | Full-stack Developer</title>
        <meta name="description" content="John's portfolio" />
        <link rel="icon" href="/titleLogo.jpg" />
      </Head>
      <Main />
    </div>
  );
}
