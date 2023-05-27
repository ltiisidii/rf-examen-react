import React from 'react';
import facts from '../sources/facts-novicio-reglamentacion.json';
import { Box, Button, Divider, Heading, Text } from '@chakra-ui/react';
import './InfoReglamentacion.css';


const InfoReglamentacion = () => {
  const handlePrint = () => {
    window.print();
  };

  return (
    <Box className="container">
      <Box className="info-Reglamentacion-container">
        <Heading paddingTop="50px" as="h1">Preguntas de examen: Categoría Novicio Reglamentación y Ética Operativa</Heading>
        <Button onClick={handlePrint}>Imprimir</Button> {/* Agregar botón de impresión */}
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
      </Box>
    </Box>
  );
};

export default InfoReglamentacion;
