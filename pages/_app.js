import { ThemeProvider } from "next-themes";
import Router from "next/router";
import { useState } from "react";
import NProgress from "nprogress";
import { SessionProvider } from "next-auth/react";
import { ApolloProvider, ApolloClient, InMemoryCache} from 
'@apollo/client';

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

  const cache = new InMemoryCache({
    typePolicies: {
      Query: {
        fields: {
          allBookmarks: {
            merge(existing, incoming) {
              return incoming
            }
          }
        }
      }
    }
  })

  const client = new ApolloClient({
    uri: 'https://bookmarks-backend.herokuapp.com/graphql',
    cache
  })

  return (
    <SessionProvider session={session}>
      <ThemeProvider enableSystem={true} attribute="class">
        <ApolloProvider client={client}>
        {loading ? (
          <Loader />
        ) : (
          <Layout>
            <Component {...pageProps} />
          </Layout>
        )}
        </ApolloProvider>
      </ThemeProvider>
    </SessionProvider>
  );
}

export default MyApp;
