/* eslint-disable @next/next/next-script-for-ga */
import {Html, Head, Main, NextScript} from 'next/document';
import {GTM_ID} from '../lib/gtm';

export default function Document() {
  return (
    <Html lang="es">
      <Head>
        <link rel="alternate" type="application/xml" href="/sitemap.xml" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@200;300;400;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </Head>
      <body style={{overflowX: 'hidden'}}>
        <noscript>
          <iframe
            src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
            height="0"
            width="0"
            style={{display: 'none', visibility: 'hidden'}}
          />
        </noscript>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
