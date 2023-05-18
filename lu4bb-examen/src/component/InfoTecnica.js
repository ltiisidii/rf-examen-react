import React from 'react';
import data from '../sources/facts-novicio-tecnica.json';
import './InfoTecnica.css';

const InfoTecnica = () => {
  return (
    <div className="info-tecnica-container">
      <h2>Información Técnica</h2>
      <div className="fact-table">
        {data.map((fact) => (
          <div key={fact.id} className="fact-row">
            <h3>{fact.title}</h3>
            <p>{fact.content}</p>
            <hr />
          </div>
        ))}
      </div>
    </div>
  );
};

export default InfoTecnica;