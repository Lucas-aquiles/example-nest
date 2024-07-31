import Head from 'next/head';
import {LayoutProps} from '../../types';
import GlobalLoader from '../GlobalLoader';

import Footer from './Footer';
import Header from './Header';

const BaseLayout = ({seo, children}: LayoutProps) => {
  return (
    <>
      <Head>
        <title>{seo?.metaTitle || 'Inicio'}</title>
        <meta name="title" content={seo?.metaTitle} key="title" />
        <meta
          name="description"
          content={seo?.metaDescription || 'description'}
          key="description"
        />
        <meta name="keywords" content={seo?.keywords} />
        <meta name="twitter:card" content="summary_large_image" key="twitter:card" />
        <meta property="og:title" content={seo?.metaTitle} key="og:title" />
        <meta property="og:description" content={seo?.metaDescription} key="og:description" />
        <meta property="og:image" content={seo?.shareImage?.image?.original} key="og:image" />
        <link rel="icon" href="/favicon.png" />

        {seo?.preventIndexing && (
          <>
            <meta name="robots" content="noindex"></meta>
            <meta name="googlebot" content="noindex"></meta>
          </>
        )}
        <meta name="google-site-verification" content="pending-add-site-code" />
      </Head>

      <Header />

      <GlobalLoader />

      <div style={{scrollBehavior: 'auto'}}>{children}</div>

      <Footer />
    </>
  );
};

export default BaseLayout;
