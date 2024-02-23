import * as React from 'react';

import { styled, createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import MuiDrawer from '@mui/material/Drawer';
import Box from '@mui/material/Box';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Brightness4Icon from '@mui/icons-material/Brightness4'; // Dark mode icon
import Brightness7Icon from '@mui/icons-material/Brightness7'; // Light mode icon

import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import NotificationsIcon from '@mui/icons-material/Notifications';

import ClockProps from './ClockProps';
import DateCalendarFormProps from './DateCalendarFormProps';

import Avatar from '@mui/material/Avatar';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { mainListItems } from './ListItem';
import ModuleDetails from './ModuleDetails';

import {
  AbsentCard,
  BatteryLevelCard,
  RealTimeAttendanceCard,
  TotalRegisteredStudentsCard,
  YetToBeRegisteredCard,
} from './Cards';
import RecordedAttendance from './RecordedAttendance';
import PieArcLabel from './PieChart';
import OutlinedCard from './LowAttendanceWarningCard';

// Include the Nunito font in your CSS
import './dashboard.css';

// import Breadcrumbs from '@mui/material/Breadcrumbs';
// import Link from '@mui/material/Link';
import Tooltip from '@mui/material/Tooltip';

// import WeatherNightIcon from '@mdi/react/WeatherNight';
// import WeatherSunnyIcon from '@mdi/react/WeatherSunny';

const drawerWidth = 240;

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.easeInOut,
    duration: theme.transitions.duration.standard,
  }),
  backgroundColor: theme.palette.mode === 'dark' ? theme.palette.background.default : 'White',
  color: theme.palette.mode === 'dark' ? theme.palette.grey[300] : theme.palette.grey[800],
  boxShadow: 'none',
  borderBottom: `1px solid ${theme.palette.divider}`,
  minHeight: 70,
  position: 'fixed',
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.easeInOut,
      duration: theme.transitions.duration.standard,
    }),
    boxShadow: theme.shadows[0],
  }),
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    '& .MuiDrawer-paper': {
      position: 'sticky', // Set the position to sticky
      top: 0, // Stick to the top of the container
      height: '100vh', // Full height of the viewport
      overflowY: 'auto', // Enable vertical scrolling if needed
      width: drawerWidth,
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
      boxSizing: 'border-box',
      backgroundColor: theme.palette.mode === 'dark' ? '#1D1E21' : theme.palette.background.default,
      boxShadow: `0px 0px 10px 0px rgba(0,0,0,${open ? '0.2' : '0'})`,
      ...(theme.palette.mode === 'dark' && {
        boxShadow: `0px 0px 10px 0px rgba(255,255,255,${open ? '0.2' : '0'})`,
      }),
      ...(!open && {
        width: theme.spacing(7),
        [theme.breakpoints.up('sm')]: {
          width: theme.spacing(9),
        },
      }),
    },
  }),
);




