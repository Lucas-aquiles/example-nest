import Button from './Button';
import Card from './Card';
import BackgroundPage from './ImageBackground';
import ImageContainer from './ImageContainer';

const Steps = ({data}: any) => {
  console.log('ver', data);
  const image = {
    original: 'https://sb.kaleidousercontent.com/67418/960x550/d1e78c2a25/individuals-a.png',
    alt: 'introducction',
  };

  return (
    <div className="inset-0 h-auto  bg-black	 ">
      <div className=" mx-auto flex w-3/4  flex-row  ">
        <div className=" flex h-auto    w-1/2 flex-wrap">
          <Card className=" m-5 h-[16rem] w-[18rem] bg-black ">
            <div className="flex  h-10		 w-10 items-center justify-center rounded-full bg-green-400 font-semibold text-black">
              {data?.one.numberStep}
            </div>

            <h2 className="my-3 text-2xl font-bold text-white">{data.one.stepTitle}</h2>

            <p className="text-slate-400">{data?.one.stepDescription}</p>
          </Card>
          <Card className=" m-5 h-[16rem] w-[18rem] bg-black ">
            <div className="flex  h-10		 w-10 items-center justify-center rounded-full bg-green-400 font-semibold text-black">
              {data?.two.numberStep}
            </div>
            <h2 className="my-3 text-2xl font-bold text-white">{data.two.stepTitle}</h2>
            <p className="text-slate-400">{data?.two.stepDescription}</p>
          </Card>
          <Card className=" m-5 h-[16rem] w-[18rem] bg-black ">
            <div className="flex  h-10		 w-10 items-center justify-center rounded-full bg-green-400 font-semibold text-black">
              {data?.three.numberStep}
            </div>
            <h2 className="my-3 text-2xl font-bold text-white">{data.three.stepTitle}</h2>
            <p className="text-slate-400">{data?.three.stepDescription}</p>
          </Card>
        </div>

        <div className="w-1/2  relative ">
        <ImageContainer
          image={image}
          className=" h-[29rem] w-full   mb-5 "
          imageClassName="object-cover  " // Ajusta la imagen para cubrir el contenedor

          priority
        />
        <Button>¡{data.stepsButton.buttonText}!</Button>

        </div>
      </div>
    </div>
  );
};

export default Steps;
