import BaseLayout from '../components/layout/BaseLayout';
import ErrorPage from '../components/layout/ErrorPage';

const Custom500 = () => (
  <BaseLayout
    seo={{
      keywords: '',
      metaDescription: '',
      metaTitle: 'Ha ocurrido un error | 500',
      preventIndexing: true,
      shareImage: {
        image: {alt: '', original: '/img/ilustration_500.webp'},
        alt: '',
      },
    }}
  >
    <ErrorPage statusCode={500} />
  </BaseLayout>
);

export default Custom500;
