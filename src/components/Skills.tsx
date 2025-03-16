import React from 'react';
import {
  Container,
  Typography,
  Box,
  Paper,
  Grid,
  useTheme,
  LinearProgress,
} from '@mui/material';
import { motion } from 'framer-motion';
import JavaScriptIcon from '@mui/icons-material/Javascript';
import CodeIcon from '@mui/icons-material/Code';
import HtmlIcon from '@mui/icons-material/Html';
import CssIcon from '@mui/icons-material/Css';
import WebIcon from '@mui/icons-material/Web';
import StorageIcon from '@mui/icons-material/Storage';
import DataObjectIcon from '@mui/icons-material/DataObject';
import ApiIcon from '@mui/icons-material/Api';
import GitHubIcon from '@mui/icons-material/GitHub';
import TerminalIcon from '@mui/icons-material/Terminal';
import DeveloperModeIcon from '@mui/icons-material/DeveloperMode';
import SettingsIcon from '@mui/icons-material/Settings';

const Skills = () => {
  const theme = useTheme();
  const skills = [
    { name: 'JavaScript', icon: <JavaScriptIcon sx={{ fontSize: 40 }} />, proficiency: 90 },
    { name: 'TypeScript', icon: <CodeIcon sx={{ fontSize: 40 }} />, proficiency: 85 },
    { name: 'React.js', icon: <WebIcon sx={{ fontSize: 40 }} />, proficiency: 88 },
    { name: 'React Hooks', icon: <DeveloperModeIcon sx={{ fontSize: 40 }} />, proficiency: 85 },
    { name: 'Redux', icon: <StorageIcon sx={{ fontSize: 40 }} />, proficiency: 80 },
    { name: 'Material UI', icon: <CssIcon sx={{ fontSize: 40 }} />, proficiency: 88 },
    { name: 'Tailwind CSS', icon: <CssIcon sx={{ fontSize: 40 }} />, proficiency: 85 },
    { name: 'Bootstrap', icon: <CssIcon sx={{ fontSize: 40 }} />, proficiency: 90 },
    { name: 'Express.js', icon: <DataObjectIcon sx={{ fontSize: 40 }} />, proficiency: 82 },
    { name: 'Node.js', icon: <TerminalIcon sx={{ fontSize: 40 }} />, proficiency: 85 },
    { name: 'Ruby on Rails', icon: <CodeIcon sx={{ fontSize: 40 }} />, proficiency: 75 },
    { name: 'REST APIs', icon: <ApiIcon sx={{ fontSize: 40 }} />, proficiency: 88 },
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
            variant="h2" 
            gutterBottom 
            sx={{ 
              fontWeight: 600,
              textAlign: 'center',
              mb: 6
            }}
          >
            Technical Skills
          </Typography>
        </motion.div>

        <Grid container spacing={3}>
          {skills.map((skill, index) => (
            <Grid item xs={6} sm={4} md={3} key={skill.name}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Paper
                  elevation={2}
                  sx={{
                    p: 3,
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    textAlign: 'center',
                    borderRadius: 2,
                    transition: 'all 0.3s ease-in-out',
                    backgroundColor: 'rgba(30, 30, 30, 0.6)',
                    backdropFilter: 'blur(10px)',
                    border: '1px solid rgba(255, 87, 34, 0.1)',
                    '&:hover': {
                      transform: 'translateY(-5px)',
                      backgroundColor: 'rgba(40, 40, 40, 0.8)',
                      border: '1px solid rgba(255, 87, 34, 0.3)',
                      '& .MuiSvgIcon-root': {
                        color: theme.palette.primary.main,
                        transform: 'scale(1.1)',
                      },
                      '& .MuiLinearProgress-bar': {
                        backgroundColor: theme.palette.primary.main,
                      },
                    },
                    '& .MuiSvgIcon-root': {
                      transition: 'all 0.3s ease-in-out',
                      color: theme.palette.primary.light,
                    },
                  }}
                >
                  <Box sx={{ mb: 2 }}>
                    {skill.icon}
                  </Box>
                  <Typography
                    variant="body1"
                    sx={{
                      fontWeight: 500,
                      color: theme.palette.text.primary,
                      mb: 1,
                    }}
                  >
                    {skill.name}
                  </Typography>
                  <Box sx={{ width: '100%', mt: 1 }}>
                    <LinearProgress
                      variant="determinate"
                      value={skill.proficiency}
                      sx={{
                        height: 6,
                        borderRadius: 3,
                        backgroundColor: 'rgba(255, 255, 255, 0.1)',
                        '& .MuiLinearProgress-bar': {
                          borderRadius: 3,
                          backgroundColor: theme.palette.primary.light,
                          transition: 'all 0.3s ease-in-out',
                        },
                      }}
                    />
                    <Typography
                      variant="caption"
                      sx={{
                        color: theme.palette.text.secondary,
                        mt: 0.5,
                        display: 'block',
                      }}
                    >
                      {skill.proficiency}%
                    </Typography>
                  </Box>
                </Paper>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Container>
  );
};

export default Skills; 