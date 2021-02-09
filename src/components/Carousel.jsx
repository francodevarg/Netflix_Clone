import React , {useRef,useState} from 'react';
import '../assets/styles/components/Carousel.scss';

const Carousel = ({ children, isLargeRow }) => {
  let carouselContainer = useRef(null);
  const [stateArrowLeft, setstateArrowLeft] = useState(false);
  const [stateArrowRight, setstateArrowRight] = useState(true);

  let lfArrowDisplay =  stateArrowLeft ? ' ' : 'no-display';
  let rightArrowDisplay =  stateArrowRight ? ' ' : 'no-display';

  const largeBtn = isLargeRow ? 'carousel__btn carousel__btn--large' : 'carousel__btn';
 
  const flechaIzquierda = () => {
    carouselContainer.current.scrollLeft -= (carouselContainer.current.offsetWidth / 5);
    if(carouselContainer.current.scrollLeft === 0){
      setstateArrowLeft(false);
    }
    if((carouselContainer.current.scrollWidth - carouselContainer.current.scrollLeft) !== carouselContainer.current.clientWidth ){
      setstateArrowRight(true);
    }
  }
  
  const flechaDerecha = () => {
    carouselContainer.current.scrollLeft += (carouselContainer.current.offsetWidth / 5);
    console.log(carouselContainer.current.scrollLeft);
    console.log(carouselContainer);
    if(carouselContainer.current.scrollLeft !== 0){
      setstateArrowLeft(true);
    }
    if((carouselContainer.current.scrollWidth - carouselContainer.current.scrollLeft) === carouselContainer.current.clientWidth ){
      setstateArrowRight(false);
    }
  }



  return (
    <div ref={carouselContainer} className='carousel'>
      <button className={`${largeBtn} carousel__btn--left ${lfArrowDisplay}`} onClick={flechaIzquierda} type='button'>
        <box-icon type='solid' name='chevron-left' color='#fff' size='md'/>
      </button>
      <button className={`${largeBtn} carousel__btn--right ${rightArrowDisplay}`} onClick={flechaDerecha} type='button'>
        <box-icon type='solid' name='chevron-right' color='#fff' size='md'/>
      </button>
      <div  className='carousel__container'>{children}</div>
    </div>
  );
};

export default Carousel;
