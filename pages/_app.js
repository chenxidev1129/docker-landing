import Head from "next/head";
import { Fragment, useEffect, useState } from "react";
import Preloader from "../src/components/Preloader";
import { animation } from "../src/utils";
import "../styles/globals.css";
import "../styles/custom.css";
import { appWithTranslation } from 'next-i18next';

function MyApp({ Component, pageProps }) {
  const [loader, setLoader] = useState(true);
  useEffect(() => {
    animation();
    setTimeout(() => {
      setLoader(false);
    }, 1000);
  });
  return (
    <Fragment>
      <Head>
        <link
          href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700,900&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css?family=Lato:400,700,900,900&display=swap"
          rel="stylesheet"
        />
        <title>
          Physio Stützpunkt
        </title>
        <link
          rel="shortcut icon"
          href="images/custom/icon-small.png"
          type="image/x-icon"
        />
        <link rel="icon" href="images/custom/icon-small.png" type="image/x-icon"></link>
      </Head>
      {loader && <Preloader />}
      <Component {...pageProps} />
    </Fragment>
  );
}

export default appWithTranslation(MyApp);
