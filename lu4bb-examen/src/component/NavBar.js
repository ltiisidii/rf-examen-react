import React from 'react';
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
import { Home } from '@mui/icons-material';
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
      return 'LU4BB';
    }
    return 'Buenos Aires Radio Club';
  };

  return (
    <AppBar>
      <Container maxWidth="lg">
        <Toolbar disableGutters>
          <Box sx={{ mr: 1 }}>
            <IconButton size="large" color="inherit">
              <Home />
            </IconButton>
          </Box>
          <Typography variant="h6" component="h1" noWrap sx={{ flexGrow: 1 }}>
            {getTitle()}
          </Typography>
          <Button color="inherit">Home</Button>
          <Button color="inherit" onClick={openNovicioMenu}>
            Novicio
          </Button>
          <Button color="inherit">Contacto</Button>
          <Menu
            anchorEl={novicioMenuAnchor}
            open={Boolean(novicioMenuAnchor)}
            onClose={closeNovicioMenu}
          >
            <MenuItem onClick={closeNovicioMenu}>Simulador</MenuItem>
            <MenuItem onClick={closeNovicioMenu}>Info Técnica</MenuItem>
            <MenuItem onClick={closeNovicioMenu}>Info Reglamentación</MenuItem>
          </Menu>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default NavBar;