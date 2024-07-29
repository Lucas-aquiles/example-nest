import Button from '../Button';
import BackgroundPage from '../ImageBackground';
import ImageContainer from '../ImageContainer';

const Introducttion = ({data}: any) => {

const image = {  
    original: "https://sb.kaleidousercontent.com/67418/960x550/d1e78c2a25/individuals-a.png",
    alt: 'introducction',
  };

  return (
    <div className="h-auto inset-0 bg-black	 ">
        <div className=' flex flex-row items-center  w-3/4 mx-auto '> 

      <ImageContainer  image={image}
       className="  h-[150px] w-full  sm:h-[500px] sm:w-[500px]"
       priority />

      <div className='  w-2/5  mx-auto  '>
        <h2 className='text-blue-50 text-4xl'>{data.title}</h2>
        <br/>
        <p className='text-gray-400'>{data.content}</p>
      </div>
      </div>


     
    </div>
  );
};

export default Introducttion;
