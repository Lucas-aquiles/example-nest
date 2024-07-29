import BaseLayout from '../components/layout/BaseLayout';
import ErrorPage from '../components/layout/ErrorPage';

const Custom404 = () => (
  <BaseLayout
    seo={{
      keywords: '',
      metaDescription: '',
      metaTitle: 'Página no encontrada | 404',
      preventIndexing: true,
      shareImage: {
        image: {alt: '', original: '/img/ilustration_404.webp'},
        alt: '',
      },
    }}
  >
    <ErrorPage statusCode={404} />
  </BaseLayout>
);

export default Custom404;
