import "../styles/globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>CAM Project</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
