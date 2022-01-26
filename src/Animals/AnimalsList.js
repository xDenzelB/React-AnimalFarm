import React from 'react';
import './animals.css';

export default function Animals(props) {
  return (
    <div className='animal-card'>
      {
        props.animals.map((item) => (
          <div className='animal' key={item.name} style={{ left: item.left, top: item.top }}>
            <img src={`/${item.type}.png`} />
            <h2>{item.name}</h2>
            <p>Says: {item.says}</p>
          </div>
        ))
      }
    </div>
  );
}
