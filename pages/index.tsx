import {useMemo} from 'react';
import {ServerSideContext} from '../types';
import {HomeProps} from '../types/home';
import {getStrapiData} from '../lib/requests';
import {parseHomeData} from '../lib/functions';
import BaseLayout from '../components/layout/BaseLayout';
import Custom500 from './500';
import Introducttion from '../components/Introducttion';
import MainAwards from '../components/MainAwards';
import HomeBanner from '../components/HomeBanner';
import WeeklyAwards from '../components/WeeklyAwards';
import Steps from '../components/Steps';

const HomePage = ({attributes}: HomeProps) => {
  const {seo, homeBanner, introduction, mainAwards, weeklyAwards, steps} = useMemo(
    () => parseHomeData(attributes),
    [attributes]
  );
  if (!attributes) return <Custom500 />;
  return (
    <BaseLayout seo={seo}>
      {/* why do i need to put this here????? */}
      {homeBanner && <HomeBanner data={homeBanner} />}
      {introduction && <Introducttion data={introduction} />}
      {mainAwards && <MainAwards data={mainAwards} />}
      {weeklyAwards && <WeeklyAwards data={weeklyAwards} />}
      {steps && <Steps data={steps} />}
    </BaseLayout>
  );
};

export async function getServerSideProps(context: ServerSideContext) {
  const [data] = await Promise.all([getStrapiData('home')]);

  // console.log(JSON.stringify(data))
  return {props: {attributes: data?.data?.attributes || null}};
}

export default HomePage;
