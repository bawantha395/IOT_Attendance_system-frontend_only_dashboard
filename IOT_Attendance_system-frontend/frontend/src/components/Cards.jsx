// Cards.jsx

import React from 'react';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import PeopleIcon from '@mui/icons-material/People';
import BatteryIcon from '@mui/icons-material/BatteryFull';
import AttendanceIcon from '@mui/icons-material/EventAvailable';
import AbsentIcon from '@mui/icons-material/EventBusy';
// import WarningIcon from '@mui/icons-material/Warning';


// Define the fetch functions
const fetchTotalRegisteredStudentsCount = () => {
  // Simulate fetching data from an API or another source
  return 150; // Replace with your actual data-fetching logic
};

const fetchYetToBeRegisteredCount = () => {
  // Simulate fetching data from an API or another source
  return 50; // Replace with your actual data-fetching logic
};

const fetchBatteryLevel = () => {
  // Simulate fetching data from an API or another source
  return 80; // Replace with your actual data-fetching logic
};

const fetchRealTimeAttendance = () => {
  // Simulate fetching data from an API or another source
  return 140; // Replace with your actual data-fetching logic
};

const fetchAbsentCount = () => {
  // Simulate fetching data from an API or another source
  return 10; // Replace with your actual data-fetching logic
};

const cardStyles = {
  p: 2,
  display: 'flex',
  flexDirection: 'column', // Adjusted to stack content vertically
  alignItems: 'left', // Center items horizontally
  justifyContent: 'left', // Center items vertically
  height: 90, // Adjusted to accommodate two lines of text and an icon
  width: 325,
  borderRadius: 4,
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  mt: 0.5,
};

export const TotalRegisteredStudentsCard = () => {
  const totalRegisteredStudentsCount = fetchTotalRegisteredStudentsCount();

  return (
    <Card sx={cardStyles}>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <PeopleIcon color="primary" fontSize="large" /> {/* Icon */}
        <div style={{ marginLeft: 20, display: 'flex', flexDirection: 'column' }}>
          <Typography variant="h6">Total Registered Students</Typography>
          <Typography variant="h8" >Count: {totalRegisteredStudentsCount}</Typography>
        </div>
      </div>
      
    </Card>
  );
};

export const YetToBeRegisteredCard = () => {
  const yetToBeRegisteredCount = fetchYetToBeRegisteredCount();

  return (
    <Card sx={cardStyles}>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <PeopleIcon color="primary" fontSize="large" /> {/* Icon */}
        <div style={{ marginLeft: 20, display: 'flex', flexDirection: 'column' }}>
          <Typography variant="h6">Yet to be Registered</Typography>
          <Typography variant="h8">Count: {yetToBeRegisteredCount}</Typography>
        </div>
      </div>
      
    </Card>
  );
};

export const BatteryLevelCard = () => {
  const batteryLevel = fetchBatteryLevel();

  return (
    <Card sx={cardStyles}>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <BatteryIcon color="primary" fontSize="large" /> {/* Icon */}
        <div style={{ marginLeft: 20, display: 'flex', flexDirection: 'column' }}>
          <Typography variant="h6">Battery Level</Typography>
          <Typography variant="h8">Level: {batteryLevel}%</Typography>
        </div>
      </div>
      
    </Card>
  );
};

export const RealTimeAttendanceCard = () => {
  const realTimeAttendance = fetchRealTimeAttendance();

  return (
    <Card sx={cardStyles}>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <AttendanceIcon color="primary" fontSize="large" /> {/* Icon */}
        <div style={{ marginLeft: 20, display: 'flex', flexDirection: 'column' }}>
          <Typography variant="h6">Real Time Attendance</Typography>
          <Typography variant="h8">Attendance: {realTimeAttendance}</Typography>
        </div>
      </div>
      
    </Card>
  );
};

export const AbsentCard = () => {
  const absentCount = fetchAbsentCount();

  return (
    <Card sx={cardStyles}>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <AbsentIcon color="primary" fontSize="large" /> {/* Icon */}
        <div style={{ marginLeft: 20, display: 'flex', flexDirection: 'column' }}>
          <Typography variant="h6">Absent</Typography>
          <Typography variant="h8">Count: {absentCount}</Typography>
        </div>
      </div>
      
    </Card>
  );
};

