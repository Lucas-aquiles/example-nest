import Image from "next/legacy/image";
import { classNames } from '../lib/functions';
import { ImageContainerProps } from '../types/components';

const BackgroundPage = ({ image, children,heightContainer}:any) => {
  const url = "https://sb.kaleidousercontent.com/67418/960x550/d1e78c2a25/individuals-a.png";
  

  return (
    <div className= { ` relative ${heightContainer}
     w-screen grid grid-cols-3 grid-rows-3  gap-4`}>
      <div className="absolute inset-0 z-0">
        <Image
          alt="Mountains"
          src={url}
          layout="fill"
          objectFit="cover"
          quality={100}
          priority
        />
      </div>
      
      <div className="absolute inset-0 z-50  w-auto items-center col-start-1  col-span-1  row-start-2 ">
        {children}
      </div>
    </div>
  );
};

export default BackgroundPage;
