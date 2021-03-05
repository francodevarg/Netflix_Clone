import React, { useState } from 'react';
import '../assets/styles/components/Navbar.scss';
import logo from '../assets/static/netflix-logo.png';
/*Components*/
import ProfileMenu from './ProfileMenu';
import ResponsiveBurgerMenu from './ResponsiveBurgerMenu';
import ResponsiveUserMenu from './ResponsiveUserMenu';
import ResponsiveSearch from './ResponsiveSearch';

const Navbar = () => {
  {/* Menu Responsive Buttons State: (enabled, disables)*/}
  const [burgerMenu, setBurgerMenu] = useState(false);
  const [searchMenu, setSearchMenu] = useState(false);
  const [userMenu, setUserMenu] = useState(false);

  { /*Togglers*/}
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
        <div className='navbarLeft'>
          {/*<!-- Burger Button Mobile -->*/}
          <button className='navbar__burger-btn display-only-phone' onClick={toggleMenuBurger} id='burger-btn' type='button'>
            {!burgerMenu && <box-icon name='menu' color='#fff' />}
            { burgerMenu && <box-icon name='x-circle' type='solid' color='#fff' />}            
          </button>
          {/*<!-- Logo -->*/}
          <figure>
            <img className='navbar__logo' src={logo} alt='Netflix Logo' />
          </figure>
          {/*<!-- Shown when is tablet -->*/}
          <ul className='navbarLeft-list display-when-tablet'>
            <li className='navbar__item item--active'>Inicio</li>
            <li className='navbar__item'>Series</li>
            <li className='navbar__item'>Películas</li>
            <li className='navbar__item'>Novedades populares</li>
            <li className='navbar__item display-only-desktop'>Mi lista</li>
            <li className='navbar__item display-only-desktop'>Ver de nuevo</li>
          </ul>
        </div>
        <div className='navbarRight'>
          <button className='navbar__search-btn display-only-phone' onClick={toggleSearchMenu} id='search-btn' type='button'>
            <box-icon name='search' color='#fff' />
          </button>
          <ul className="navbarRight-list display-when-tablet">
            <li className='navbar__item'>
              <box-icon name='search-alt-2' color='#fff'/>
            </li>
            <li className='navbar__item display-only-desktop'>NIÑOS</li>
            <li className='navbar__item display-only-desktop'>
              <box-icon name='gift' color='#fff'/>
            </li>
            <li className='navbar__item'>
              <box-icon name='bell' type='solid' color='#fff' />
            </li>
            <li className="navbar__item">
              <ProfileMenu/>
            </li>
          </ul>
          <button className='navbar__user-btn display-only-phone' onClick={toggleUserMenu} id='user-btn' type='button'>
            {!userMenu && <box-icon name='user' color='#fff' />}
            { userMenu && <box-icon name='user' type='solid' color='#fff' />}
          </button>
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
