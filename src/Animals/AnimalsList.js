import React from 'react';
import './animals.css';
import Animal from './AnimalItem';

export default function Animals({ animals }) {
  return (
    <div className='animal-card'>
      {
        animals.map((item, i) => 
          <Animal key={item + i} {...item} />)
          
      }
    </div>
  );
}
