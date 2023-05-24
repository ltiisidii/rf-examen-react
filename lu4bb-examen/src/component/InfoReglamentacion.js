import React from 'react';
import { Box, Button, Divider, Heading, Text } from '@chakra-ui/react';
import facts from '../sources/facts-novicio-reglamentacion.json';
import './InfoReglamentacion.css';

const InfoReglamentacion = () => {
  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="container">
      <div className="info-tecnica-container">
        <h1 style={{ paddingTop: '50px' }}>Preguntas de examen: Categoría Novicio Reglamentación y Ética Operativa</h1>
        <button onClick={handlePrint}>Imprimir</button> {/* Agregar botón de impresión */}
        {facts.map((fact, index) => (
          <div key={fact.id}>
          {index > 0 && <hr />} {/*   Separador visible */}
          {/*  <Box key={fact.id} className="fact-row" border="1px solid" p="4" borderColor="gray.200">  */}
            <p style={{ color: 'red', fontSize: '16px', fontWeight: 'bold' }}>{fact.id}</p> {/* Mostrar el ID */}
            <h3>{fact.title}</h3>
            <p style={{ color: 'green', fontSize: '16px', fontWeight: 'bold' }}>{fact.content}</p>
          {/* </Box> */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default InfoReglamentacion;
