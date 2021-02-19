import React, { useState, useEffect } from 'react';
import '../assets/styles/components/Banner.scss';
import axios from '../axios';

import requests from '../requests';

const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p/original';

const Banner = () => {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    axios.get(requests.fetchTrending).then((response) => {
      setMovie(response.data.results[Math.floor(Math.random() * response.data.results.length - 1)]);
    });
  }, []);

  return (
    <header
      className='banner'
      style={{
        backgroundSize: 'cover',
        backgroundRepeat:'no-repeat',
        backgroundImage: `url('${IMAGE_BASE_URL}/${movie?.backdrop_path}')`,
        backgroundPosition: 'center 25%',
      }}
    >
      <div className='banner__contents'>
        <div className='banner--fadeBottom'>
          <div className='banner__data'>
            <h1 className='banner__title'>{movie?.title || movie?.name || movie?.original_name}</h1>
            <p className="banner__overview display-only-desktop">{movie?.overview}</p>
          </div>
          <div className='banner__actions'>
            <a className='banner__action-add-list display-only-phone' href='#add'>
              <box-icon name='plus' color='#ffffff' />
              <small>Mi lista</small>
            </a>
            <a className='banner__action-btn btn-play' href='#play'>
              <box-icon name='play' size='sm' />
              <span className='action-text'>Reproducir</span>
            </a>
            <a className='banner__action-btn btn-info display-only-tablet' href='#play'>
              <box-icon name='info-circle' size='sm' color='#FFF' />
              <span className='action-text'>Más información</span>
            </a>
            <a className='banner__action-info display-only-phone' href='#info'>
              <box-icon name='info-circle' type='solid' color='#ffffff' />
              <small>Información</small>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};
export default Banner;
