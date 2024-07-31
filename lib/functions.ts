import {ImageAttributesProps, SeoAttributesProps,HomeBannerProps,IntroductionProps,MainAwardsProps,WeeklyAwardsProps,StepsProps,ExclusiveBenefitsProps} from '../types/components';

export const classNames = (...classes: Array<string | boolean | undefined>) => {
  return classes.filter(Boolean).join(' ');
};

const getImageAttributes = (imageObj: any): ImageAttributesProps => {
  const data = imageObj?.data?.attributes;

  const attributesFormatted: ImageAttributesProps = {
    alt: data?.alternativeText || '',
    original: data?.url || '',
    lg: data?.formats?.large?.url || '',
    md: data?.formats?.medium?.url || '',
    sm: data?.formats?.small?.url || '',
    xs: data?.formats?.thumbnail?.url || '',
  };

  return data ? attributesFormatted : null;
};

const getSeoAttributes = (seo: any): SeoAttributesProps => {
  const attributesFormatted: SeoAttributesProps = {
    keywords: seo?.keywords,
    metaDescription: seo?.metaDescription,
    metaTitle: seo?.metaTitle,
    preventIndexing: seo?.preventIndexing,
    shareImage: {
      image: getImageAttributes(seo?.shareImage?.image),
      alt: seo?.shareImage?.alt,
    },
  };

  return attributesFormatted || null;
};

const getHomeBannerAttibutes = (homeBanner: any): HomeBannerProps => {
  const attributesFormatted: HomeBannerProps = {
    id: homeBanner?.id,
    title: homeBanner?.title,
    isActive: homeBanner?.isActive,
    backgroundImage: homeBanner?.backgroundImage,
    suscribeNow: homeBanner?.suscribeNow

   
  };

  return attributesFormatted || null;
};


const getIntroductionAttributes = (introduction: any): IntroductionProps => {
  const attributesFormatted: IntroductionProps = {
    id: introduction?.id,
    title: introduction?.title,
    isActive: introduction?.isActive,
    content : introduction?.content,
    backgroundImage: introduction?.image,

   
  };

  return attributesFormatted || null;
};

const getmainAwardsAttributes = (mainAwards: any): MainAwardsProps => {
  const attributesFormatted: MainAwardsProps = {
    id: mainAwards?.id,
    title: mainAwards?.title,
    isActive: mainAwards?.isActive,

   
  };

  return attributesFormatted || null;
};



const getweeklyAwardsAttributes = (mainAwards: any): WeeklyAwardsProps => {
  const attributesFormatted: WeeklyAwardsProps = {
    id: mainAwards?.id,
    title: mainAwards?.title,
    isActive: mainAwards?.isActive,

   
  };

  return attributesFormatted || null;
};



const getStepsAttributes = (steps: any): StepsProps => {
  const attributesFormatted: StepsProps = {
    id: steps?.id,
    isActive: steps?.isActive,
    one: steps?.one,
    two: steps?.two,
    three: steps?.three,
    imageSteps:steps?.imageSteps,
    stepsButton:steps?.stepsButton
  };

  return attributesFormatted || null;
};

const getexclusiveBenefitsAttributes = (exclusiveBenefits: any): ExclusiveBenefitsProps => {
  const attributesFormatted: ExclusiveBenefitsProps = {
    id: exclusiveBenefits?.id,
    isActive: exclusiveBenefits?.isActive,
    title: exclusiveBenefits?.title,
    content: exclusiveBenefits?.content,
    card01: exclusiveBenefits?.card01,
    card01Url:exclusiveBenefits?.card01.benefitCardImage.data.attributes.formats.thumbnail.url,
    card02: exclusiveBenefits?.card02,
    card02Url:exclusiveBenefits?.card02.benefitCardImage.data.attributes.formats.thumbnail.url,
    
  };

  return attributesFormatted || null;
};


const validateExist = (info: Record<string, any> | null): null | Record<string, any> => {
  if (!info) return null;
  if (!info.isActive) return null;

  return info;
};

export const parseHomeData = (info: Record<string, any> | null) => ({
  hero: validateExist(info?.hero) && {
    title: info?.hero?.title,
    images: getImageAttributes(info?.hero?.image),
  },
  seo: getSeoAttributes(info?.seo),
  homeBanner: getHomeBannerAttibutes(info?.homeBanner),
  introduction: getIntroductionAttributes(info?.introduction),
  mainAwards: getmainAwardsAttributes(info?.mainAwards),
  weeklyAwards: getweeklyAwardsAttributes(info?.weeklyAwards),
  steps: getStepsAttributes(info?.steps),
  exclusiveBenefits: getexclusiveBenefitsAttributes(info?.exclusiveBenefits),

});

export const buildQueryParams = (params?: Record<string, unknown>): string => {
  const auxParams = new URLSearchParams();

  Object.entries(params || {}).forEach(([key, value]) => {
    if (Array.isArray(value)) value.forEach((item) => auxParams.append(key, item.toString()));
    else auxParams.append(key, String(value));
  });

  return decodeURIComponent(auxParams.toString());
};

export const camelCase = (str: string) => {
  const a = str.toLowerCase().replace(/[-_\s.]+(.)?/g, (_, c) => (c ? c.toUpperCase() : ''));
  return a.substring(0, 1).toLowerCase() + a.substring(1);
};
