import './Header.css';
import { BiMenuAltRight } from 'react-icons/bi';
import { useState } from 'react';

 

const Header = () => {
  const [menu, setMenu] = useState(false);

  const getMenuStyles = (menu) => {
    if (document.documentElement.clientWidth <= 800) {
      return { right: !menu && '-100%' };
    }
  };

  return (
    <section className='h-wrapper'>
      <div className='flexCenter paddings innerWidth h-container'>
        <img src='./logo.png' alt='' width={100} />
        
        <div className='flexCenter h-menu' style={getMenuStyles(menu)}>
          <a href='#'>Residence</a>
          <a href='#'>Our Values</a>
          <a href='#'>Contact Us</a>
          <a href='#'>Get Started</a>
          <button className='button'>
            <a href=''>Contact</a>
          </button>
        </div>

        <div className="menu-icon" onClick={() => setMenu((prev) => !prev)}>
          <BiMenuAltRight color="white" size={30} />
        </div>
      </div>
    </section>
  );
};

export default Header;
