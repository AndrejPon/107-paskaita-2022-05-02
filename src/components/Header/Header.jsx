import { Link } from 'react-router-dom';
import Navigation from '../Navigation/Navigation';
import Logo from './Logo.style.js';

const Header = () => {
  return (
    <>
      {/* <div>
        <Logo>
          <img
            src='https://pbs.twimg.com/profile_images/1359389261489922048/qkRtuDrA_400x400.jpg'
            alt='Ranna logo'
          />
        </Logo>
      </div> */}

      <div>
        <Link>
          <Navigation />
        </Link>
      </div>
    </>
  );
};

export default Header;
