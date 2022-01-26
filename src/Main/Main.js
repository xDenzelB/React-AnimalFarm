import React from 'react';
import backgroundImg from '../background.png';
import './Main.css';
import AnimalsList from '../Animals/AnimalsList';
export default function Main(props) {
  return (
    <main style={{ backgroundImage: `url(${backgroundImg}` }}>
      <AnimalsList animals = { props.animals } />
    </main>
  );
}
