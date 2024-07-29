import {ImageAttributesProps, SeoAttributesProps} from '../types/components';

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

const validateExist = (info: Record<string, any> | null): null | Record<string, any> => {
  if (!info) return null;
  if (!info.isActive) return null;

  return info;
};

export const parseHomeData = (attributes: Record<string, any>) => {
  const hero = attributes?.hero ?? {};
  const seo = attributes?.seo ?? {};
  const homeBanner = attributes?.homeBanner ? {
    buttonText: attributes.homeBanner.suscribeNow.buttonText,
    buttonUrl: attributes.homeBanner.suscribeNow.buttonUrl,
    title: attributes.homeBanner.title,
    backgroundImage: attributes.homeBanner.backgroundImage.data[0].attributes.url
  } : {};  // Obtener los datos del nuevo componente

  return { hero, seo, homeBanner };
};


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
