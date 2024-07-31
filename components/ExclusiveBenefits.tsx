import Card from './Card';
import ImageContainer from './ImageContainer';

const ExclusiveBenefits = ({data}: any) => {
  const image = {
    original: `https://rifa-club-strapi-develop.onrender.com${data.card01Url}`,
    alt: 'introducction',
  };
  const imageCard01 = data.card01.benefitCardImage ? `https://rifa-club-strapi-develop.onrender.com${data.card01.benefitCardImage}` : '';
  console.log("=================================================================================");
  return (
    <div className="inset-0 h-auto bg-black py-8 px-4">
      <div className="mx-auto max-w-screen-lg flex flex-col lg:flex-row items-center lg:justify-between">
        <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start mb-8 lg:mb-0">
          <h2 className="text-3xl lg:text-4xl text-blue-50 font-bold text-center lg:text-left">{data.title}</h2>
          <p className="text-[#7A7A7A] text-center lg:text-left mt-4">{data.content}</p>
        </div>
        <div className="w-full lg:w-1/2 flex flex-col lg:flex-row gap-4">
          <div className="w-full lg:w-1/2 flex flex-col items-center">
            <Card className="w-full h-[400px] bg-cardBackground flex flex-col items-center p-4">
              <div className="w-full flex justify-center mb-3">
                <ImageContainer
                  image={image}
                  className="h-[240px] w-[240px]"
                  imageClassName="object-cover"
                  priority
                />
              </div>
              <p className="text-center text-[15px] text-[#7A7A7A] flex-1">{data.card01.benefitDescription}</p>
            </Card>
          </div>
          <div className="w-full lg:w-1/2 flex flex-col items-center">
            <Card className="w-full h-[400px] bg-cardBackground flex flex-col items-center p-4">
              <div className="w-full flex justify-center mb-3">
                <ImageContainer
                  image={image}
                  className="h-[240px] w-[240px]"
                  imageClassName="object-cover"
                  priority
                />
              </div>
              <p className="text-center text-[15px] text-[#7A7A7A] flex-1">{data.card02.benefitDescription}</p>
            </Card>
          </div>
        </div>
      </div>
    </div>

  );
};

export default ExclusiveBenefits;
