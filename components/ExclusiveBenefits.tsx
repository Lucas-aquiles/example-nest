import Card from './Card';
import ImageContainer from './ImageContainer';
const ExclusiveBenefits = ({data}: any) => {
  if (!data.isActive) {
    return null;
  }
  const image = {
    original: 'https://sb.kaleidousercontent.com/67418/960x550/d1e78c2a25/individuals-a.png',
    alt: 'introducction',
  };
  const imageCard01 = data.card01.benefitCardImage ? `https://rifa-club-strapi-develop.onrender.com${data.card01.benefitCardImage}` : '';
  return (
  <div className="relative bg-black inset-0 min-h-[600px] py-8 px-4">
    <div className="inset-0 h-auto bg-transparent py-8 px-4">
      <div className="mx-auto max-w-screen-lg flex flex-col lg:flex-row items-center lg:justify-between">
        <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start mb-8 lg:mb-0">
          <h2 className="text-3xl lg:text-4xl text-blue-50 font-bold text-center lg:text-left">{data.title}</h2>
          <p className="text-[#7A7A7A] text-center lg:text-left mt-4 lg:mt-6">{data.content}</p>
        </div>
        <div className="pl-9 w-full lg:w-1/2 flex flex-col lg:flex-row gap-4 mt-8 lg:mt-0">
        {data.card01?.isActive && (
          <div className="w-full lg:w-1/2 flex flex-col items-center mb-4 lg:mb-0">
            <Card className="w-full h-[420px] bg-cardBackground flex flex-col items-center p-4 z-49">
              <div className="w-full flex justify-center mb-3">
                <ImageContainer
                  image={image}
                  className="h-[240px] w-[240px]"
                  imageClassName="object-cover"
                  priority
                />
              </div>
              <p className="text-center text-[15px] text-[#7A7A7A] flex-1 pb-4">
                {data.card01.benefitDescription}
              </p>
            </Card>
          </div>
        )}
        {data.card02?.isActive && (
          <div className="w-full lg:w-1/2 flex flex-col items-center">
            <Card className="w-full h-[420px] bg-cardBackground flex flex-col items-center p-4 z-49">
              <div className="w-full flex justify-center mb-3">
                <ImageContainer
                  image={image}
                  className="h-[240px] w-[240px]"
                  imageClassName="object-cover"
                  priority
                />
              </div>
              <p className="text-center text-[15px] text-[#7A7A7A] flex-1 pb-4">
                {data.card02.benefitDescription}
              </p>
            </Card>
          </div>
        )}
        </div>
      </div>
    </div>
      <div className="absolute inset-x-0 bottom-0 h-[200px] bg-gradient-to-b from-transparent to-green-500">
    </div>
  </div>
  );
};
export default ExclusiveBenefits;