import React from 'react';
import '../assets/styles/components/CarouselItem.scss';

const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p/original';

const CarouselItem = ({ name, title, posterPath, backdropPath, voteAverage, isLargeRow}) => {
  const largeItem = isLargeRow ? 'carousel-item--large' : '';
  const largeImg = isLargeRow ? 'carousel-item__img--large' : '';

  return (
    <div className={`carousel-item ${largeItem}`}>
      <img
        className={`carousel-item__img ${largeImg}`}
        src={`${IMAGE_BASE_URL}${isLargeRow ? posterPath : backdropPath}`}
        alt={name}
      />
      <div className='carousel-item__detail'>
        <div className='detail-action'>
          <a className='action action--view' href='#t'>
            <box-icon name='chevron-down' size='sm' color='black' />
          </a>
          <a className='action action--add' href='#te'>
            <box-icon name='plus' size='sm' color='#c0c0c0' />
          </a>
        </div>
        <p className='detail__title'>{name || title}</p>
        <p className='detail__subtitle'>
          {' '}
          &#9734;
          {` ${voteAverage}`}
        </p>
      </div>
    </div>
  );
};

export default CarouselItem;
