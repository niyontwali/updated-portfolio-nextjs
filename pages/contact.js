import Head from "next/head";
import ContactSection from "../components/ContactSection";

export default function Home() {
  return (
    <div>
      <Head>
        <title>John | Contact Me</title>
        <meta name="description" content="Contact me page" />
        <link rel="icon" href="/titleLogo.jpg" />
      </Head>
      <ContactSection />
    </div>
  );
}
