import Head from "next/head";
import Dashboard from "../../components/Dashboard";

export default function DashboardPage() {
  return (
    <div className="min-h-screen">
      <Head>
        <title>John | Dashboard</title>
        <meta name="description" content="Dashboard page" />
        <link rel="icon" href="/titleLogo.jpg" />
      </Head>
      <Dashboard />
    </div>
  );
}
