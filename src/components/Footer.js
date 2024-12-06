import React from 'react';
import { Box, Typography, IconButton } from '@mui/material';
import { motion } from 'framer-motion';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

function Footer() {
  // Enlaces sociales con los íconos correspondientes
  const socialLinks = [
    { id: 1, icon: <WhatsAppIcon />, url: 'https://wa.me/573219470126' },
    { id: 2, icon: <InstagramIcon />, url: 'https://www.instagram.com/dev.xander?igsh=Y2RwOXlxajBmdWhq' },
    { id: 3, icon: <TwitterIcon />, url: 'https://twitter.com' },
    { id: 4, icon: <LinkedInIcon />, url: 'https://www.linkedin.com/in/john-alexander-urrea-garcia-5b0219169/' },
  ];

  return (
    <Box
      sx={{
        backgroundColor: '#121212', // Fondo oscuro
        color: '#ffffff', // Texto blanco
        py: 4,
        textAlign: 'center',
        mt: 'auto', // Asegura que el footer se quede al final
      }}
    >
      {/* Título del Footer */}
      <Typography
        variant="h5"
        gutterBottom
        component={motion.h5}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        ¡Conéctate con nosotros!
      </Typography>

      {/* Enlaces Sociales */}
      <Box sx={{ display: 'flex', justifyContent: 'center', mt: 2, gap: 2 }}>
        {socialLinks.map((link) => (
          <motion.div
            key={link.id}
            whileHover={{ scale: 1.2, rotate: 10 }} // Efecto hover
            whileTap={{ scale: 0.9 }} // Efecto al hacer click
          >
            <IconButton
              component="a"
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              sx={{
                color: '#ffffff', // Color blanco para los íconos
                fontSize: 30, // Tamaño de los íconos
              }}
            >
              {link.icon}
            </IconButton>
          </motion.div>
        ))}
      </Box>

      {/* Derechos de autor */}
      <Typography
        variant="body2"
        sx={{ mt: 3 }}
        component={motion.p}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        &copy; {new Date().getFullYear()} Tu Empresa. Todos los derechos reservados.
      </Typography>
    </Box>
  );
}

export default Footer;

