import Button from './Button';
import Card from './Card';
import ImageContainer from './ImageContainer';
const Steps = ({data}: any) => {
  if (!data.isActive) {
    return null;
  }
  const image = {
    original: 'https://sb.kaleidousercontent.com/67418/960x550/d1e78c2a25/individuals-a.png',
    alt: 'introducction',
  };
  return (
    <div className="inset-0 h-auto bg-black">
      <div className="mx-auto flex w-full flex-col md:w-3/4 md:flex-row">
        <div className="flex h-auto w-full flex-wrap md:w-1/2">
          {data.individualSteps?.map(
            (step: any, index: number) =>
              step.isActive && (
                <Card key={index} className="m-5 h-[16rem] w-full bg-black sm:w-[18rem]">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-green-400 font-semibold text-black">
                    {step.numberStep}
                  </div>
                  <h2 className="my-3 text-xl font-bold text-white sm:text-2xl">
                    {step.stepTitle}
                  </h2>
                  <p className="text-slate-400">{step.stepDescription}</p>
                </Card>
              )
          )}
        </div>
        <div className="relative w-full py-6 px-6 md:w-1/2">
          <ImageContainer
            image={image}
            className="mb-5 h-[20rem] w-full sm:h-[19rem]"
            imageClassName="object-cover"
            priority
          />
          <div className="px-6 py-6">
            <Button>¡{data.stepsButton.buttonText}!</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Steps;