import {HeaderProps} from '../../types';
import Link from 'next/link';
import Button from '../Button';
import img from '../../public/img/logo.png';

const Header = ({buttonProps}: HeaderProps) => {
  // console.log(props.renderHeader)
  return (
    <header className="sticky top-0 z-50 bg-black shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-4">
          <div>
            {/* <a href="#" className="text-lg font-semibold text-gray-800">
              Logo
            </a> */}
            <img src={img.src} alt="Logo" className=" h-auto w-auto" />
          </div>
          <nav>
            <ul className="flex space-x-4">
              <li>
                <a href="#" className="text-white hover:text-white">
                  Inicio
                </a>
              </li>
              <li>
                <a href="#" className="text-white hover:text-white">
                  Sorteos
                </a>
              </li>
              <li>
                <Button
                  className="m-10 text-black"
                  children={buttonProps.buttonText}
                  href={buttonProps.buttonUrl}
                  color="green"
                ></Button>
              </li>
              {/* <li>
                {  props&&<Button  children={props.renderHeader.link_inicio.button_text}  />
}
              </li>
              <li>
                {  props&&<Button  children={props.renderHeader.Sorteos_link[0].button_text}  />
}
              </li> */}
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
