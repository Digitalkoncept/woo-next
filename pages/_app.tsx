import "../src/styles/style.scss";
import "../src/styles/main.scss";
import type { AppProps } from "next/app";
import { ApolloProvider } from "@apollo/client";
import { client } from "../lib/apolloClient";
import { SessionProvider as AuthProvider } from 'next-auth/react';
import "../styles/globals.css";
import Router from 'next/router';
import NProgress from 'nprogress';
import 'react-toastify/dist/ReactToastify.css';

NProgress.configure({ showSpinner: false });
Router.events.on('routeChangeStart', () => NProgress.start());
Router.events.on('routeChangeComplete', () => NProgress.done());
Router.events.on('routeChangeError', () => NProgress.done());

function MyApp({ Component, pageProps,  }: AppProps & { pageProps: { session: any } })  {
  return (
    <ApolloProvider client={client}>
      <AuthProvider session={pageProps.session}>
        <Component  {...pageProps} />
      </AuthProvider>
    </ApolloProvider>
  );
}

export default MyApp

