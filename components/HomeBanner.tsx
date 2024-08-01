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
      <h1 className="w-full max-w-x2 p-1 text-2x2 text-white leading-tight">{data.title}</h1>
      <div className="mt-4 mb-4">
        <Button>{data.suscribeNow.buttonText}</Button>
      </div>
    </div>
  </BackgroundPage>
</div>

  
  
  )  
};

export default HomeBanner;
