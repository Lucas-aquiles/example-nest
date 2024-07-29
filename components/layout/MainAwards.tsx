import Button from '../Button';
import Carousel from '../Carousel';
import BackgroundPage from '../ImageBackground';
import ImageContainer from '../ImageContainer';

const MainAwards = ({data}: any) => {


const image = {  
    original: "https://sb.kaleidousercontent.com/67418/960x550/d1e78c2a25/individuals-a.png",
    alt: 'introducction',
  };

  return (
    <div className="h-auto inset-0 bg-black	 pt-10">
     <h1 className='text-white text-4xl text-center font-extrabold '>{data.title}</h1>
        <div> 
        <div  className=' mx-auto w-2/3 h-500 bg-white mt-4  '>
                                                                        </div>
        <div className=' mx-auto w-2/3 h-auto  bg-white mt-4  '>
        <Carousel/>

        </div>

        </div>
     
    </div>
  );
};

export default MainAwards;
