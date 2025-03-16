import React from 'react';
import {
  Container,
  Typography,
  Box,
  Paper,
  Grid,
  useTheme,
} from '@mui/material';
import { motion } from 'framer-motion';
import WorkIcon from '@mui/icons-material/Work';

const Experience = () => {
  const theme = useTheme();
  const achievements = [
    {
      title: 'Web Developer',
      company: 'Tradezella',
      period: '2022 - Present',
      highlights: [
        'Engineered elegant and responsive layouts, optimizing for diverse screen resolutions, resulting in a 40% surge in traffic and heightened user satisfaction.',
        'Enhanced mobile responsiveness with a React custom hook, improving load times by 30% and maximizing user engagement.',
        'Led the enhancement of Dark Mode functionality through a custom React hook, driving a 20% increase in user satisfaction.',
        'Spearheaded the development of a new application design with grid view backtesting functionality, leading to a 15% increase in user engagement.',
      ]
    }
  ];

  return (
    <Container maxWidth="lg">
      <Box sx={{ py: 6 }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Typography 
            variant="h3" 
            gutterBottom 
            sx={{ 
              fontWeight: 600,
              textAlign: 'center',
              mb: 6
            }}
          >
            Professional Experience
          </Typography>
        </motion.div>

        {achievements.map((job, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 * index }}
          >
            <Grid container spacing={4} sx={{ mb: 6 }}>
              {/* Timeline Line */}
              <Grid item xs={12} md={1} sx={{ 
                position: 'relative',
                '&::after': {
                  content: '""',
                  position: 'absolute',
                  top: '70px',
                  bottom: 0,
                  right: { xs: 'calc(50% - 1px)', md: 'calc(50% - 1px)' },
                  width: '2px',
                  backgroundColor: theme.palette.primary.main,
                  opacity: 0.3,
                }
              }}>
                <Box sx={{ 
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  width: '50px',
                  height: '50px',
                  borderRadius: '50%',
                  backgroundColor: theme.palette.primary.main,
                  margin: 'auto',
                  boxShadow: 3,
                }}>
                  <WorkIcon sx={{ color: 'white' }} />
                </Box>
              </Grid>

              {/* Content */}
              <Grid item xs={12} md={11}>
                <Paper 
                  elevation={3} 
                  sx={{ 
                    p: 4,
                    borderRadius: 2,
                    position: 'relative',
                    '&:hover': {
                      transform: 'translateY(-5px)',
                      transition: 'transform 0.3s ease-in-out',
                    }
                  }}
                >
                  <Typography 
                    variant="h5" 
                    color="primary" 
                    sx={{ fontWeight: 600, mb: 1 }}
                  >
                    {job.title}
                  </Typography>
                  <Typography 
                    variant="h6" 
                    sx={{ 
                      color: 'text.secondary',
                      mb: 2 
                    }}
                  >
                    {job.company}
                  </Typography>
                  <Typography 
                    variant="subtitle1" 
                    sx={{ 
                      color: 'text.secondary',
                      mb: 3,
                      fontStyle: 'italic'
                    }}
                  >
                    {job.period}
                  </Typography>

                  <Box component="ul" sx={{ 
                    pl: 2,
                    '& li': {
                      mb: 2,
                      color: 'text.secondary',
                      '&::marker': {
                        color: theme.palette.primary.main
                      }
                    }
                  }}>
                    {job.highlights.map((highlight, idx) => (
                      <motion.li
                        key={idx}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 * idx }}
                      >
                        <Typography variant="body1">
                          {highlight}
                        </Typography>
                      </motion.li>
                    ))}
                  </Box>
                </Paper>
              </Grid>
            </Grid>
          </motion.div>
        ))}
      </Box>
    </Container>
  );
};

export default Experience; 