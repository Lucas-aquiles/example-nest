import { useMemo } from 'react';
import { ServerSideContext } from '../types';
import { HomeProps } from '../types/home';
import { getStrapiData } from '../lib/requests';
import { parseHomeData } from '../lib/functions';
import BaseLayout from '../components/layout/BaseLayout';
import Custom500 from './500';
import Introducttion from '../components/Introducttion';
import MainAwards from '../components/MainAwards';
import HomeBanner from '../components/HomeBanner';
import WeeklyAwards from '../components/WeeklyAwards';
import Steps from '../components/Steps';
<<<<<<< HEAD
import ExclusiveBenefits from '../components/ExclusiveBenefits';

const HomePage = ({attributes}: HomeProps) => {
  const {seo, homeBanner, introduction, mainAwards, weeklyAwards,steps, exclusiveBenefits} = useMemo(
=======
import AboutUs from '../components/AboutUs';


function HomePage({ attributes }: HomeProps) {
  const { seo, homeBanner, introduction, mainAwards, weeklyAwards, steps, aboutUs } = useMemo(
>>>>>>> 89093810102030e0b54c26ff655a621d77be0cd2
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
<<<<<<< HEAD
      {weeklyAwards && <WeeklyAwards  data={weeklyAwards}/>}
      {steps && <Steps data={steps}/>}
      {exclusiveBenefits && <ExclusiveBenefits  data={exclusiveBenefits}/>}
=======
      {weeklyAwards && <WeeklyAwards data={weeklyAwards} />}
      {steps && <Steps data={steps} />}
      {aboutUs && <AboutUs data={aboutUs} />}
>>>>>>> 89093810102030e0b54c26ff655a621d77be0cd2
    </BaseLayout>
  );
}

export async function getServerSideProps(context: ServerSideContext) {
  const [data] = await Promise.all([getStrapiData('home')]);

  console.log("Datos obtenidos en getServerSideProps:", data);

  return { props: { attributes: data?.data?.attributes || null } };
}

export default HomePage;
