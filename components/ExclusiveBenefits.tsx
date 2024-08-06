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
  const imageCard01 = data.card01.benefitCardImage
    ? `https://rifa-club-strapi-develop.onrender.com${data.card01.benefitCardImage}`
    : '';
  return (
    <div className="relative inset-0 min-h-[600px] bg-black py-8 px-4">
      <div className="inset-0 h-auto bg-transparent py-8 px-4">
        <div className="mx-auto flex max-w-screen-lg flex-col items-center lg:flex-row lg:justify-between">
          <div className="mb-8 flex w-full flex-col items-center lg:mb-0 lg:w-1/2 lg:items-start">
            <h2 className="text-center text-3xl font-bold text-blue-50 lg:text-left lg:text-4xl">
              {data.title}
            </h2>
            <p className="mt-4 text-center text-[#7A7A7A] lg:mt-6 lg:text-left">{data.content}</p>
          </div>
          <div className="mt-8 flex w-full flex-col gap-4 pl-9 lg:mt-0 lg:w-1/2 lg:flex-row">
            {data.card01?.isActive && (
              <div className="mb-4 flex w-full flex-col items-center lg:mb-0 lg:w-1/2">
                <Card className="z-49 flex h-[420px] w-full flex-col items-center bg-cardBackground p-4">
                  <div className="mb-3 flex w-full justify-center">
                    <ImageContainer
                      image={image}
                      className="h-[240px] w-[240px]"
                      imageClassName="object-cover"
                      priority
                    />
                  </div>
                  <p className="flex-1 text-center text-[15px] text-[#7A7A7A]">
                    {data.card01.benefitDescription}
                  </p>
                </Card>
              </div>
            )}
            {data.card02?.isActive && (
              <div className="flex w-full flex-col items-center lg:w-1/2">
                <Card className="z-49 flex h-[420px] w-full flex-col items-center bg-cardBackground p-4">
                  <div className="mb-3 flex w-full justify-center">
                    <ImageContainer
                      image={image}
                      className="h-[240px] w-[240px]"
                      imageClassName="object-cover"
                      priority
                    />
                  </div>
                  <p className="flex-1 text-center text-[15px] text-[#7A7A7A]">
                    {data.card02.benefitDescription}
                  </p>
                </Card>
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="absolute inset-x-0 bottom-0 h-[200px] bg-gradient-to-b from-transparent to-green-500"></div>
    </div>
  );
};

export default ExclusiveBenefits;
