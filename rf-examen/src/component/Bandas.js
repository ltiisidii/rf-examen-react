import React from 'react';
import { Box, Center, Heading, Image } from '@chakra-ui/react';
import Bandas1Image from './images/bandasyfreq.png';
import Bandas2Image from './images/clasesymodos.png';

const Bandas = () => {
  return (
    <Center>
      <Box>
        <Heading textAlign="center" paddingTop="50px">Bandas y frecuencias // Clases y modos</Heading>
        <Center>
          <Image
            src={Bandas1Image}
            alt="Imagen Bandas y frecuencias"
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
            src={Bandas2Image}
            alt="Imagen Clases y modos"
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

export default Bandas;
