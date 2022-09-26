import "../src/styles/style.scss";
import "../src/styles/main.scss";
import type { AppProps } from "next/app";
import { ApolloProvider } from "@apollo/client";
import { client } from "../lib/apolloClient";
import { AuthProvider } from "../hooks/useAuth";
import "../styles/globals.css";
import Router from 'next/router';
import NProgress from 'nprogress';
import {useState} from "react"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

NProgress.configure({ showSpinner: false });
Router.events.on('routeChangeStart', () => NProgress.start());
Router.events.on('routeChangeComplete', () => NProgress.done());
Router.events.on('routeChangeError', () => NProgress.done());

function MyApp({ Component, pageProps }: AppProps) {
  const [show, setShow] =  useState(false);
  return (
    <ApolloProvider client={client}>
      <AuthProvider>
        <Component show={show} setShow={setShow} {...pageProps} />
      </AuthProvider>
    </ApolloProvider>
  );
}

export default MyApp

