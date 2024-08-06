import {HomeBannerProps} from '../types';
import Button from './Button';
import BackgroundPage from './BackgroundPage';

const HomeBanner = ({data}: HomeBannerProps) => {
  if (!data.isActive) {
    return null;
  }
  const url = data?.backgroundImage.data[0].attributes.url;

  const images = {
    original: `https://rifa-club-strapi-develop.onrender.com${url}`,
    alt: 'Picture',
  };
  return (
    <div className="relative z-0 h-auto bg-black">
      <BackgroundPage image={images || null} heightContainer="h-150" col="1" row="2" span="1">
        <div className="relative z-0 mx-4 flex h-full w-full flex-col items-center justify-center text-center">
          <h1 className="text-2x4 w-full max-w-xl break-words p-1 leading-tight text-white sm:m-auto sm:text-2xl sm:leading-snug">
            {data.title}
          </h1>
          <div className="mt-0 mb-3 sm:mx-4 sm:mt-2 sm:mb-auto sm:ml-6">
            {data && (
              <Button className=" w-full text-3xl font-bold sm:w-auto">
                {data.suscribeNow.buttonText}
              </Button>
            )}
          </div>
        </div>
      </BackgroundPage>
    </div>
  );
};

export default HomeBanner;
