import React, {useState} from 'react';
import '../assets/styles/components/CarouselItem.scss';

const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p/original';

const CarouselItem = ({ name, title, posterPath, backdropPath, voteAverage, isLargeRow }) => {
  const largeItem = isLargeRow ? 'carousel-item--large' : '';
  const largeImg = isLargeRow ? 'carousel-item__img--large' : '';

  const [itemToList , setItemToList] = useState(false);

  const listBtn = itemToList ? 'check' : 'plus';
  
  const addList =  () => {
    setItemToList( ! itemToList);
  }
  

  return (
    <div className={`carousel-item ${largeItem}`}>
      <img
        className={`carousel-item__img ${largeImg}`}
        src={`${IMAGE_BASE_URL}${isLargeRow ? posterPath : backdropPath}`}
        alt={name}
      />
      <div className='carousel-item__detail'>
        <div className='detail-action'>
          <a className='action action--play' href='#t'>
            <box-icon name='play'  color='#000' border='circle' size='md'/>
          </a>
          <a className='action' href='#te'>
            <box-icon name={`${listBtn}`} onClick={addList} color='#a0a0a0' border='circle' size='md' />
          </a>
          <a className='action' href='#te'>
            <box-icon name='chevron-down' type='solid' color='#a0a0a0' border='circle' size='md' />
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
