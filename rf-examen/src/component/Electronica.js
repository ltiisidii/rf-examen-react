import React from 'react';
import Electronica1Image from './images/resistencias.png';
import Electronica2Image from './images/leydeohm.png';

const Electronica = () => {
  return (
    <div>
      <h2 style={{ textAlign: 'center', paddingTop: '50px' }}>Electronica</h2>
      <div style={{ textAlign: 'center' }}>
        <img
          src={Electronica1Image}
          alt="Imagen Resistencias"
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
          src={Electronica2Image}
          alt="Imagen Ley de Ohm"
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

export default Electronica;