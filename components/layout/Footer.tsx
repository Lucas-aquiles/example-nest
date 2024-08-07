import {useAppContext} from '../../lib/AppContext';
import {FooterProps} from '../../types';
import Image from 'next/image';
import img from '../../public/img/logo1.png';
import icon from '../../public/icons/iconInstagram.png';

const Footer = ({}: FooterProps) => {
  const {configData} = useAppContext();
  return (
    <footer className="bg-gradient-to-b from-black to-[#209b5f] text-white">
      <div className="container mx-auto px-4 py-8">
        <div className="flex items-center justify-between">
          {/* Left section */}
          <div>
            <Image src={img} alt="Logo" className="m-5 h-20 w-auto" />
            <h1 className="text-4xl font-bold text-white">RifaClub</h1>
          </div>
          {/* Center section */}
          <div className="flex flex-col items-center">
            <ul>
              <li>
                <a href="#">Inicio</a>
              </li>
              <li>
                <a href="#">Sorteo</a>
              </li>
            </ul>
            <p className="mt-2 text-lg">&copy; RifaClub 2024 Todos los Derechos Reservados</p>
          </div>
          {/* Right section */}
          <div className="flex items-center">
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
              <Image src={icon} alt="Insta" className="m-5 h-8 w-auto" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
