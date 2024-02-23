import React from 'react';
import { Box, Card, CardContent, Typography, useTheme, ThemeProvider } from '@mui/material';
import WarningIcon from '@mui/icons-material/Warning';
import { createTheme } from '@mui/material/styles';

// Function to create a theme with dark and light mode support
const getTheme = (mode) => createTheme({
  palette: {
    mode,
    
    background: {
      default: mode === 'dark' ? '#1D1E21' : '#fff',
      paper: mode === 'dark' ? '#1D1E21' : '#fff',
    },
    text: {
      primary: mode === 'dark' ? '#fff' : '#000',
      secondary: mode === 'dark' ? '#e0e0e0' : '#555',
    },
    error: {
      main: mode === 'dark' ? '#ff5252' : '#f44336',
    },
  },
});

export default function BasicCard() {
  const theme = useTheme();

  return (
    <ThemeProvider theme={getTheme(theme.palette.mode)}>
      <Box sx={{ width: 420, margin: 'auto', mt: 0.5 }}>
        <Card sx={{ minWidth: 275, height:390, bgcolor: theme.palette.background.paper, boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)' }}>
          <CardContent>
            <Typography sx={{ fontSize: 18, display: 'flex', alignItems: 'center', color: theme.palette.error.main }} gutterBottom>
              <WarningIcon sx={{ mr: 1, fontSize: 50 }} /> Low Attendance Warning (80%)
            </Typography>
            <Typography variant="h5" component="div">
              Count: 7 students
            </Typography>
            <Typography variant="body2" sx={{ mt: 2, color: theme.palette.error.main }}>
              EG/2020/4405<br />
              EG/2020/4406<br />
              EG/2020/4407<br />
              EG/2020/4408<br />
              EG/2020/4409<br />
              EG/2020/4410
            </Typography>
          </CardContent>
        </Card>
      </Box>
    </ThemeProvider>
  );
}
