import React from 'react';

export default function animals(props) {
  return (
    <div className='animal-card'>
      {
        props.animals.animals.map((item) => (
          <div className='animal' key={item.name} style={{ left: `${item.left}`, top: `${item.top}` }}>
        
      
            <img src={`/${props.type}.png`} />
            <p>{props.name}</p>
            <p>Says: {props.says}</p>
          </div>
        ))
      }
    </div>
  );
}
