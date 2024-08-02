import { CSSProperties, Dispatch, ReactNode, SetStateAction } from 'react';
import HomeBanner from '../components/layout/HomeBanner';

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

export type HomeBannerProps = {
  id: number;
  title: string;
  isActive: boolean;
  backgroundImage: any;
  suscribeNow: any;
} | null;

export type IntroductionProps = {
  id: number;
  title: string;
  isActive: boolean;
  backgroundImage: any;
  content: string;
} | null;

export type MainAwardsProps = {
  id: number;
  title: string;
  isActive: boolean;
} | null;

export type WeeklyAwardsProps = {
  id: number;
  title: string;
  isActive: boolean;
} | null;

export type StepsProps = {
  id: number;
  isActive: boolean;
  one: any,
  two: any,
  three: any,
  imageSteps:any,
  stepsButton:any
} | null;

export type ExclusiveBenefitsProps={
  id: number;
  isActive: boolean;
  title: any;
  content: any;
  card01: any;
  card02: any;
  card01Url:string;
  card02Url
} | null;


export type PlansIntroductionProps = {
  id: number;
  isActive: boolean;
  title: string;
  content: string;
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

export type AboutUsProps = {
  id: number;
  title: string;
  isActive: boolean;
  backgroundImage: any;
  content: string;
  imageLeft: any;
  aboutUsButton: any;
} | null;
