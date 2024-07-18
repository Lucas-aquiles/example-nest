import {HeaderProps} from '../../types';

const Header = ({}: HeaderProps) => {
  return (
    <header className="bg-white shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-4">
          <div>
            <a href="#" className="text-lg font-semibold text-gray-800">
              Logo
            </a>
          </div>
          <nav>
            <ul className="flex space-x-4">
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-800">
                  Inicio
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-800">
                  Acerca
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-800">
                  Servicios
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-800">
                  Contacto
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
