import React from "react";
import { Box, Typography, Paper } from "@mui/material";
import { motion } from "framer-motion";
import VerifiedUserIcon from "@mui/icons-material/VerifiedUser";
import StarIcon from "@mui/icons-material/Star";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import HandymanIcon from "@mui/icons-material/Handyman";

const reasons = [
  {
    title: "Experiencia Comprobada",
    description:
      "Años de experiencia creando soluciones digitales para diversas industrias.",
    icon: <VerifiedUserIcon sx={{ fontSize: 60, color: "#1976d2" }} />,
  },
  {
    title: "Calidad Garantizada",
    description:
      "Nos aseguramos de que cada proyecto cumpla con los más altos estándares.",
    icon: <StarIcon sx={{ fontSize: 60, color: "#ffb400" }} />,
  },
  {
    title: "Soporte Continuo",
    description:
      "Te acompañamos en cada etapa del proceso, desde la idea inicial hasta el mantenimiento.",
    icon: <SupportAgentIcon sx={{ fontSize: 60, color: "#43a047" }} />,
  },
  {
    title: "Soluciones Personalizadas",
    description:
      "Adaptamos cada proyecto a las necesidades específicas de tu negocio.",
    icon: <HandymanIcon sx={{ fontSize: 60, color: "#f4511e" }} />,
  },
];

function WhyChooseUs() {
  return (
    <Box
      id="why-choose-us"
      color='#333'
      sx={{
        py: 8,
        px: 4,
        backgroundColor: "#f9f9f9",
        textAlign: "center",
      }}
    >
      <Typography
        variant="h4"
        component={motion.h2}
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        sx={{ mb: 4, fontWeight: "bold" }}
      >
        ¿Por qué elegirnos?
      </Typography>
      <Typography
        variant="subtitle1"
        component={motion.p}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.3 }}
        sx={{ mb: 6, maxWidth: "700px", mx: "auto", color: "gray" }}
      >
        Ofrecemos una combinación única de experiencia, innovación y compromiso
        para ayudarte a alcanzar tus objetivos digitales.
      </Typography>
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: 4,
        }}
      >
        {reasons.map((reason, index) => (
          <Box
            key={index}
            component={motion.div}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            sx={{
              flex: "1 1 calc(25% - 32px)", // Diseño responsive para pantallas grandes.
              maxWidth: "300px",
              minWidth: "260px", // Asegura buen diseño en pantallas pequeñas.
            }}
          >
            <Paper
              elevation={4}
              sx={{
                py: 4,
                px: 3,
                textAlign: "center",
                borderRadius: 2,
                backgroundColor: "#fff",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  mb: 2,
                }}
              >
                {reason.icon}
              </Box>
              <Typography variant="h6" sx={{ fontWeight: "bold", mb: 2 }}>
                {reason.title}
              </Typography>
              <Typography variant="body2" sx={{ color: "gray" }}>
                {reason.description}
              </Typography>
            </Paper>
          </Box>
        ))}
      </Box>
    </Box>
  );
}

export default WhyChooseUs;
