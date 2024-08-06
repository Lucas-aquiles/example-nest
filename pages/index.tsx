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
  const {
    seo,
    homeBanner,
    introduction,
    mainAwards,
    weeklyAwards,
    steps,
    plansIntroduction,
    exclusiveBenefits,
    aboutUs,
  } = useMemo(() => parseHomeData(attributes?.homeAttributes), [attributes]);

  const {monthlyPlan, annualPlan} = useMemo(
    () => parsePlansData(attributes?.plansAttributes),
    [attributes]
  );

  if (!attributes) return <Custom500 />;
  const components = [
    {component: <HomeBanner data={homeBanner} />, weight: homeBanner?.weight},
    {component: <Introducttion data={introduction} />, weight: introduction?.weight},
    {component: <MainAwards data={mainAwards} />, weight: mainAwards?.weight},
    {component: <WeeklyAwards data={weeklyAwards} />, weight: weeklyAwards?.weight},
    {component: <Steps data={steps} />, weight: steps?.weight},
    {component: <ExclusiveBenefits data={exclusiveBenefits} />, weight: exclusiveBenefits?.weight},
    {component: <AboutUs data={aboutUs} />, weight: aboutUs?.weight},
    {
      component: (
        <PlansIntroduction
          data={plansIntroduction}
          annualPlan={annualPlan}
          monthlyPlan={monthlyPlan}
        />
      ),
      weight: plansIntroduction?.weight,
    },
  ];
  const sortedComponents = components
    .filter(({weight}) => weight !== undefined && weight !== null) // Ensure the component has a weight
    .sort((a, b) => {
      const weightA = a.weight ?? Number.MAX_SAFE_INTEGER;
      const weightB = b.weight ?? Number.MAX_SAFE_INTEGER;
      return weightA - weightB;
    });

  return (
    <BaseLayout seo={seo}>
      {sortedComponents.map(({component}, index) => (
        <div key={index}>{component}</div>
      ))}
    </BaseLayout>
  );
};

export async function getServerSideProps(context: ServerSideContext) {
  const [homeData, plansData] = await Promise.all([getStrapiData('home'), getStrapiData('plans')]);

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
