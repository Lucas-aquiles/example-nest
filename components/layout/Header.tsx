import {useState, useContext, RefObject} from 'react';
import {HeaderProps} from '../../types';
import Button from '../Button';
// import img from '../../public/img/logo.png';

const Header = ({}: HeaderProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="sticky top-0 z-50 bg-black shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex h-20 items-center justify-between py-2">
          <div>
            {/* <img src={img.src} alt="Logo" className=" h-8 w-auto" /> */}
          </div>
          <button
            onClick={toggleMenu}
            type="button"
            className="text-white focus:outline-none md:hidden"
            aria-label="Toggle menu"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
          <nav className={`md:flex md:items-center ${isOpen ? 'block' : 'hidden'} md:block`}>
            <ul
              className={`mt-2 flex flex-col md:mt-0 md:flex-row md:space-x-4 ${
                isOpen ? 'block' : 'hidden'
              } md:flex`}
            >
              <li>
                <a href="#" className="text-green-400 hover:text-white">
                  Inicio
                </a>
              </li>
              <li>
                <a href="#weekly-awards" className="text-green-400 hover:text-white">
                  Sorteos
                </a>
              </li>
            </ul>
          </nav>
          <div className="flex items-center rounded-lg px-3 py-1 text-sm md:text-base">
            <Button
              className="m-4 rounded-lg bg-green-500 px-3 py-1 text-xs text-black hover:bg-green-600 md:text-sm lg:text-base"
              children="! Suscribete Aqui ¡"
              href="#"
            ></Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
