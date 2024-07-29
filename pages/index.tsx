import { useMemo } from 'react';

import { ServerSideContext } from '../types';
import { HomeProps } from '../types/home';
import { getStrapiData } from '../lib/requests';
import { parseHomeData } from '../lib/functions';

import BaseLayout from '../components/layout/BaseLayout';
import Hero from '../components/Hero';
import HomeBanner from '../components/layout/HomeBanner';  // Importar el nuevo componente

import Custom500 from './500';

const HomePage = ({ attributes }: HomeProps) => {
  const { hero, seo, homeBanner } = useMemo(() => parseHomeData(attributes), [attributes]);
  if (!attributes) return <Custom500 />;

  return (
    <BaseLayout seo={seo}>
      {/*{hero && <Hero data={hero} />}*/}
      {homeBanner && <HomeBanner data={homeBanner} />}  // Incluir el nuevo componente
    </BaseLayout>
  );
};

export async function getServerSideProps(context: ServerSideContext) {
  const [data] = await Promise.all([getStrapiData('home')]);
  console.log(JSON.stringify(data));
  return { props: { attributes: data?.data?.attributes || null } };
}

export default HomePage;

