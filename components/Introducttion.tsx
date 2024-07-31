import Button from './Button';
import BackgroundPage from './ImageBackground';
import ImageContainer from './ImageContainer';

const Introducttion = ({data}: any) => {
  const image = {
    original: 'https://sb.kaleidousercontent.com/67418/960x550/d1e78c2a25/individuals-a.png',
    alt: 'introducction',
  };

  return (
    <div className="inset-0 h-auto bg-black">
  <div className="mx-auto flex flex-col sm:flex-row w-full sm:w-3/4 items-center">
    <ImageContainer
      image={image}
      className="h-[150px] w-[80%] sm:h-[500px] sm:w-[400px] my-4 sm:my-8 sm:mr-12"
      imageClassName="object-cover rounded-xl"
      priority
    />

    <div className="w-full sm:w-2/5 text-center sm:text-left px-4 sm:px-0">
      <h2 className="text-2xl sm:text-4xl text-blue-50">{data.title}</h2>
      <br />
      <p className="text-gray-400">{data.content}</p>
      <hr className="mt-6 sm:mt-8 border-gray-600" />
    </div>
  </div>
</div>



  
  
  );
};

export default Introducttion;

