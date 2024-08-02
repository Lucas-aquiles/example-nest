import Image from 'next/legacy/image';
const BackgroundPage = ({image, children, heightContainer, col, row, span}: any) => {

  console.log(col,row,span)
  const url = 'https://sb.kaleidousercontent.com/67418/960x550/d1e78c2a25/individuals-a.png';
  const urlImage = '/img/p.png';
  return (
    <div
      className={` relative ${heightContainer}
     grid w-screen grid-cols-3 grid-rows-3  gap-4`}
    >
      <div className="absolute inset-0 translate-x-[-5%] scale-110 transform">
        <Image
          alt="rifa"
          src={urlImage}
          layout="fill"
          objectFit="cover"
          objectPosition="right" // Ajusta la posición de la imagen
          quality={100}
          priority
        />
      </div>
    
      <div
className={`absolute inset-0 z-50 ${span ? `col-span-${span}` : `col-span-1`} ${col ? `col-start-${col}` : `col-start-1`}  ${row ? `row-start-${row}` : `row-start-1`}  w-auto items-center`}
>
        {children}
      </div>
    </div>
  );
};
export default BackgroundPage;
