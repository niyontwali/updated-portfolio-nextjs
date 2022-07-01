import Head from "next/head";
import SkillsCards from "../components/SkillsCards";

export default function Skills() {
  return (
    <div className="min-h-screen">
      <Head>
        <title>John | Skills</title>
        <meta name="description" content="My skills and languages" />
        <link rel="icon" href="/titleLogo.jpg" />
      </Head>
      <div>
        <SkillsCards />
      </div>
    </div>
  );
}
