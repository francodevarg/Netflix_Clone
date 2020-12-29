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
        backgroundImage: `url('${IMAGE_BASE_URL}/${movie?.backdrop_path}')`,
        backgroundPosition: 'center center',
      }}
    >
      <div className='banner__contents'>
        <div className='banner--fadeBottom'>
          <h1 className='banner__title'>{movie?.title || movie?.name || movie?.original_name}</h1>
          <div className='banner__actions'>
            <a className='banner__action-detail' href='#add'>
              <box-icon name='plus' color='#ffffff' />
              <small>Mi lista</small>
            </a>
            <a className='banner__action-play' href='#play'>
              <box-icon name='play' size='sm' />
              <span className='action-text-play'>Reproducir</span>
            </a>
            <a className='banner__action-detail' href='#info'>
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
