import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import { Box, Typography, TextField, Button, IconButton } from '@mui/material';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import ContactMailIcon from '@mui/icons-material/ContactMail';

function Contact() {
  const [state, handleSubmit] = useForm("https://formspree.io/f/mqakjllj");  // Aquí debes colocar tu Formspree ID real.
  
  if (state.succeeded) {
    return (
      <Box
        sx={{
          position: 'relative',
          minHeight: '100vh',
          backgroundImage: 'url(/assets/FinalContacto.webp)', // Asegúrate de tener una imagen relevante.
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          px: 3,
        }}
      >
        <Box
          sx={{
            width: '90%',
            maxWidth: '600px',
            backgroundColor: 'rgba(0, 0, 0, 0.8)',
            borderRadius: 2,
            padding: 4,
            textAlign: 'center',
          }}
        >
          <Typography
            variant="h2"
            component="h1"
            gutterBottom
            sx={{ color: 'white', fontWeight: 'bold' }}
          >
            ¡Gracias por tu mensaje!
          </Typography>
          <Typography variant="body1" sx={{ color: 'white', mb: 3 }}>
            Nos pondremos en contacto contigo pronto.
          </Typography>
        </Box>
      </Box>
    );
  }

  return (
    <Box
      id="contact"
      sx={{
        position: 'relative',
        minHeight: '100vh',
        backgroundImage: 'url(/assets/FinalContacto.webp)', // Asegúrate de tener una imagen relevante.
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        px: 3,
      }}
    >
      <Box
        sx={{
          width: '90%',
          maxWidth: '600px',
          backgroundColor: 'rgba(0, 0, 0, 0.8)',
          borderRadius: 2,
          padding: 4,
          textAlign: 'center',
        }}
      >
        <Typography
          variant="h2"
          component="h1"
          gutterBottom
          sx={{ color: 'white', fontWeight: 'bold' }}
        >
          Contáctanos
        </Typography>
        <Typography variant="body1" gutterBottom sx={{ color: 'white', mb: 3 }}>
          Estamos aquí para ayudarte. Déjanos un mensaje y te responderemos lo más pronto posible.
        </Typography>
        
        <form onSubmit={handleSubmit}>
          <TextField
            label="Nombre"
            variant="outlined"
            fullWidth
            margin="normal"
            sx={{
              input: { color: 'white' },
              label: { color: '#ccc' },
              fieldset: { borderColor: '#666' },
            }}
            name="name"
          />
          <ValidationError
            prefix="Name"
            field="name"
            errors={state.errors}
          />

          <TextField
            label="Correo"
            type="email"
            variant="outlined"
            fullWidth
            margin="normal"
            sx={{
              input: { color: 'white' },
              label: { color: '#ccc' },
              fieldset: { borderColor: '#666' },
            }}
            name="email"
          />
          <ValidationError
            prefix="Email"
            field="email"
            errors={state.errors}
          />

          <TextField
            label="Mensaje"
            variant="outlined"
            fullWidth
            multiline
            rows={4}
            margin="normal"
            sx={{
              input: { color: 'white' },
              label: { color: '#ccc' },
              fieldset: { borderColor: '#666' },
            }}
            name="message"
          />
          <ValidationError
            prefix="Message"
            field="message"
            errors={state.errors}
          />

          <Button
            type="submit"
            variant="contained"
            fullWidth
            sx={{
              mt: 2,
              py: 1.5,
              backgroundColor: '#4caf50',
              ':hover': { backgroundColor: '#388e3c' },
            }}
            disabled={state.submitting}
          >
            Enviar
          </Button>
        </form>

        <Box mt={4}>
          <Typography variant="body2" sx={{ color: '#ccc' }}>
            También puedes contactarnos a través de:
          </Typography>
          <Box mt={2} display="flex" justifyContent="center" gap={2}>
            <IconButton
              aria-label="Enviar un correo"
              href="mailto:ag8388714@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              sx={{ color: '#4caf50' }}
            >
              <ContactMailIcon fontSize="large" />
            </IconButton>
            <IconButton
              aria-label="Contactar por WhatsApp"
              href="https://wa.me/573219470126"
              target="_blank"
              rel="noopener noreferrer"
              sx={{ color: '#4caf50' }}
            >
              <WhatsAppIcon fontSize="large" />
            </IconButton>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default Contact;






