import React from 'react';
import backgroundImg from '../background.png';
import './Main.css';
import Animals from '../Animals/AnimalsList';
export default function Main({ animals }) {
  return (
    <main style={{ backgroundImage: `url(${backgroundImg}` }}>
      <Animals animals={animals} />
    </main>
  );
}
