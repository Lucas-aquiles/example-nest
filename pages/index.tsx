import {useMemo} from 'react';

import {ServerSideContext} from '../types';
import {HomeProps} from '../types/home';
import {getStrapiData} from '../lib/requests';
import {parseHomeData} from '../lib/functions';

import BaseLayout from '../components/layout/BaseLayout';
import Hero from '../components/Hero';

import Custom500 from './500';
import HomeBanner from '../components/layout/HomeBanner';
import Introducttion from '../components/layout/Introducttion';
import MainAwards from '../components/layout/MainAwards';

const HomePage = ({attributes}: HomeProps) => {
  const {hero, seo,homeBanner,introduction,mainAwards} = useMemo(() => parseHomeData(attributes), [attributes]);
  if (!attributes) return <Custom500 />;

  console.log(mainAwards)
  return <BaseLayout seo={seo}   >
    {/* {hero && <Hero data={hero} />} */}
    {homeBanner && <HomeBanner data={homeBanner}/>}
    {introduction && <Introducttion data={introduction}/>}
    {mainAwards && <MainAwards data={mainAwards}/>}



  </BaseLayout>;
};


export async function getServerSideProps(context: ServerSideContext) {
  const [data] = await Promise.all([getStrapiData('home')]);
  // console.log("bbbbb",JSON.stringify(data));
  return {props: {attributes: data?.data?.attributes || null}};
}

export default HomePage;
