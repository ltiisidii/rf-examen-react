import React from 'react';
import Examen from './Examen';
import './Examen.css';

const SimuladorNovicio = () => {
  return (
    <div className="container">
    
      <div>
        <h1 style={{ paddingTop: '50px' }}>Simulador para categoria Novicio</h1>
        <Examen />
        {/* Contenido del simulador de novicio */}
      </div>
    </div>
  );
};

export default SimuladorNovicio;
