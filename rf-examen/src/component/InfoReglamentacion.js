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
          <Box key={fact.id} className="fact-row">
            {index > 0 && <Divider />} {/* Separador visible */}
            {/* <Box key={fact.id} maxW='sm' borderWidth='1px' borderRadius='lg' overflow='hidden' p="4" borderColor="gray.200"> */}
              <Text color="red" fontSize="16px" fontWeight="bold">{fact.id}</Text> {/* Mostrar el ID */}
              <Heading as="h3">{fact.title}</Heading>
              <Text color="green" fontSize="16px" fontWeight="bold">{fact.content}</Text>
            {/* </Box> */}
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default InfoReglamentacion;
