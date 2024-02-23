import * as React from 'react';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Typography from '@mui/material/Typography';

import LayersIcon from '@mui/icons-material/Layers';
import ScheduleIcon from '@mui/icons-material/Schedule';
import HomeIcon from '@mui/icons-material/Home';
import ExitToAppIcon from '@mui/icons-material/ExitToApp'; // Import the logout icon

export const mainListItems = (
  <React.Fragment>
    <ListItemButton>
      <ListItemIcon>
        <HomeIcon style={{ color: 'blue' }} />
      </ListItemIcon>
      <ListItemText
        primary={
          <Typography
            fontFamily="Nunito"
            fontWeight={1000} // Adjust the weight as needed
            style={{ color: 'darkblue' }}
          >
            Main Dashboard
          </Typography>
        }
      />
    </ListItemButton>

    <ListItemButton>
      <ListItemIcon>
        <LayersIcon />
      </ListItemIcon>
      <ListItemText
        primary={
          <Typography
            fontFamily="Nunito"
            fontWeight={1000} // Adjust the weight as needed
          >
            My Modules
          </Typography>
        }
      />
    </ListItemButton>

    <ListItemButton>
      <ListItemIcon>
        <ScheduleIcon />
      </ListItemIcon>
      <ListItemText
        primary={
          <Typography
            fontFamily="Nunito"
            fontWeight={1000} // Adjust the weight as needed
          >
            Lecture Times
          </Typography>
        }
      />
    </ListItemButton>

    {/* Logout Option */}
    <ListItemButton onClick={() => window.location.href = 'http://lms.eng.ruh.ac.lk/login/index.php'}>
      <ListItemIcon>
        <ExitToAppIcon />
      </ListItemIcon>
      <ListItemText
        primary={
          <Typography
            fontFamily="Nunito"
            fontWeight={1000} // Adjust the weight as needed
          >
            Logout
          </Typography>
        }
      />
    </ListItemButton>
  </React.Fragment>
);
