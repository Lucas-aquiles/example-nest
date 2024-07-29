// import {HeaderProps} from '../../types';
import Link from 'next/link';
import Button from '../Button';

const Header = () => {

  // console.log(props.renderHeader)
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
