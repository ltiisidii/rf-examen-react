
import React from 'react';
import facts  from '../sources/facts-novicio-tecnica.json';

const InfoReglamentacion = () => {
  return (
    <div>
      <h2>Información Reglamentación</h2>
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