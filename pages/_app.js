import Head from "next/head";
import { Fragment, useEffect, useState } from "react";
import Preloader from "../src/components/Preloader";
import { animation } from "../src/utils";
import "../styles/globals.css";

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
          MedService - Medical & Medical Health Landing Page Template
        </title>
        <link
          rel="shortcut icon"
          href="images/favicon.ico"
          type="image/x-icon"
        />
        <link rel="icon" href="images/favicon.ico" type="image/x-icon"></link>
      </Head>
      {loader && <Preloader />}
      <Component {...pageProps} />
    </Fragment>
  );
}

export default MyApp;
