import {HomeBannerProps} from '../../types';
import Button from '../Button';
import BackgroundPage from '../ImageBackground';

const HomeBanner = ({data}: HomeBannerProps) => {
  const url = data?.backgroundImage.data[0].attributes.url;
  console.log('aca lelgue ', data.backgroundImage.data[0].attributes.url);

  const images = {
    original: `https://rifa-club-strapi-develop.onrender.com${url}`,
    alt: 'Picture',
  };

  return (
    <div className="h-auto  bg-black	">
        <BackgroundPage image={images || null}  heightContainer="h-200">
        <div className="w-auto  flex flex-col items-center   ">
          <h1 className="w-96 p-10  text-center text-2xl text-white">{data.title}</h1>
          <div className='text-center mb-4'> 
          <Button>{data.suscribeNow.buttonText}</Button>
          </div>
        </div>
      </BackgroundPage>

     
    </div>
  );
};

export default HomeBanner;
