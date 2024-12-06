import React from 'react';
import { Box, Typography, Container, Avatar } from '@mui/material';
import { motion } from 'framer-motion';

function Testimonials() {
  return (
    <section id="testimonials" style={{ padding: '4rem 0', backgroundColor: '#f9f9f9' }}>
      <Container>
        <Typography variant="h2" component="h2" align="center" gutterBottom color='#333'>
          Testimonios
        </Typography>
        <Typography variant="h6" component="p" align="center" color="textSecondary">
          Lo que dicen nuestros clientes sobre nuestro trabajo
        </Typography>

        {/* Testimonial cards */}
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            flexWrap: 'wrap',
            gap: '2rem',
            marginTop: '2rem',
          }}
        >
          {/* Testimonial 1 */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} // Solo se ejecuta una vez
            transition={{ duration: 1, ease: 'easeOut' }}
            style={{
              padding: '2rem',
              backgroundColor: 'white',
              borderRadius: '8px',
              boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
              textAlign: 'center',
              width: '100%',
              maxWidth: '350px',
              transition: 'transform 0.3s ease',
              '&:hover': {
                transform: 'scale(1.05)', // Hover effect
              },
            }}
          >
            <Avatar
              alt="Juan Pérez"
              src="/assets/juan.jpg" // Ruta a la imagen
              sx={{
                width: 80,
                height: 80,
                margin: '0 auto 1rem',
                border: '4px solid #f1f1f1',
              }}
            />
            <Typography variant="h6" component="h3" color='#333' sx={{ fontWeight: 'bold' }}>
              Juan Pérez
            </Typography>
            <Typography variant="body1" color="textSecondary" paragraph>
              "¡Una experiencia increíble! El desarrollo web que me ofrecieron
              superó mis expectativas. Totalmente recomendados."
            </Typography>
          </motion.div>

          {/* Testimonial 2 */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} // Solo se ejecuta una vez
            transition={{ duration: 1, ease: 'easeOut' }}
            style={{
              padding: '2rem',
              backgroundColor: 'white',
              borderRadius: '8px',
              boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
              textAlign: 'center',
              width: '100%',
              maxWidth: '350px',
              transition: 'transform 0.3s ease',
              '&:hover': {
                transform: 'scale(1.05)', // Hover effect
              },
            }}
          >
            <Avatar
              alt="María Gómez"
              src="/assets/maria.jpg" // Ruta a la imagen
              sx={{
                width: 80,
                height: 80,
                margin: '0 auto 1rem',
                border: '4px solid #f1f1f1',
              }}
            />
            <Typography variant="h6" component="h3" color='#333' sx={{ fontWeight: 'bold' }}>
              María Gómez
            </Typography>
            <Typography variant="body1" color="textSecondary" paragraph>
              "El equipo fue muy profesional y cumplieron con los plazos a la perfección. Los resultados son excelentes."
            </Typography>
          </motion.div>

          {/* Testimonial 3 */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} // Solo se ejecuta una vez
            transition={{ duration: 1, ease: 'easeOut' }}
            style={{
              padding: '2rem',
              backgroundColor: 'white',
              borderRadius: '8px',
              boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
              textAlign: 'center',
              width: '100%',
              maxWidth: '350px',
              transition: 'transform 0.3s ease',
              '&:hover': {
                transform: 'scale(1.05)', // Hover effect
              },
            }}
          >
            <Avatar
              alt="Pedro Rodríguez"
              src="/assets/pedro.jpg" // Ruta a la imagen
              sx={{
                width: 80,
                height: 80,
                margin: '0 auto 1rem',
                border: '4px solid #f1f1f1',
              }}
            />
            <Typography variant="h6" component="h3" color='#333' sx={{ fontWeight: 'bold' }}>
              Pedro Rodríguez
            </Typography>
            <Typography variant="body1" color="textSecondary" paragraph>
              "Gracias por convertir nuestras ideas en un producto digital tan funcional y hermoso. ¡Gran trabajo!"
            </Typography>
          </motion.div>
        </Box>
      </Container>
    </section>
  );
}

export default Testimonials;



