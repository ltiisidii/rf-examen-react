import React, { useState } from 'react';
import DipoleAntenna from './images/dipole-antenna.svg';
import { Box, Button, Input, Text } from '@chakra-ui/react';

const CalculatorDipole = () => {
  const [frequency, setFrequency] = useState('');
  const [length, setLength] = useState('');
  const [armLength, setArmLength] = useState('');

  const handleFrequencyChange = (event) => {
    setFrequency(event.target.value);
  };

  const calculateLength = () => {
    const frequencyInMHz = parseFloat(frequency);
    if (!isNaN(frequencyInMHz)) {
      const lengthValue = 143 / frequencyInMHz;
      const armLengthValue = lengthValue / 2;
      setLength(lengthValue.toFixed(2));
      setArmLength(armLengthValue.toFixed(2));
    } else {
      setLength('');
      setArmLength('');
    }
  };

  const convertToCentimeters = (value) => {
    const meters = parseFloat(value);
    if (!isNaN(meters)) {
      const centimeters = meters * 100;
      return centimeters.toFixed(2);
    }
    return '';
  };

  return (
    <Box>
      <Text textAlign="center" paddingTop="50px" fontSize="xl" fontWeight="bold">
        Calculadora de Antena Dipolo
      </Text>
      <Box textAlign="center">
        <Text>
          Las antenas dipolos son fáciles de construir y pueden ser muy efectivas cuando se colocan a media longitud de onda o más sobre el suelo.
          Ingrese la frecuencia operativa deseada en megahercios para obtener una buena longitud inicial para un dipolo en centímetros y metros.
        </Text>
        <Text>
          La fórmula para calcular la longitud aproximada de un dipolo es: Longitud del dipolo en metros: 143 / frecuencia en MHz
        </Text>
        <Text>
          Estos son solo valores aproximados. En la práctica, es mejor hacer que la antena sea un poco más larga que el valor calculado y luego recortarla para obtener el mejor valor de SWR.
        </Text>
        <label>
          Frecuencia (MHz):
          <Input type="text" value={frequency} onChange={handleFrequencyChange} size="md" />
        </label>
        <Button onClick={calculateLength}>Calcular</Button>
        {length && armLength && (
          <Box>
            <Text>Largo del dipolo (L): {length} metros</Text>
            <Text>Brazo de cada dipolo (I): {armLength} metros</Text>
            <Text>Largo del dipolo (L) en centímetros: {convertToCentimeters(length)} centímetros</Text>
            <Text>Brazo de cada dipolo (I) en centímetros: {convertToCentimeters(armLength)} centímetros</Text>
          </Box>
        )}
      </Box>
      <Box textAlign="center" mx="auto" display="block">
        <img
          src={DipoleAntenna}
          alt="Calculadora Dipolo"
          style={{
            maxWidth: '100%',
            height: 'auto',
            '@media (max-width: 768px)': {
              maxWidth: '80%',
            },
          }}
        />
      </Box>
    </Box>
  );
};

export default CalculatorDipole;
