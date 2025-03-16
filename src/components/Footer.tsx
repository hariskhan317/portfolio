import React from 'react';
import {
  Box,
  Container,
  Typography,
  IconButton,
  Grid,
  useTheme,
  Button,
} from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { motion } from 'framer-motion';

const Footer = () => {
  const theme = useTheme();
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      name: 'GitHub',
      icon: <GitHubIcon sx={{ fontSize: 28 }} />,
      url: 'https://github.com/hariskhan317',
      color: '#ffffff',
    },
    {
      name: 'LinkedIn',
      icon: <LinkedInIcon sx={{ fontSize: 28 }} />,
      url: 'https://www.linkedin.com/in/haris-khan-9b6449292/',
      color: '#0077B5',
    },
    {
      name: 'Twitter',
      icon: <TwitterIcon sx={{ fontSize: 28 }} />,
      url: 'https://twitter.com/hariskhan317',
      color: '#1DA1F2',
    },
    {
      name: 'Email',
      icon: <EmailIcon sx={{ fontSize: 28 }} />,
      url: 'mailto:harriss.khan.001@gmail.com',
      color: '#EA4335',
    },
  ];

  return (
    <Box
      component="footer"
      sx={{
        py: 8,
        backgroundColor: 'transparent',
        position: 'relative',
        overflow: 'hidden',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: '1px',
          background: 'rgba(255, 255, 255, 0.1)',
        },
      }}
    >
      <Container maxWidth="lg">
        <Grid container>
          <Grid item xs={12} md={6}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <Typography
                variant="h2"
                sx={{
                  fontSize: { xs: '2rem', md: '2.5rem' },
                  fontWeight: 600,
                  mb: 2,
                  background: 'linear-gradient(45deg, #FF5722 30%, #FFA726 90%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                Let's Connect
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  color: 'rgba(255, 255, 255, 0.7)',
                  maxWidth: '500px',
                  mb: 3,
                }}
              >
                Feel free to reach out for collaborations, opportunities, or just a friendly hello!
              </Typography>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                <LocationOnIcon sx={{ mr: 1, color: theme.palette.primary.main }} />
                <Typography variant="body1" sx={{ color: 'rgba(255, 255, 255, 0.7)' }}>
                  New York, United States
                </Typography>
              </Box>
            </motion.div>
          </Grid>
          <Grid item xs={12} md={6} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end' }}>
            <Box sx={{ display: 'flex', gap: 2, mb: 4 }}>
              {socialLinks.map((link) => (
                <motion.div
                  key={link.name}
                  whileHover={{ y: -5 }}
                  transition={{ duration: 0.2 }}
                >
                  <IconButton
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    sx={{
                      color: 'white',
                      transition: 'all 0.3s ease',
                      width: 45,
                      height: 45,
                      '&:hover': {
                        color: link.color,
                        backgroundColor: 'rgba(255, 255, 255, 0.1)',
                        transform: 'scale(1.1)',
                      },
                    }}
                    aria-label={link.name}
                  >
                    {link.icon}
                  </IconButton>
                </motion.div>
              ))}
            </Box>
            <Button
              href="mailto:harriss.khan.001@gmail.com"
              variant="outlined"
              startIcon={<EmailIcon />}
              sx={{
                borderColor: theme.palette.primary.main,
                color: 'white',
                '&:hover': {
                  borderColor: theme.palette.primary.light,
                  backgroundColor: 'rgba(255, 87, 34, 0.08)',
                },
              }}
            >
              Get in touch
            </Button>
          </Grid>
        </Grid>
        <Box
          sx={{
            mt: 8,
            pt: 3,
            borderTop: '1px solid rgba(255, 255, 255, 0.1)',
            textAlign: 'center',
          }}
        >
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <Typography
              variant="body2"
              sx={{
                color: 'rgba(255, 255, 255, 0.5)',
              }}
            >
              © {currentYear} Haris Khan. All rights reserved.
            </Typography>
          </motion.div>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer; 