import {CSSProperties, Dispatch, ReactNode, SetStateAction} from 'react';

export type ImageAttributesProps = {
  alt: string;
  original: string;
  lg?: string;
  md?: string;
  sm?: string;
  xs?: string;
} | null;

export type SeoAttributesProps = {
  keywords: string;
  metaDescription: string;
  metaTitle: string;
  preventIndexing: boolean;
  shareImage: {
    image: ImageAttributesProps;
    alt: string;
  };
} | null;

export interface HeroProps {
  data: {
    title: string;
    images?: ImageAttributesProps;
  };
}

export interface ImageContainerProps {
  image: ImageAttributesProps;
  className?: string;
  imageClassName?: string;
  loadingType?: 'lazy' | 'eager';
  objectFit?: string;
  priority?: boolean;
}
