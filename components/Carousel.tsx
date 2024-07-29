import React from 'react';
import Slider from "react-slick";
import {classNames} from '../lib/functions';
import Card from './Card';
import ImageContainer from './ImageContainer';



const Carousel = () => { 

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1
      };

      const image = {  
        original: "https://sb.kaleidousercontent.com/67418/960x550/d1e78c2a25/individuals-a.png",
        alt: 'introducction',
      };
    
    return(
  <div className='bg-black text-center   h-'>


<Slider {...settings}>
      <Card className="w-[24rem] h-[20rem] mx-3 bg-black ">

<ImageContainer  image={image}
       className=" w-full h-full  "
       priority />         
        </Card>
        <Card className="w-[24rem] h-[20rem] mx-3 bg-black ">

<ImageContainer  image={image}
       className=" w-full h-full "
       priority />         
        </Card>
        <Card className="w-[24rem] h-[20rem] mx-3 bg-black ">

<ImageContainer  image={image}
       className=" w-full h-full "
       priority />         
        </Card>
        <Card className="w-[24rem] h-[20rem] mx-3 bg-black ">

<ImageContainer  image={image}
       className=" w-full h-full "
       priority />         
        </Card>
        <Card className="w-[24rem] h-[20rem] mx-3 bg-black ">

<ImageContainer  image={image}
       className=" w-full h-full "
       priority />         
        </Card>
        <Card className="w-[24rem] h-[20rem] mx-3 bg-black ">

<ImageContainer  image={image}
       className=" w-full h-full "
       priority />         
        </Card>
    </Slider>  </div>
    )
};



export default Carousel;
