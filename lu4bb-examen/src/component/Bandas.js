import React from 'react';
import Bandas1Image from './images/bandasyfreq.png';
import Bandas2Image from './images/clasesymodos.png';

const Bandas = () => {
  return (
    <div>
      <h2 style={{ textAlign: 'center', paddingTop: '50px' }}>Bandas y frecuencias // Clases y modos</h2>
      <div style={{ textAlign: 'center' }}>
        <img
          src={Bandas1Image}
          alt="Imagen Bandas y frecuencias"
          style={{
            maxWidth: '100%',
            height: 'auto',
            '@media (max-width: 768px)': {
              maxWidth: '80%',
            },
          }}
        />
      </div>
      <div style={{ textAlign: 'center' }}>
        <img
          src={Bandas2Image}
          alt="Imagen Clases y modos"
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

export default Bandas;