import React from 'react';
import Slider from 'react-slick';
import Card from './Card';
import ImageContainer from './ImageContainer';

const Carousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };

  const image = {
    original: 'https://sb.kaleidousercontent.com/67418/960x550/d1e78c2a25/individuals-a.png',
    alt: 'introducction',
  };

  return (
    <div className="h- bg-black   text-center">
      <Slider {...settings}>
        <Card className=" h-[20rem] w-[20rem] bg-black ">
          <ImageContainer image={image} className=" h-full w-full  " priority />
        </Card>
        <Card className=" h-[20rem] w-[20rem] bg-black ">
          <ImageContainer image={image} className=" h-full w-full " priority />
        </Card>
        <Card className=" h-[20rem] w-[20rem] bg-black ">
          <ImageContainer image={image} className=" h-full w-full " priority />
        </Card>
        <Card className=" h-[20rem] w-[20rem] bg-black ">
          <ImageContainer image={image} className=" h-full w-full " priority />
        </Card>
        <Card className=" h-[20rem] w-[20rem] bg-black ">
          <ImageContainer image={image} className=" h-full w-full " priority />
        </Card>
        <Card className=" h-[20rem] w-[20rem] bg-black ">
          <ImageContainer image={image} className=" h-full w-full " priority />
        </Card>
      </Slider>{' '}
    </div>
  );
};

export default Carousel;
