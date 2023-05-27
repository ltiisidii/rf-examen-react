import React from 'react';
import { Box, Center, Heading, Image } from '@chakra-ui/react';
import Electronica1Image from './images/resistencias.png';
import Electronica2Image from './images/leydeohm.png';

const Electronica = () => {
  return (
    <Center>
      <Box>
        <Heading textAlign="center" paddingTop="50px">Electronica</Heading>
        <Center>
          <Image
            src={Electronica1Image}
            alt="Imagen Resistencias"
            maxW="100%"
            h="auto"
            sx={{
              '@media (max-width: 768px)': {
                maxW: '80%',
              },
            }}
          />
        </Center>
        <Center>
          <Image
            src={Electronica2Image}
            alt="Imagen Ley de Ohm"
            maxW="100%"
            h="auto"
            sx={{
              '@media (max-width: 768px)': {
                maxW: '80%',
              },
            }}
          />
        </Center>
      </Box>
    </Center>
  );
};

export default Electronica;
