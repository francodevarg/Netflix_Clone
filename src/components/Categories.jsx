import React from 'react';
import '../assets/styles/components/Categories.scss';

const Categories = ({ title }) => {
  return (
    <div className='categories'>
      <h3 className='categories__title'>{title}</h3>
    </div>
  );
};

export default Categories;
