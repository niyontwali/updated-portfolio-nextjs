import Head from "next/head";

export default function Playpage() {
  return (
    <div className="h-screen">
      <Head>
        <title>John | My Learnings</title>
        <meta name="My Learnings" content="Learnings" />
        <link rel="icon" href="/titleLogo.jpg" />
      </Head>
      <div className="pl-[200px] pt-[200px] flex">
        <div className="bg-gray-300 h-[100px] w-[100px]"></div>
        <div className="bg-gray-500 h-[100px] w-[100px] rotate-45 ml-[-100px]"></div>
      </div>
    </div>
  );
}
