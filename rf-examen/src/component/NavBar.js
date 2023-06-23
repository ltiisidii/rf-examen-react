import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Box,
  Button, 
  Container, 
  Flex, 
  Heading, 
  IconButton, 
  Menu, 
  MenuButton, 
  MenuItem, 
  MenuList } from '@chakra-ui/react';
import { MdHome } from 'react-icons/md';
import { isMobile } from 'react-device-detect';

const NavBar = () => {
  const [novicioMenuAnchor, setNovicioMenuAnchor] = useState(null);

  const openNovicioMenu = (event) => {
    setNovicioMenuAnchor(event.currentTarget);
  };
  
  const closeNovicioMenu = () => {
    setNovicioMenuAnchor(null);
  };
  
  const [toolsMenuAnchor, setToolsMenuAnchor] = useState(null);
  
  const openToolsMenu = (event) => {
    setToolsMenuAnchor(event.currentTarget);
  };
  
  const closeToolsMenu = () => {
    setToolsMenuAnchor(null);
  };
  
  const getTitle = () => (isMobile ? 'p00lack' : 'p00lack Training Center');

return (
  <Box bg="gray.400" color="Black">
    <Container maxW="mg">
      <Flex px={0} align="center">
        <Box mr={1}>
          <IconButton size="lg" colorScheme="black">
            <MdHome />
          </IconButton>
        </Box>
        <Heading as="h1" size="md" flexGrow={1}>
          {getTitle()}
        </Heading>
        <Button colorScheme="white" as={Link} to="/">
          Home
        </Button>

        <Menu isOpen={Boolean(novicioMenuAnchor)} onClose={closeNovicioMenu}>
            <MenuButton as={Button} onClick={openNovicioMenu}>
              Novicio
            </MenuButton>
            <MenuList>
              <MenuItem as={Link} to="/simulador-novicio">
                Simulador
              </MenuItem>
              <MenuItem as={Link} to="/info-tecnica">
                Info Técnica
              </MenuItem>
              <MenuItem as={Link} to="/info-reglamentacion">
                Info Reglamentación
              </MenuItem>
              <MenuItem as={Link} to="/morse-sim">
                Morse
              </MenuItem>
              <MenuItem as={Link} to="/electronica">
                Electronica
              </MenuItem>
              <MenuItem as={Link} to="/bandas">
                Frecuencias y Bandas
              </MenuItem>
              <MenuItem as={Link} to="/playlist-youtube">
                Playlist Youtube
              </MenuItem>
            </MenuList>
          </Menu>

          <Menu isOpen={Boolean(toolsMenuAnchor)} onClose={closeToolsMenu}>
            <MenuButton as={Button} onClick={openToolsMenu}>
              Tools
            </MenuButton>
            <MenuList>
              <MenuItem as={Link} to="/calc-dipolo">
                Calculadora Dipolo
              </MenuItem>
              <MenuItem as={Link} to="/morse-converter">
                Conversor morse a texto y viceversa
              </MenuItem>
              <MenuItem as={Link} to="/calc-dipolo-3">
                Calculadora 3
              </MenuItem>
              <MenuItem as={Link} to="/calc-dipolo-4">
                Calculadora 4
              </MenuItem>
              <MenuItem as={Link} to="/calc-dipolo-5">
                Calculadora 5
              </MenuItem>
              <MenuItem as={Link} to="/calc-dipolo-6">
                Calculadora 6
              </MenuItem>
              <MenuItem as={Link} to="/calc-dipolo-7">
                Calculadora 7
              </MenuItem>
            </MenuList>
          </Menu>
        </Flex>
    </Container>
  </Box>
);

};

export default NavBar;
