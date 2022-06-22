import Head from "next/head";
import Learnings from "../components/Learnings";

export default function MyLearnings() {
  return (
    <div className="min-h-screen">
      <Head>
        <title>John | My Learnings</title>
        <meta name="My Learnings" content="Learnings" />
        <link rel="icon" href="/titleLogo.jpg" />
      </Head>
      <Learnings />
    </div>
  );
}
