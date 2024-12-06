import React from 'react';
import { motion } from 'framer-motion';
import {Box, Typography, Card } from '@mui/material'

const services = [
  {
    id: 1,
    title: 'Diseño Web',
    description: 'Sitios modernos y atractivos.',
    image: '/assets/Diseño Web.jpg', 
  },
  {
    id: 2,
    title: 'Aplicaciones Web',
    description: 'Soluciones interactivas y escalables.',
    image: '/assets/Aplicaciones Web.avif',
  },
  {
    id: 3,
    title: 'Mantenimiento Web',
    description: 'Optimización y soporte continuo.',
    image: '/assets/Mantenimiento Web.jpg',
  },
];

function Services() {
  return (
    <section id="services">
      <Box sx={{ py: 5, backgroundColor: '#f5f5f5' }}>
        <Typography variant="h2" align="center" color='#333' gutterBottom>
          Servicios
        </Typography>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            gap: 3,
            flexWrap: 'wrap',
            mt: 4,
          }}
        >
          {services.map((service) => (
            <motion.div
              key={service.id}
              whileHover={{ scale: 1.05 }}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: service.id * 0.2 }}
            >
              <Card
                sx={{
                  p: 4,
                  textAlign: 'center',
                  boxShadow: 3,
                  borderRadius: 2,
                }}
              >
                <motion.img
                  src={service.image}
                  alt={service.title}
                  style={{
                    width: '150px',
                    height: '150px',
                    borderRadius: '50%',
                    objectFit: 'cover',
                    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
                    marginBottom: '16px',
                  }}
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.5, delay: service.id * 0.2 }}
                />
                <Typography variant="h5">{service.title}</Typography>
                <Typography>{service.description}</Typography>
              </Card>
            </motion.div>
          ))}
        </Box>
      </Box>
    </section>
  );
}
export default Services;

