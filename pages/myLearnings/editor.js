import Head from "next/head";
import Editor from "../../components/Editor";


export default function EditorPage() {
  return (
    <div className="min-h-screen">
      <Head>
        <title>John | Editor</title>
        <meta name="My Learnings" content="Editor" />
        <link rel="icon" href="/titleLogo.jpg" />
      </Head>
      <Editor />
    </div>
  );
}
