import React from 'react';
import facts  from '../sources/facts-novicio-reglamentacion.json';

const InfoReglamentacion = () => {
  return (
    <div>
      <h1 style={{ paddingTop: '50px' }}>Preguntas de examen: Categoria Novicio Reglamentación y Ética Operativa</h1>
      {facts.map((fact, index) => (
        <div key={fact.id}>
          {index > 0 && <hr />} {/* Separador visible */}
          <p>{fact.id}</p> {/* Mostrar el ID */}
          <h3>{fact.title}</h3>
          <p>{fact.content}</p>
        </div>
      ))}
    </div>
  );
};

export default InfoReglamentacion;