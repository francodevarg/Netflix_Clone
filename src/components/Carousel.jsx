import React from 'react';
import '../assets/styles/components/Carousel.scss';

const Carousel = ({ children, isLargeRow }) => {
  const largeBtn = isLargeRow ? 'carousel__btn carousel__btn--large' : 'carousel__btn';

  return (
    <div className='carousel'>
      <button className={`${largeBtn} carousel__btn--left`} type='button'>
        <box-icon type='solid' name='chevron-left' color='#fff' />
      </button>
      <button className={`${largeBtn} carousel__btn--right`} type='button'>
        <box-icon type='solid' name='chevron-right' color='#fff' />
      </button>
      <div className='carousel__container'>{children}</div>
    </div>
  );
};

export default Carousel;
