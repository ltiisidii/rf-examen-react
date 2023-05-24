import React from 'react';
import morseImage from './images/morse.png';

const Morse = () => {
  return (
    <div>
      <h1 style={{ textAlign: 'center', paddingTop: '50px' }}>Morse</h1>
      <div style={{ textAlign: 'center' }}>
        <img src={morseImage} alt="Imagen Morse" />
      </div>
    </div>
  );
};

export default Morse;
