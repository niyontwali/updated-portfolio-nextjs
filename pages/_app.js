import { ThemeProvider } from "next-themes";
import Router from "next/router";
import { useState } from "react";
import NProgress from "nprogress";
import { SessionProvider } from "next-auth/react";

import Layout from "../sections/Layout";
import Loader from "../components/Loader";
import "../styles/globals.css";

NProgress.configure({ showSpinner: false });

function MyApp({ Component, pageProps, session }) {
  const [loading, setLoading] = useState(false);

  Router.events.on("routeChangeStart", (url) => {
    NProgress.start();
    setLoading(true);
  });
  Router.events.on("routeChangeComplete", (url) => {
    NProgress.done();
    setLoading(false);
  });

  return (
    <SessionProvider session={session}>
      <ThemeProvider enableSystem={true} attribute="class">
        {loading ? (
          <Loader />
        ) : (
          <Layout>
            <Component {...pageProps} />
          </Layout>
        )}
      </ThemeProvider>
    </SessionProvider>
  );
}

export default MyApp;
