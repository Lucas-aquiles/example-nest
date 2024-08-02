import React from 'react';
import Slider from 'react-slick';
import Card from './Card';
import ImageContainer from './ImageContainer';

// customPaging: () => (
//   <div className='bg-white  hover:bg-green-700 active:bg-green-700  '
//     style={{
//       width: "10px",
//       height: "10px",
//       borderRadius: "50%",

//     }}

//   ></div>
// )

const Carousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3, // Default setting for desktop
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    cssEase: 'linear',
    dotsClass: 'custom-dots',
    responsive: [
      {
        breakpoint: 1024, // Tablet and above
        settings: {
          slidesToShow: 2, // Show 2 slides on tablets
        },
      },
      {
        breakpoint: 768, // Mobile devices
        settings: {
          slidesToShow: 1, // Show only 1 slide on mobile
        },
      },
    ],
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
      </Slider>
    </div>
  );
};

export default Carousel;
