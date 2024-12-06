import React, { useState, useEffect } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Link } from 'react-scroll'; // Para navegación suave entre secciones.
import { Drawer, IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false); // Estado para manejar la apertura/cierre del Drawer.

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0); // Cambia el estado si hay desplazamiento.
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const textColor = isScrolled ? '#fff' : '#000'; // Color dinámico del texto.

  // Maneja el estado del Drawer
  const toggleDrawer = (open) => {
    setDrawerOpen(open);
  };

  return (
    <AppBar
      position="sticky"
      sx={{
        backgroundColor: isScrolled ? 'rgba(0, 0, 0, 0.8)' : 'rgba(255, 255, 255, 0.1)', // Color dinámico del fondo.
        backdropFilter: isScrolled ? 'none' : 'blur(10px)', // Desenfoque solo si no está desplazado.
        boxShadow: isScrolled ? '0px 2px 4px rgba(0, 0, 0, 0.2)' : 'none', // Sombra solo al desplazarse.
        transition: 'background-color 0.3s, box-shadow 0.3s', // Transición suave.
      }}
    >
      <Toolbar>
        <Typography variant="h6" style={{ flexGrow: 1, color: textColor }}>
          Alexander Urrea
        </Typography>

        {/* Botón Hamburguesa (solo en pantallas pequeñas) */}
        <IconButton
          color="inherit"
          aria-label="menu"
          onClick={() => toggleDrawer(true)}
          sx={{ display: { xs: 'block', sm: 'none' } }} // Mostrar solo en pantallas pequeñas
        >
          <MenuIcon />
        </IconButton>

        {/* Menú de botones para pantallas grandes */}
        <div style={{ display: 'flex', flexGrow: 1, justifyContent: 'flex-end' }}>
          <Button sx={{ color: textColor, display: { xs: 'none', sm: 'inline-block' } }}>
            <Link to="about" smooth={true} duration={500}>
              Sobre mí
            </Link>
          </Button>
          <Button sx={{ color: textColor, display: { xs: 'none', sm: 'inline-block' } }}>
            <Link to="services" smooth={true} duration={500}>
              Servicios
            </Link>
          </Button>
          <Button sx={{ color: textColor, display: { xs: 'none', sm: 'inline-block' } }}>
            <Link to="testimonials" smooth={true} duration={500}>
              Testimonios
            </Link>
          </Button>
          <Button sx={{ color: textColor, display: { xs: 'none', sm: 'inline-block' } }}>
            <Link to="contact" smooth={true} duration={500}>
              Contacto
            </Link>
          </Button>
        </div>
      </Toolbar>

      {/* Drawer (Menú lateral) */}
      <Drawer
        anchor="right"
        open={drawerOpen}
        onClose={() => toggleDrawer(false)} // Cierra el Drawer
      >
        <div style={{ width: 250, padding: '20px' }}>
          <Button sx={{ color: '#000', width: '100%' }} onClick={() => toggleDrawer(false)}>
            <Link to="about" smooth={true} duration={500}>
              Sobre mí
            </Link>
          </Button>
          <Button sx={{ color: '#000', width: '100%' }} onClick={() => toggleDrawer(false)}>
            <Link to="services" smooth={true} duration={500}>
              Servicios
            </Link>
          </Button>
          <Button sx={{ color: '#000', width: '100%' }} onClick={() => toggleDrawer(false)}>
            <Link to="testimonials" smooth={true} duration={500}>
              Testimonios
            </Link>
          </Button>
          <Button sx={{ color: '#000', width: '100%' }} onClick={() => toggleDrawer(false)}>
            <Link to="contact" smooth={true} duration={500}>
              Contacto
            </Link>
          </Button>
        </div>
      </Drawer>
    </AppBar>
  );
}

export default Navbar;



