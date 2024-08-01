import {useMemo} from 'react';
import {ServerSideContext} from '../types';
import {HomeProps} from '../types/home';
import {getStrapiData} from '../lib/requests';
import {parseHomeData, parsePlansData} from '../lib/functions';
import BaseLayout from '../components/layout/BaseLayout';
import Custom500 from './500';
import Introducttion from '../components/Introducttion';
import MainAwards from '../components/MainAwards';
import HomeBanner from '../components/HomeBanner';
import WeeklyAwards from '../components/WeeklyAwards';
import Steps from '../components/Steps';
import PlansIntroduction from '../components/PlansIntroduction';
import ExclusiveBenefits from '../components/ExclusiveBenefits';
import AboutUs from '../components/AboutUs';


const HomePage = ({attributes}: HomeProps) => {

  const {seo, homeBanner, introduction, mainAwards, weeklyAwards, steps, plansIntroduction,exclusiveBenefits,aboutUs} =
    useMemo(() => parseHomeData(attributes?.homeAttributes), [attributes]);

  const {monthlyPlan, annualPlan} = useMemo(() => parsePlansData(attributes?.plansAttributes), [attributes]);


  if (!attributes) return <Custom500 />;

  return (
    <BaseLayout seo={seo}>
      {homeBanner && <HomeBanner data={homeBanner} />}
      {introduction && <Introducttion data={introduction} />}
      {mainAwards && <MainAwards data={mainAwards} />}
      {weeklyAwards && <WeeklyAwards data={weeklyAwards} />}
      {steps && <Steps data={steps} />}
      {exclusiveBenefits && <ExclusiveBenefits  data={exclusiveBenefits}/>}
      {aboutUs && <AboutUs data={aboutUs} />}
      {plansIntroduction && <PlansIntroduction data={plansIntroduction}  annualPlan={annualPlan} monthlyPlan={monthlyPlan}/>}
    </BaseLayout>
  );
}

export async function getServerSideProps(context: ServerSideContext) {
  const [homeData, plansData] = await Promise.all([getStrapiData('home'), getStrapiData('plans')]);
  // console.log( JSON.stringify(plansData.data[0]));

  return {
    props: {
      attributes: {
        homeAttributes: homeData?.data?.attributes || null,
        plansAttributes: plansData?.data || null,
      },
    },
  };

}

export default HomePage;
