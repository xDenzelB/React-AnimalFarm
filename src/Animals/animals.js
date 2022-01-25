import React from 'react';

export default function animals(props) {
  return (
    <div className='animal-card'>
      <img src={`/${props.name}.png`} />
      <p>{props.name}</p>
      <p>Says: {props.says}</p>

    </div>
  );
}
