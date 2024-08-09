import Card from './Card';
import ImageContainer from './ImageContainer';

const ExclusiveBenefits = ({data}: any) => {
  if (!data.isActive) {
    return null;
  }

  const defaultImage = {
    original: 'https://sb.kaleidousercontent.com/67418/960x550/d1e78c2a25/individuals-a.png',
    alt: 'introduction',
  };

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
            {data.cards?.map(
              (card: any, index: number) =>
                card.isActive && (
                  <div
                    key={index}
                    className="relative z-10 flex w-full flex-col items-center lg:w-1/2"
                  >
                    <Card className="flex h-[420px] w-full flex-col items-center bg-cardBackground p-4">
                      <div className="mb-3 flex w-full justify-center">
                        <ImageContainer
                          image={
                            card.cardUrl
                              ? {original: card.cardUrl, alt: 'card image'}
                              : defaultImage
                          }
                          className="h-[240px] w-[240px]"
                          imageClassName="object-cover"
                          priority
                        />
                      </div>
                      <p className="flex-1 text-center text-[15px] text-[#7A7A7A]">
                        {card.benefitDescription}
                      </p>
                    </Card>
                  </div>
                )
            )}
          </div>
        </div>
      </div>
      <div className="absolute inset-x-0 bottom-0 z-0 h-[200px] bg-gradient-to-b from-transparent to-[#1c4e36]"></div>
    </div>
  );
};

export default ExclusiveBenefits;