import {HomeBannerProps} from '../types';
import Button from './Button';
import BackgroundPage from './ImageBackground';

const HomeBanner = ({data}: HomeBannerProps) => {
  const url = data?.backgroundImage.data[0].attributes.url;
  console.log('aca lelgue ', data.backgroundImage.data[0].attributes.url);
  const images = {
    original: `https://rifa-club-strapi-develop.onrender.com${url}`,
    alt: 'Picture',
  };
  return (
    <div className="relative z-0 h-auto bg-black">
  <BackgroundPage image={images || null} heightContainer="h-150">
  <div className="relative z-0 flex flex-col items-center justify-center h-full w-full text-center m-4">
  <h1 className="w-full max-w-xl p-1 text-2x4 text-black leading-tight break-words sm:text-2xl sm:leading-snug sm:m-auto">
    {data.title}
  </h1>
  <div className="mt-4 mb-8 sm:mt-2 sm:mb-auto sm:mx-4 sm:ml-6">
    <Button className="w-full sm:w-auto">{data.suscribeNow.buttonText}</Button>
  </div>
</div>



  </BackgroundPage>
</div>

  
  
  )  
};

export default HomeBanner;
