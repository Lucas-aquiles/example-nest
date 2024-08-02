import ImageContainer from './ImageContainer';

const Introducttion = ({data}: any) => {
  const image = {
    original: 'https://sb.kaleidousercontent.com/67418/960x550/d1e78c2a25/individuals-a.png',
    alt: 'introducction',
  };

  return (
    <div className="inset-0 h-auto bg-black pt-9">
      <div className="mx-auto flex w-full flex-col items-center sm:w-3/4 sm:flex-row">
        <ImageContainer
          image={image}
          className="my-4 h-[150px] w-[80%] sm:my-8 sm:mr-12 sm:h-[500px] sm:w-[400px]"
          imageClassName="object-cover rounded-xl"
          priority
        />

        <div className="w-full px-4 text-center sm:w-2/5 sm:px-0 sm:text-left">
          <h2 className="text-2xl text-blue-50 sm:text-4xl">{data.title}</h2>
          <br />
          <p className="text-gray-400">{data.content}</p>
          <hr className="mt-6 border-gray-600 sm:mt-8" />
        </div>
      </div>
    </div>
  );
};

export default Introducttion;
