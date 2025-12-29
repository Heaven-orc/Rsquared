import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import { appWithTranslation } from 'next-i18next';
import { theme } from '../styles/theme';
import { ThemeProvider } from 'styled-components';
import Layout from '../Layout';
import React from 'react';

function MyApp({ Component, pageProps }: AppProps) {

  React.useEffect(() => {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);

    const handler = () => {
      let vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty('--vh', `${vh}px`);
    }
    window.addEventListener('resize', handler);
    return () => window.removeEventListener('resize', handler);
  }, [])

  return (
    <>
      <Head>
        <meta name='viewport'
          content='width=device-width,minimum-scale=1,maximum-scale=1,user-scalable=no,initial-scale=1.0,viewport-fit=cover'
        />
      </Head>
      <ThemeProvider theme={theme}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </>
  )
}

export default appWithTranslation(MyApp);
