import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import { motion } from 'framer-motion';

function About() {
  return (
    <section id="about" style={{ backgroundColor: '#f7f7f7', padding: '4rem 0' }}>
      <Box sx={{ container: true, textAlign: 'center', px: 3 }}>
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          {/* Título Principal para SEO */}
          <Typography variant="h3" component="h2" sx={{ fontWeight: 'bold', color: '#333' }} gutterBottom>
            Sobre Alexander Urrea: Desarrollador Web y Soluciones Digitales
          </Typography>

          {/* Descripción SEO amigable */}
          <Typography
            variant="h6"
            component="p"
            sx={{
              maxWidth: '800px',
              margin: '0 auto 2rem',
              color: '#555',
              lineHeight: 1.7,
              fontSize: '1.1rem',
            }}
          >
            Soy un <strong>desarrollador web</strong> con más de 3 años de experiencia, especializado en la creación de sitios web <strong>modernos y optimizados</strong> para empresas de diferentes sectores. Mi enfoque está en entregar soluciones digitales <strong>personalizadas</strong> y <strong>responsivas</strong>, adaptadas a las necesidades de mis clientes, garantizando un rendimiento excepcional y una experiencia de usuario fluida.
          </Typography>

          {/* Botón de contacto */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <Button
              href="#contact"
              variant="contained"
              color="primary"
              size="large"
              sx={{ marginTop: '2rem', fontSize: '1.1rem' }}
            >
              ¡Contacta conmigo!
            </Button>
          </motion.div>
        </motion.div>
      </Box>
    </section>
  );
}

export default About;



