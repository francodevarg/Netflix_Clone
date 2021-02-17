import React, { useState } from 'react';
import '../assets/styles/components/Navbar.scss';
import logo from '../assets/static/netflix-logo.png';
import avatar from '../assets/static/avatar-yellow.jpg';
import ResponsiveBurgerMenu from './ResponsiveBurgerMenu';
import ResponsiveUserMenu from './ResponsiveUserMenu';
import ResponsiveSearch from './ResponsiveSearch';

const Navbar = () => {
  {
    /* Menu Responsive Buttons*/
  }
  const [burgerMenu, setBurgerMenu] = useState(false);
  const [searchMenu, setSearchMenu] = useState(false);
  const [userMenu, setUserMenu] = useState(false);

  {
    /*Togglers*/
  }
  const toggleMenuBurger = () => {
    burgerMenu ? setBurgerMenu(false) : setBurgerMenu(true);
  };
  const toggleSearchMenu = () => {
    searchMenu ? setSearchMenu(false) : setSearchMenu(true);
  };
  const toggleUserMenu = () => {
    userMenu ? setUserMenu(false) : setUserMenu(true);
  };

  return (
    <>
      <nav className='navbar container'>
        {/*<!-- Left Side -->*/}
        <div className='navbar__items--left'>
          <button className='navbar__burger-btn' id='burger-btn' onClick={toggleMenuBurger} type='button'>
            {!burgerMenu && <box-icon name='menu' color='#fff' />}
            {burgerMenu && <box-icon name='x-circle' type='solid' color='#fff' />}
          </button>
          {/*<!-- Logo -->*/}
          <figure>
            <img className='navbar__logo' src={logo} alt='Netflix Logo' />
          </figure>
          {/*<!-- Shown when is not mobile -->*/}
          <ul className='navbar__list'>
            <li className='navbar__item item--active'>Inicio</li>
            <li className='navbar__item'>Series</li>
            <li className='navbar__item'>Películas</li>
            <li className='navbar__item'>Novedades populares</li>
            <li className='navbar__item'>Mi lista</li>
            <li className='navbar__item'>Ver de nuevo</li>
          </ul>
          {/*<!-- End of Left Side --> */}
        </div>
        {/* <!-- Right Side --> */}
        <div className='navbar__items--right'>
          <button className='navbar__search-btn' id='search-btn' type='button' onClick={toggleSearchMenu}>
            <box-icon name='search' color='#fff' />
          </button>
          <ul className="list__right">
            <li className='navbar__item'><box-icon name='search-alt-2' color='#ffffff' ></box-icon></li>
            <li className='navbar__item'>NIÑOS</li>
            <li className='navbar__item'><box-icon name='gift' color='#ffffff' ></box-icon></li>
            <li className='navbar__item'><box-icon name='bell' type='solid' color='#ffffff' ></box-icon></li>
            <li className="navbar__item">
              <figure>
                <img className='avatar-profile' src={avatar} alt=""/>
              </figure>
            </li>
          </ul>
          {/* <!-- Show when is not mobile -->
            <!-- <SearchDropdown/> -->
            <!-- Icono Regalo -->
            <!-- Icono Noticaciones -->
            <!-- End of Show when not mobile -->
          */}
          <button className='navbar__user-btn' id='user-btn' onClick={toggleUserMenu} type='button'>
            {!userMenu && <box-icon name='user' color='#fff' />}
            {userMenu && <box-icon name='user' type='solid' color='#fff' />}
          </button>
          {/*<!-- End of Right Side -->*/}
        </div>
      </nav>
      {/*<!-- Mobile Containers -->*/}
      <ResponsiveBurgerMenu toggler={burgerMenu}/>
      <ResponsiveUserMenu toggler={userMenu}/>
      <ResponsiveSearch toggler={searchMenu} handlerToggle={toggleSearchMenu}/>
    </>
  );
};

export default Navbar;
