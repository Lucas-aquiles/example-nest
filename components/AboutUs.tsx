import Button from './Button';
import ImageContainer from './ImageContainer';

const AboutUs = ({data}: any) => {
  if (!data.isActive) {
    return null;
  }
  const image = {
    original: 'https://sb.kaleidousercontent.com/67418/960x550/d1e78c2a25/individuals-a.png',
    alt: 'introducction',
  };

  const AboutUsButtonTexts = data.aboutUsButton.buttonText;
  const AboutUsButtonUrl = data.aboutUsButton.buttonUrl;

  return (
    <div className="inset-0 h-auto bg-black	 py-9 ">
      <div className=" flex">
        <div className="mx-auto flex w-11/12 max-w-screen-lg flex-col items-center sm:w-3/4 sm:flex-row">
          <ImageContainer
            image={image}
            className="h-[150px] w-full flex-shrink-0 sm:h-[500px] sm:w-[500px]"
            imageClassName="object-cover rounded-xl"
            priority
          />
          <div className="mt-6 w-full sm:mt-0 sm:ml-8 sm:w-2/5">
            <h2 className="text-2xl text-blue-50 sm:text-4xl">{data.title}</h2>
            <br />
            <p className="text-gray-400">{data.content}</p>
            <div className="py-6">
              <Button href={AboutUsButtonUrl}>¡{AboutUsButtonTexts}!</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
