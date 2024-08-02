import {useAppContext} from '../../lib/AppContext';
import {FooterProps} from '../../types';
// TODO revisar como usar imagenes con nextJS
// import img from '../../public/img/logo1.png';
// import icon from '../../public/icons/iconInstagram.png';

const Footer = ({}: FooterProps) => {
  const {configData} = useAppContext();
  return (
    <footer className="bg-gradient-to-b from-black to-green-500 text-white">
      <div className="container mx-auto px-4 py-8">
        <div className="flex items-center justify-between">
          {/* Left section */}
          <div>
            {/* <img src={img.src} alt="Logo" className="m-5 h-20 w-auto" /> */}
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
            <p className="mt-6 text-lg pl-10 pr-4">&copy; RifaClub 2024 Todos los Derechos Reservados</p>
          </div>
          {/* Right section */}
          <div className="flex items-center m-3">
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
              {/* <img src={icon.src} alt="Insta" className="m-5 h-8 w-auto " /> */}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