export default function Dashboard() {
  const [open, setOpen] = React.useState(true);
  const [themeMode, setThemeMode] = React.useState('light');

  const toggleDrawer = () => {
    setOpen(!open);
  };

  const handleThemeChange = () => {
    setThemeMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
  };

  const [anchorEl, setAnchorEl] = React.useState(null);
  const isMenuOpen = Boolean(anchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          mode: themeMode,
          background: {
            default: themeMode === 'light' ? '#F4F7FE' : '#000000',
          },
          components: {
            MuiDrawer: {
              styleOverrides: {
                paper: {
                  backgroundColor: themeMode === 'dark' ? '#1D1E21' : '#ffffff',
                  fontFamily: 'Nunito, sans-serif',
                },
              },
            },
          },
        },
      }),
    [themeMode]
  );

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <AppBar position="absolute" open={open}>
          {/* Breadcrumbs */}
          {/* ... (your previous Breadcrumbs code) */}
          {/* End of Breadcrumbs */}
          <Toolbar
            sx={{
              pr: "24px",
            }}
          >
            <IconButton
              edge="start"
              color="inherit"
              aria-label="open drawer"
              onClick={toggleDrawer}
              sx={{
                marginRight: "36px",
                ...(open && { display: "none" }),
              }}
            >
              <MenuIcon />
            </IconButton>
            <Typography
              component="h1"
              variant="h6"
              color="inherit"
              noWrap
              sx={{
                flexGrow: 1,
                fontFamily: 'Rubik, sans-serif',
              }}
            >
              Main Dashboard
            </Typography>
            {/* Add tooltips to dark mode button, notification button, and profile picture button */}
            <Box sx={{ display: "flex", gap: 5 }}>
              <Tooltip title={`Switch to ${themeMode === "dark" ? "Light" : "Dark"} Mode`}>
                <IconButton color="inherit" onClick={handleThemeChange}>
                  {themeMode === "dark" ? <Brightness7Icon /> : <Brightness4Icon />}
                </IconButton>
              </Tooltip>
              <Tooltip title="Notifications">
                <IconButton color="inherit">
                  <Badge badgeContent={4} color="secondary">
                    <NotificationsIcon />
                  </Badge>
                </IconButton>
              </Tooltip>
              <Tooltip title="Profile Details">
                <IconButton
                  size="large"
                  edge="end"
                  aria-label="account of current user"
                  aria-controls="menu-appbar"
                  aria-haspopup="true"
                  onClick={handleProfileMenuOpen}
                  color="inherit"
                >
                  <Avatar alt="Profile Picture" src="/path/to/your/profile/pic.jpg" />
                </IconButton>
              </Tooltip>
            </Box>
          </Toolbar>
        </AppBar>

        <Menu
          id="menu-appbar"
          anchorEl={anchorEl}
          anchorOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
          keepMounted
          transformOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
          open={isMenuOpen}
          onClose={handleMenuClose}
        >
          <MenuItem onClick={handleMenuClose}>Lecturer Name</MenuItem>
          <MenuItem onClick={handleMenuClose}>Department</MenuItem>
        </Menu>

        <Drawer variant="permanent" open={open}>
          <Toolbar
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              px: [1],
            }}
          >
            {open ? (
              <Typography
                variant="h6"
                noWrap
                component="div"
                sx={{
                  flexGrow: 1,
                  textAlign: "center",
                  color: (theme) => (theme.palette.mode === "dark" ? "white" : "#1B254B"),
                  fontFamily: 'Nunito, sans-serif',
                }}
              >
                <Box
                  component="span"
                  sx={{
                    fontWeight: "1000",
                    fontFamily: "Rubik",
                    fontSize:"200" ,
                    color: (theme) => (theme.palette.mode === "dark" ? "white" : "#1B254B"),
                  }}
                >
                  ATS
                </Box>{" "}
                <Box
                  component="span"
                  sx={{
                    fontFamily: "Rubik", 
                    color: (theme) => (theme.palette.mode === "dark" ? "white" : "#1B254B"),
                  }}
                >
                  IOT
                </Box>
              </Typography>
            ) : (
              <IconButton
                color="inherit"
                sx={{
                  flexGrow: 1,
                  justifyContent: "center",
                  color: "#1B254B",
                }}
              ></IconButton>
            )}
            <IconButton onClick={toggleDrawer}>
              <ChevronLeftIcon />
            </IconButton>
          </Toolbar>
          {/* <Divider /> */}
          <List component="nav">
            {mainListItems}
            {/* <Divider sx={{ my: 100 }} /> */}
          </List>
        </Drawer>

        <Box
          component="main"
          sx={{
            backgroundColor: theme.palette.background.default,
            flexGrow: 1,
            minHeight: "100vh",
            overflow: "auto",
          }}
        >
          <Toolbar />
          <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
            <Grid container spacing={3}>
              <Grid item xs={12} sm={6} md={4} lg={4}>
                <Paper
                  sx={{
                    p: 2,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    height: 310,
                    borderRadius: 8,
                    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
                  }}
                >
                  <ClockProps />
                </Paper>
              </Grid>
              <Grid item xs={12} sm={6} md={4} lg={4}>
                <Paper
                  sx={{
                    p: 2,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    height: 310,
                    borderRadius: 8,
                    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
                  }}
                >
                  <DateCalendarFormProps />
                </Paper>
              </Grid>
              <Grid item xs={12} sm={6} md={4} lg={4}>
                <Paper
                  sx={{
                    p: 2,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    height: 310,
                    borderRadius: 8,
                    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
                  }}
                >
                  <ModuleDetails />
                </Paper>
              </Grid>
              <Grid item xs={12} sm={6} md={4} lg={4}>
                <TotalRegisteredStudentsCard />
              </Grid>
              <Grid item xs={12} sm={6} md={4} lg={4}>
                <YetToBeRegisteredCard />
              </Grid>
              <Grid item xs={12} sm={6} md={4} lg={4}>
                <BatteryLevelCard />
              </Grid>
              <Grid item xs={12} sm={6} md={4} lg={4}>
                <RealTimeAttendanceCard />
              </Grid>
              <Grid item xs={12} sm={6} md={4} lg={4}>
                <AbsentCard />
              </Grid>
              <PieArcLabel />
              <Grid item xs={12} sm={6} md={4} lg={4}>
                <OutlinedCard />
              </Grid>
              <Grid item xs={12}>
                <Paper sx={{ p: 2, display: "flex", flexDirection: "column" }}>
                  <RecordedAttendance />
                </Paper>
              </Grid>
            </Grid>
          </Container>
        </Box>
      </Box>
    </ThemeProvider>
  );
}
