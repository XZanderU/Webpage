import React from 'react';
import { Box, Typography } from '@mui/material';
import { motion } from 'framer-motion';

function Header() {
  return (
    <Box
      sx={{
        position: 'relative',
        height: '100vh',
        backgroundImage: 'url(/assets/Header.webp)', 
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'white',
        textAlign: 'center',
        padding: '0 20px', // Padding para dispositivos móviles
      }}
    >
      {/* Animación con Framer Motion para una entrada suave */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <Typography 
          variant="h1" 
          component="h1" 
          gutterBottom
          sx={{ fontSize: { xs: '3rem', sm: '4rem', md: '5rem' } }} // Ajuste de tamaño de fuente responsivo
        >
          ¡Hola! Soy tu Desarrollador Web
        </Typography>
        <Typography 
          variant="h3" 
          component="h2" // Uso de h2 para un mejor orden jerárquico
          sx={{ fontSize: { xs: '1.5rem', sm: '2rem', md: '2.5rem' }, fontWeight: 300 }}
        >
          Transformo tus ideas en productos digitales excepcionales
        </Typography>
      </motion.div>
    </Box>
  );
}

export default Header;


