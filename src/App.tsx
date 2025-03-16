import React from 'react';
import { ThemeProvider, createTheme, CssBaseline, Box } from '@mui/material';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Education from './components/Education';
import Footer from './components/Footer';

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#FF5722', // Orange
      light: '#FF784E',
      dark: '#D84315',
    },
    secondary: {
      main: '#FFA726', // Light Orange
    },
    background: {
      default: '#121212',
      paper: '#1E1E1E',
    },
    text: {
      primary: '#FFFFFF',
      secondary: 'rgba(255, 255, 255, 0.7)',
    },
  },
  typography: {
    fontFamily: '"Inter", "Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontSize: '3.5rem',
      fontWeight: 700,
      letterSpacing: '-0.02em',
    },
    h2: {
      fontSize: '2.5rem',
      fontWeight: 700,
      background: 'linear-gradient(45deg, #FF5722 30%, #FFA726 90%)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      letterSpacing: '-0.02em',
    },
    h3: {
      fontSize: '2rem',
      fontWeight: 600,
      color: '#FF5722',
      letterSpacing: '-0.01em',
    },
    h4: {
      fontSize: '1.75rem',
      fontWeight: 500,
      color: '#FFA726',
    },
    body1: {
      fontSize: '1.1rem',
      lineHeight: 1.7,
    },
  },
  components: {
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: 'rgba(18, 18, 18, 0.8)',
          backdropFilter: 'blur(10px)',
          boxShadow: 'none',
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundImage: 'none',
          backgroundColor: 'rgba(30, 30, 30, 0.6)',
          backdropFilter: 'blur(10px)',
          '&:hover': {
            backgroundColor: 'rgba(40, 40, 40, 0.8)',
          },
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 12,
          textTransform: 'none',
          fontSize: '1rem',
          padding: '10px 20px',
          fontWeight: 500,
          '&:hover': {
            backgroundColor: 'rgba(255, 87, 34, 0.08)',
          },
        },
      },
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box 
        sx={{ 
          bgcolor: 'background.default',
          minHeight: '100vh',
          position: 'relative',
          overflow: 'hidden',
          '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundImage: `
              linear-gradient(rgba(255, 87, 34, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255, 87, 34, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '40px 40px',
            opacity: 0.5,
            zIndex: 1,
          },
          '&::after': {
            content: '""',
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: '600px',
            height: '600px',
            background: 'radial-gradient(circle, rgba(255, 87, 34, 0.15) 0%, rgba(255, 87, 34, 0) 70%)',
            zIndex: 0,
          },
        }}
      >
        <Navbar />
        <Box 
          component="main" 
          sx={{ 
            position: 'relative',
            zIndex: 2,
            pt: { xs: 10, md: 12 }, // Add padding top to account for fixed navbar
          }}
        >
          <div id="home">
            <Home />
          </div>
          <div id="experience">
            <Experience />
          </div>
          <div id="skills">
            <Skills />
          </div>
          <div id="education">
            <Education />
          </div>
        </Box>
        <Box sx={{ position: 'relative', zIndex: 2 }}>
          <Footer />
        </Box>
        {/* Star-like elements */}
        {[...Array(20)].map((_, i) => (
          <Box
            key={i}
            sx={{
              position: 'absolute',
              width: '2px',
              height: '2px',
              backgroundColor: 'rgba(255, 87, 34, 0.5)',
              borderRadius: '50%',
              animation: 'twinkle 1.5s infinite ease-in-out',
              animationDelay: `${Math.random() * 2}s`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              zIndex: 1,
              '@keyframes twinkle': {
                '0%, 100%': {
                  opacity: 0.2,
                  transform: 'scale(1)',
                },
                '50%': {
                  opacity: 1,
                  transform: 'scale(1.5)',
                },
              },
            }}
          />
        ))}
      </Box>
    </ThemeProvider>
  );
}

export default App;
