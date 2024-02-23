import React, { useState, useEffect } from 'react';
import dayjs from 'dayjs';
import { DemoContainer, DemoItem } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';

export default function DateCalendarFormProps() {
  const [currentDate, setCurrentDate] = useState(dayjs());

  useEffect(() => {
    // Update the current date every second
    const intervalId = setInterval(() => {
      setCurrentDate(dayjs());
    }, 1000);

    // Clear the interval when the component is unmounted
    return () => clearInterval(intervalId);
  }, []);

  const calendarStyles = {
    width: 270,
    height: 270,
    fontSize: '14px', // Adjust the font size as needed
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer components={['DateCalendar', 'DateCalendar']}>
        <DemoItem>
          <DateCalendar
            defaultValue={currentDate}
            readOnly
            style={calendarStyles}
          />
        </DemoItem>
      </DemoContainer>
    </LocalizationProvider>
  );
}
