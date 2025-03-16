import * as React from 'react';
import { useState, useEffect } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  useTheme,
  useMediaQuery,
  Box,
  Container,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { motion, AnimatePresence } from 'framer-motion';

interface MenuItem {
  text: string;
  id: string;
}

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const menuItems: MenuItem[] = [
    { text: 'Home', id: 'home' },
    { text: 'Experience', id: 'experience' },
    { text: 'Skills', id: 'skills' },
    { text: 'Education', id: 'education' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      if (mobileOpen) {
        handleDrawerToggle();
      }
    }
  };

  const drawer = (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      style={{
        height: '100vh',
        background: '#121212',
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
      }}
    >
      <IconButton
        onClick={handleDrawerToggle}
        sx={{
          position: 'absolute',
          top: 20,
          right: 20,
          color: 'white',
          '&:hover': {
            color: theme.palette.primary.main,
          },
        }}
      >
        <CloseIcon />
      </IconButton>
      <List sx={{ textAlign: 'center' }}>
        {menuItems.map((item, index) => (
          <motion.div
            key={item.text}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
          >
            <ListItem disablePadding sx={{ mb: 2 }}>
              <ListItemButton
                onClick={() => scrollToSection(item.id)}
                sx={{
                  justifyContent: 'center',
                  py: 2,
                  '&:hover': {
                    background: 'none',
                    '& .MuiTypography-root': {
                      color: theme.palette.primary.main,
                      transform: 'translateY(-2px)',
                    },
                  },
                }}
              >
                <Typography
                  variant="h4"
                  sx={{
                    transition: 'all 0.3s ease',
                    fontSize: '2rem',
                    fontWeight: 500,
                  }}
                >
                  {item.text}
                </Typography>
              </ListItemButton>
            </ListItem>
          </motion.div>
        ))}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: menuItems.length * 0.1, duration: 0.5 }}
        >
          <ListItem disablePadding sx={{ mb: 2 }}>
            <ListItemButton
              onClick={() => scrollToSection('footer')}
              sx={{
                justifyContent: 'center',
                py: 2,
                '&:hover': {
                  background: 'none',
                  '& .MuiTypography-root': {
                    color: theme.palette.primary.main,
                    transform: 'translateY(-2px)',
                  },
                },
              }}
            >
              <Typography
                variant="h4"
                sx={{
                  transition: 'all 0.3s ease',
                  fontSize: '2rem',
                  fontWeight: 500,
                }}
              >
                Contact
              </Typography>
            </ListItemButton>
          </ListItem>
        </motion.div>
      </List>
    </motion.div>
  );

  return (
    <>
      <motion.div
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <AppBar
          position="fixed"
          elevation={0}
          sx={{
            background: scrolled ? 'rgba(18, 18, 18, 0.9)' : 'transparent',
            backdropFilter: scrolled ? 'blur(10px)' : 'none',
            transition: 'all 0.3s ease',
            boxShadow: 'none',
            borderBottom: scrolled ? '1px solid rgba(255, 255, 255, 0.1)' : 'none',
          }}
        >
          <Container maxWidth="lg">
            <Toolbar 
              disableGutters 
              sx={{ 
                height: 80,
                display: 'flex',
                justifyContent: 'space-between',
              }}
            >
              {/* Logo/Name */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                <Typography
                  variant="h5"
                  sx={{
                    fontWeight: 600,
                    letterSpacing: '-0.02em',
                    cursor: 'pointer',
                    minWidth: '120px',
                    '&:hover': {
                      color: theme.palette.primary.main,
                    },
                  }}
                  onClick={() => scrollToSection('home')}
                >
                  Haris Khan
                </Typography>
              </motion.div>

              {/* Center Navigation */}
              {!isMobile && (
                <Box sx={{ display: 'flex', gap: 4, justifyContent: 'center', flex: 1 }}>
                  {menuItems.map((item, index) => (
                    <motion.div
                      key={item.text}
                      initial={{ opacity: 0, y: -20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1, duration: 0.5 }}
                    >
                      <Button
                        onClick={() => scrollToSection(item.id)}
                        sx={{
                          color: 'white',
                          textTransform: 'none',
                          fontSize: '1rem',
                          fontWeight: 400,
                          position: 'relative',
                          '&:hover': {
                            background: 'none',
                            color: theme.palette.primary.main,
                            '&::after': {
                              width: '100%',
                            },
                          },
                          '&::after': {
                            content: '""',
                            position: 'absolute',
                            bottom: 0,
                            left: 0,
                            width: '0%',
                            height: '1px',
                            backgroundColor: theme.palette.primary.main,
                            transition: 'width 0.3s ease',
                          },
                        }}
                      >
                        {item.text}
                      </Button>
                    </motion.div>
                  ))}
                </Box>
              )}

              {/* Contact Button or Mobile Menu */}
              {isMobile ? (
                <IconButton
                  onClick={handleDrawerToggle}
                  sx={{
                    color: 'white',
                    '&:hover': {
                      color: theme.palette.primary.main,
                    },
                  }}
                >
                  <MenuIcon />
                </IconButton>
              ) : (
                <motion.div
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: menuItems.length * 0.1, duration: 0.5 }}
                >
                  <Button
                    variant="outlined"
                    onClick={() => scrollToSection('footer')}
                    sx={{
                      borderColor: theme.palette.primary.main,
                      color: 'white',
                      textTransform: 'none',
                      fontSize: '1rem',
                      fontWeight: 400,
                      minWidth: '120px',
                      '&:hover': {
                        borderColor: theme.palette.primary.light,
                        backgroundColor: 'rgba(255, 87, 34, 0.08)',
                      },
                    }}
                  >
                    Contact
                  </Button>
                </motion.div>
              )}
            </Toolbar>
          </Container>
        </AppBar>
      </motion.div>

      <AnimatePresence>
        {mobileOpen && (
          <Drawer
            variant="temporary"
            anchor="right"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            ModalProps={{
              keepMounted: true,
            }}
            PaperProps={{
              sx: {
                width: '100%',
                backgroundColor: 'transparent',
                boxShadow: 'none',
              },
            }}
          >
            {drawer}
          </Drawer>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar; 