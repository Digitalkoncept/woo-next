import "../src/styles/style.scss";
import "../src/styles/main.scss";
import type { AppProps } from "next/app";
import { ApolloProvider } from "@apollo/client";
import { client } from "../lib/apolloClient";
import { AuthProvider } from "../hooks/useAuth";
import "../styles/globals.css";
import Router from 'next/router';
import NProgress from 'nprogress';
import Cart2 from "../components/Cart2"
import {useState} from "react"

NProgress.configure({ showSpinner: false });
Router.events.on('routeChangeStart', () => NProgress.start());
Router.events.on('routeChangeComplete', () => NProgress.done());
Router.events.on('routeChangeError', () => NProgress.done());

function MyApp({ Component, pageProps }: AppProps) {
  const [show, setShow] =  useState(false);
  return (
    <ApolloProvider client={client}>
      <AuthProvider>
        <Cart2  show={show} setShow={setShow}/>
        <Component show={show} setShow={setShow} {...pageProps} />
      </AuthProvider>
    </ApolloProvider>
  );
}

export default MyApp

