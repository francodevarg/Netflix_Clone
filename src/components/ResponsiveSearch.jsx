import React ,{ useState } from 'react'
import '../assets/styles/components/Navbar.scss';
import imgNotFound from '../assets/static/no-disponible.png';
/* For Searching Resulsts Responsive*/
const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p/original';
import requests from '../requests';
import axios from '../axios';


function ResponsiveSearch({toggler, handlerToggle}) {
    const activeSearch = toggler ? 'active-mobile' : '';

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
            <div className={`mobile__search container ${activeSearch}`} id='search-mobile'>
                <div className='search__content'>
          <button id='search-arrow-left' type='button' onClick={handlerToggle}>
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
    )
}

export default ResponsiveSearch
