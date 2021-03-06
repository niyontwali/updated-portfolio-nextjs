import Head from "next/head";
import Login from "../../components/Login";

export default function LoginPage() {
  return (
    <div className="min-h-screen">
      <Head>
        <title>John | Login</title>
        <meta name="description" content="Login page" />
        <link rel="icon" href="/titleLogo.jpg" />
      </Head>
      <Login />
    </div>
  );
}
