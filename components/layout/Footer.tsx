import {useAppContext} from '../../lib/AppContext';

import {FooterProps} from '../../types';

const Footer = ({}: FooterProps) => {
  const {configData} = useAppContext();
  return (
    <footer className="bg-gray-800 text-white">
      <div className="container mx-auto px-4 py-8">
        <div className="flex items-center justify-center">
          <p className="text-lg">&copy; 2024 Todos los derechos reservados</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
