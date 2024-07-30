import Button from './Button';
import BackgroundPage from './ImageBackground';
import ImageContainer from './ImageContainer';

const Introducttion = ({data}: any) => {
  const image = {
    original: 'https://sb.kaleidousercontent.com/67418/960x550/d1e78c2a25/individuals-a.png',
    alt: 'introducction',
  };

  return (
    <div className="inset-0 h-auto bg-black	 ">
      <div className=" mx-auto flex w-3/4  flex-row items-center ">
        <ImageContainer
          image={image}
          className="  h-[150px] w-full  sm:h-[500px] sm:w-[500px]"
          imageClassName="object-cover rounded-xl" // Ajusta la imagen para cubrir el contenedor

          priority
        />

        <div className="  mx-auto  w-2/5  ">
          <h2 className="text-4xl text-blue-50">{data.title}</h2>
          <br />
          <p className="text-gray-400">{data.content}</p>
        </div>
      </div>
    </div>
  );
};

export default Introducttion;
