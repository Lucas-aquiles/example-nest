import Image from 'next/legacy/image';
const BackgroundPage = ({image, children, heightContainer, col, row, span }: any) => {
  const url = 'https://sb.kaleidousercontent.com/67418/960x550/d1e78c2a25/individuals-a.png';
  const urlImage= "/img/p.png"
  return (
    <div
      className={` relative ${heightContainer}
     grid w-screen grid-cols-3 grid-rows-3  gap-4`}{/*holiwis*/}
    >
      <div className="absolute inset-0 transform scale-110 translate-x-[-5%]">
      <Image
          alt="rifa"
          src={urlImage}
          layout="fill"
          objectFit="cover"
          objectPosition="right"   // Ajusta la posición de la imagen
          quality={100}
          priority
        />           </div>
<div className={ `absolute inset-0 z-50  col-span-1  col-start-${col}  row-start-${row}  w-auto  items-center` }>        {children}
      </div>
    </div>
  );
};
export default BackgroundPage;