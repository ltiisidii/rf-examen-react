import React from 'react';
import { Link } from 'react-router-dom';
import {
  AppBar,
  Box,
  Button,
  Container,
  IconButton,
  Toolbar,
  Typography,
  Menu,
  MenuItem,
} from '@mui/material';
import { MdHome } from 'react-icons/md';
import { isMobile } from 'react-device-detect';

const NavBar = () => {
  const [novicioMenuAnchor, setNovicioMenuAnchor] = React.useState(null);

  const openNovicioMenu = (event) => {
    setNovicioMenuAnchor(event.currentTarget);
  };

  const closeNovicioMenu = () => {
    setNovicioMenuAnchor(null);
  };

  const getTitle = () => {
    if (isMobile) {
      return 'p00lack';
    }
    return 'p00lack Training Center';
  };

  return (
    <AppBar>
      <Container maxWidth="lg">
        <Toolbar disableGutters>
          <Box sx={{ mr: 1 }}>
            <IconButton size="large" color="inherit">
              <MdHome />
            </IconButton>
          </Box>
          <Typography variant="h6" component="h1" noWrap sx={{ flexGrow: 1 }}>
            {getTitle()}
          </Typography>
          <Button color="inherit" component={Link} to="/">
            Home
          </Button>
          <Button color="inherit" onClick={openNovicioMenu}>
            Novicio
          </Button>
          <Button color="inherit" component={Link} to="/contact-us">
          Contacto
          </Button>
          <Menu
            anchorEl={novicioMenuAnchor}
            open={Boolean(novicioMenuAnchor)}
            onClose={closeNovicioMenu}
          >
            <MenuItem onClick={closeNovicioMenu} component={Link} to="/simulador-novicio">
              Simulador
            </MenuItem>
            <MenuItem onClick={closeNovicioMenu} component={Link} to="/info-tecnica">
              Info Técnica
            </MenuItem>
            <MenuItem onClick={closeNovicioMenu} component={Link} to="/info-reglamentacion">
              Info Reglamentación
            </MenuItem>
            <MenuItem onClick={closeNovicioMenu} component={Link} to="/morse">
              Morse
            </MenuItem>
            <MenuItem onClick={closeNovicioMenu} component={Link} to="/electronica">
              Electronica
            </MenuItem>
            <MenuItem onClick={closeNovicioMenu} component={Link} to="/bandas">
              Frecuencias y Bandas
            </MenuItem>
            <MenuItem onClick={closeNovicioMenu} component={Link} to="/playlist-youtube">
              Playlist Youtube
            </MenuItem>
          </Menu>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default NavBar;
