
import React from 'react';
import { PieChart as MuiPieChart } from '@mui/x-charts';
import { Card, CardContent, Typography, useTheme, ThemeProvider, createTheme } from '@mui/material';
import { styled } from '@mui/system';

const data = [
  { label: 'Attendance', value: 80 },
  { label: 'Absent', value: 20 },
];

// Function to create a theme with dark and light mode support
const getTheme = (mode) => createTheme({
  palette: {
    mode,
    background: {
      default: mode === 'dark' ? '1E1E1E' : '#fff',
      paper: mode === 'dark' ? '1E1E1E' : '#fff',
    },
    text: {
      primary: mode === 'dark' ? '#fff' : '#000',
      secondary: mode === 'dark' ? '#e0e0e0' : '#555',
    },
  },
});

// Styled components for enhanced styling
const StyledCard = styled(Card)(({ theme }) => ({
  background: theme.palette.background.paper,
  color: theme.palette.text.primary,
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  margin: '28px',
}));

const StyledCardContent = styled(CardContent)({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
});

const StyledTypography = styled(Typography)({
  marginBottom: '1rem',
});

const StyledMuiPieChart = styled(MuiPieChart)({
  '.recharts-legend-wrapper': {
    margin: '32px 0',
  },
});

const MyPieChart = () => {
  // Use the current theme
  const theme = useTheme();
  
  // You can also use a media query to determine the user's preference
  //  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');
  //  const currentTheme = getTheme(prefersDarkMode ? 'dark' : 'light');

  return (
    <ThemeProvider theme={getTheme(theme.palette.mode)}>
      <StyledCard>
        <StyledCardContent>
          <StyledTypography variant="h6" gutterBottom>
            Data Analysis
          </StyledTypography>
          <StyledMuiPieChart
            series={[
              {
                arcLabel: (item) => `(${item.value}%)`,
                arcLabelMinAngle: 45,
                data,
              },
            ]}
            height={300}
            width={500}
          />
        </StyledCardContent>
      </StyledCard>
    </ThemeProvider>
  );
};

export default MyPieChart;
