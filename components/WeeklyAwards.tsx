import Carousel from './Carousel';

const WeeklyAwards = ({data}: any) => {
  const image = {
    original: 'https://sb.kaleidousercontent.com/67418/960x550/d1e78c2a25/individuals-a.png',
    alt: 'introducction',
  };

  return (
    <div id="weekly-awards" className="inset-0 h-auto bg-black	 py-10 ">
      <h1 className="text-center text-4xl font-extrabold text-white ">{data.title}</h1>
      <div>
        <div className=" mx-auto mt-4 h-500 w-2/3 bg-white  "></div>
        <div className=" mx-auto mt-4 h-auto  w-2/3 bg-white  ">
          <Carousel />
        </div>
      </div>
    </div>
  );
};

export default WeeklyAwards;
