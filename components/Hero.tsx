import {HeroProps} from '../types/components';
import ImageContainer from './ImageContainer';

const Hero = ({data}: HeroProps) => {
  return (
    <section className="bg-black text-center">
      <h1 className="pt-[30px] text-[40px] text-white">{data.title}</h1>
      <div className="pt-[20px] pb-[60px]">
        <ImageContainer
          image={data.images || null}
          className="mx-auto mt-10 h-[150px] w-full  sm:h-[500px] sm:w-[500px]"
          priority
        />
      </div>
    </section>
  );
};

Hero.defaultProps = {};

export default Hero;
