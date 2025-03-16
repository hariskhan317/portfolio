import * as React from 'react';
import { Container, Typography, Box } from '@mui/material';
import { motion, Variants } from 'framer-motion';

const Home = () => {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.6, 0.05, 0.01, 0.9],
      },
    },
  };

  return (
    <Box
      sx={{
        minHeight: '100vh',
        width: '100%',
        position: 'relative',
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'center',
        background: 'linear-gradient(to bottom right, rgba(255, 87, 34, 0.03), rgba(255, 167, 38, 0.03))',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundImage: `
            linear-gradient(rgba(255, 255, 255, 0.05) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255, 255, 255, 0.05) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px',
          opacity: 0.5,
          zIndex: 1,
        },
      }}
    >
      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 2 }}>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <Box sx={{ maxWidth: '800px', mx: 'auto' }}>
            <motion.div variants={itemVariants}>
              <Typography
                variant="h1"
                sx={{
                  fontSize: { xs: '2.5rem', sm: '3.5rem', md: '4.5rem' },
                  fontWeight: 700,
                  textAlign: 'center',
                  mb: 2,
                  background: 'linear-gradient(45deg, #FF5722 30%, #FFA726 90%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  letterSpacing: '-0.02em',
                }}
              >
                Full Stack Developer
              </Typography>
            </motion.div>

            <motion.div variants={itemVariants}>
              <Typography
                variant="h2"
                sx={{
                  fontSize: { xs: '1.5rem', sm: '2rem', md: '2.5rem' },
                  fontWeight: 500,
                  textAlign: 'center',
                  mb: 4,
                  color: 'rgba(255, 255, 255, 0.9)',
                  letterSpacing: '-0.01em',
                }}
              >
                Hi, I'm Haris Khan
              </Typography>
            </motion.div>

            <motion.div variants={itemVariants}>
              <Typography
                variant="body1"
                sx={{
                  fontSize: { xs: '1rem', sm: '1.1rem', md: '1.25rem' },
                  textAlign: 'center',
                  color: 'rgba(255, 255, 255, 0.7)',
                  maxWidth: '600px',
                  mx: 'auto',
                  lineHeight: 1.8,
                }}
              >
                Detail-oriented developer crafting responsive and scalable web applications. 
                Specializing in modern JavaScript frameworks and backend technologies, 
                I create seamless digital experiences that make an impact.
              </Typography>
            </motion.div>

            <motion.div 
              variants={itemVariants}
              style={{
                position: 'absolute',
                bottom: '-60vh',
                left: '50%',
                transform: 'translateX(-50%)',
                width: '100vw',
                height: '100vh',
                background: 'radial-gradient(circle at center, rgba(255, 87, 34, 0.15) 0%, transparent 70%)',
                pointerEvents: 'none',
                zIndex: -1,
              }}
            />
          </Box>
        </motion.div>
      </Container>
    </Box>
  );
};

export default Home; 