import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import Image from './images/forthea.png';

function Navbar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
          <Link to='/' className='navbar-links-logo' onClick={closeMobileMenu}>
            <img src={Image} alt="For The A" width='160' height='95'/>
          </Link>
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <div className='nav-item'>
              <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                Home
              </Link>
            </div>
            <div className='nav-item'>
              <Link
                to='/about'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                About
              </Link>
            </div>
            <div className='nav-item'>
              <Link
                to='/charlie'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Charlie Morton
              </Link>
            </div>
            <div>
              <Link
                to='/max'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Max Fried
              </Link>
            </div>           
            <div className='nav-item'>
              <Link
                to='/ian'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Ian Anderson
              </Link>
            </div>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;