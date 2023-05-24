import React from 'react';
import morseImage from './images/morse.png';

const Morse = () => {
  return (
    <div>
      <h2 style={{ textAlign: 'center', paddingTop: '50px' }}>Morse</h2>
      <div style={{ textAlign: 'center' }}>
        <img
          src={morseImage}
          alt="Imagen Morse"
          style={{
            maxWidth: '100%',
            height: 'auto',
            '@media (max-width: 768px)': {
              maxWidth: '80%',
            },
          }}
        />
      </div>
    </div>
  );
};

export default Morse;