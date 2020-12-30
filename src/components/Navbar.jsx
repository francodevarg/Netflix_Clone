import React, { useState } from 'react';
import '../assets/styles/components/Navbar.scss';
import logo from '../assets/static/netflix-logo.png';
import imgNotFound from '../assets/static/no-disponible.png';
import requests from '../requests';
import axios from '../axios';

/* For Searching Resulsts Responsive*/
const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p/original';

const Navbar = () => {
  {
    /* Menu Responsive Buttons*/
  }
  const [burgerMenu, setBurgerMenu] = useState(false);
  const [searchMenu, setSearchMenu] = useState(false);
  const [userMenu, setUserMenu] = useState(false);

  {
    /*Togglers and Class Conditionals for Menus Responsive*/
  }
  const activeBurger = burgerMenu ? 'active-mobile' : '';
  const toggleMenuBurger = () => {
    burgerMenu ? setBurgerMenu(false) : setBurgerMenu(true);
  };

  const activeSearch = searchMenu ? 'active-mobile' : '';
  const toggleSearchMenu = () => {
    searchMenu ? setSearchMenu(false) : setSearchMenu(true);
  };

  const activeUser = userMenu ? 'active-mobile' : '';
  const toggleUserMenu = () => {
    userMenu ? setUserMenu(false) : setUserMenu(true);
  };

  {
    /* Search Responsive Query State*/
  }
  const [query, setQuery] = useState('');
  const [results, setSearchResults] = useState([]);

  function handleSearchQuery(e) {
    setQuery(e.target.value);
    if (e.target.value.length > 2) {
      axios
        .get(`${requests.search}&query=${query}`)
        .then((response) => {
          setSearchResults(response.data.results);
        })
        .catch((error) => console.log(error));
    }
  }

  const [crossSearch, setCrossSearch] = useState(false);
  const activeCrossSearch = crossSearch ? 'yes-display' : 'no-display';

  const handleCrossRender = (e) => {
    if (e.target.value.length > 0) {
      setCrossSearch(true);
    } else if (e.target.value.length === 0) {
      setCrossSearch(false);
    }
  };

  const cleanSearch = (e) => {
    setQuery('');
    e.target.name = '';
    setCrossSearch(false);
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
            <li className='navbar__item'>Inicio</li>
            <li className='navbar__item'>Series</li>
            <li className='navbar__item'>Películas</li>
            <li className='navbar__item'>Novedades Populares</li>
            <li className='navbar__item'>Mi Lista</li>
          </ul>
          {/*<!-- End of Left Side --> */}
        </div>

        {/* <!-- Right Side --> */}
        <div className='navbar__items--right'>
          <button className='navbar__search-btn' id='search-btn' type='button' onClick={toggleSearchMenu}>
            <box-icon name='search' color='#fff' />
          </button>
          {/* <!-- Show when is not mobile -->
            <!-- <SearchDropdown/> -->
            <!-- Niños -->
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
      <div className={`mobile__menu mobile-burger container ${activeBurger}`} id='menu-burger'>
        <ul className='mobile-burger__items'>
          <li className='mobile-burger__item'>
            <a className='mobile-burger__link mobile-burger__link--active' href='#Ssas'>
              Inicio
            </a>
          </li>
          <li className='mobile-burger__item'>
            <a className='mobile-burger__link' href='#Svf'>
              Series
            </a>
          </li>
          <li className='mobile-burger__item'>
            <a className='mobile-burger__link' href='#Ssawq'>
              Películas
            </a>
          </li>
          <li className='mobile-burger__item'>
            <a className='mobile-burger__link' href='#Sgadsa'>
              Novedades populares
            </a>
          </li>
          <li className='mobile-burger__item'>
            <a className='mobile-burger__link' href='#Sbttt'>
              Ver de nuevo
            </a>
          </li>
        </ul>
      </div>
      <div className={`mobile__menu mobile-user container ${activeUser}`} id='menu-user'>
        User Menu
      </div>
      <div className={`mobile__search container ${activeSearch}`} id='search-mobile'>
        <div className='search__content'>
          <button id='search-arrow-left' type='button' onClick={toggleSearchMenu}>
            <box-icon name='arrow-back' size='sm' color='#fff' />
          </button>
          <div className='search__form'>
            <input
              className='search__input'
              type='text'
              name='searchInput'
              placeholder='Buscar en Netflix'
              autoComplete='off'
              onInput={handleSearchQuery}
              onChange={handleCrossRender}
              value={query}
            />
            <div className='search__icon'>
              <box-icon name='search' size='sm' color='#fff' />
            </div>

            <div className={`search__cross ${activeCrossSearch}`}>
              <button type='button' onClick={cleanSearch}>
                <box-icon name='x-circle' type='solid' color='#e50914' />
              </button>
            </div>
          </div>
        </div>
        <div className='search__results'>
          <ul className='search__results-list'>
            {!query && <li>Ingrese el nombre de una película o serie</li>}
            {query.length > 0 &&
              results.map((movie) => (
                <li className='search__results-element ' key={movie.id}>
                  {(movie.media_type === 'tv' || movie.media_type === 'movie') && movie.poster_path && (
                    <img className='results-img' src={`${IMAGE_BASE_URL}${movie.poster_path}`} alt={movie.name} />
                  )}
                  {(movie.media_type === 'tv' || movie.media_type === 'movie') && !movie.poster_path && (
                    <img className='results-img' src={imgNotFound} alt={movie.name} />
                  )}
                  {movie.media_type === 'person' && movie.profile_path && (
                    <img className='results-img' src={`${IMAGE_BASE_URL}${movie.profile_path}`} alt={movie.name} />
                  )}
                  {movie.media_type === 'person' && !movie.profile_path && (
                    <img className='results-img' src={imgNotFound} alt={movie.name} />
                  )}
                  <h6 className='results-title'>{movie.title || movie.name}</h6>
                </li>
              ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;
