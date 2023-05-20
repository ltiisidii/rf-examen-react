import React from 'react';
import facts from '../sources/facts-novicio-tecnica.json';
import './InfoTecnica.css';

const InfoTecnica = () => {
  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="container">
      <div className="info-tecnica-container">
        <h1 style={{ paddingTop: '50px' }}>Preguntas de examen: Categoría Novicio Técnica</h1>
        <button onClick={handlePrint}>Imprimir</button> {/* Agregar botón de impresión */}
        {facts.map((fact, index) => (
          <div key={fact.id} className="fact-row">
            {index > 0 && <hr />} {/* Separador visible */}
            <p style={{ color: 'red', fontSize: '16px', fontWeight: 'bold' }}>{fact.id}</p> {/* Mostrar el ID */}
            <h3>{fact.title}</h3>
            <p style={{ color: 'green', fontSize: '16px', fontWeight: 'bold' }}>{fact.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default InfoTecnica;
