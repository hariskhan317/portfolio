import React from 'react';
import {
  Container,
  Typography,
  Box,
  Paper,
  Grid,
} from '@mui/material';
import { motion } from 'framer-motion';
import SchoolIcon from '@mui/icons-material/School';

const Education = () => {
  return (
    <Container>
      <Box sx={{ py: 4 }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Typography variant="h3" gutterBottom>
            Education
          </Typography>
        </motion.div>

        <Grid container spacing={3}>
          <Grid item xs={12}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <Paper elevation={3} sx={{ p: 4 }}>
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                  <SchoolIcon color="primary" sx={{ fontSize: 40, mr: 2 }} />
                  <Box>
                    <Typography variant="h5" gutterBottom color="primary">
                      Bachelor's Degree in Computer Software Engineering
                    </Typography>
                    <Typography variant="h6" color="text.secondary">
                      University of Gujrat
                    </Typography>
                    <Typography variant="subtitle1" color="text.secondary">
                      Gujrat, Punjab
                    </Typography>
                  </Box>
                </Box>
                
                <Typography variant="body1" sx={{ mt: 2 }}>
                  Completed comprehensive coursework in software engineering, including:
                </Typography>
                <Box component="ul" sx={{ mt: 1 }}>
                  <Typography component="li">Software Design & Architecture</Typography>
                  <Typography component="li">Web Development</Typography>
                  <Typography component="li">Database Management Systems</Typography>
                  <Typography component="li">Data Structures & Algorithms</Typography>
                  <Typography component="li">Object-Oriented Programming</Typography>
                </Box>
              </Paper>
            </motion.div>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default Education; 