import React from 'react';

export default function AnimalItem({ name, type, says, left, top }) {
  return <div className='animal-item' style={{ left: left, top: top }}>
    <img src={`/${type}.png`} />
    <h2>{name}</h2>
    <p>Says: {says}</p>
  </div>;
}
