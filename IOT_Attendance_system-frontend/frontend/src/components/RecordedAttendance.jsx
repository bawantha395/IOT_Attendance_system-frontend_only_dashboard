import * as React from 'react';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import BlockIcon from '@mui/icons-material/Block';
import ErrorIcon from '@mui/icons-material/Error';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Title from './Title';

// Generate Order Data
function createData(id, regno, name, time, status) {
  return { id, regno, name, time, status };
}

const rows = [
  createData(0, 'EG/20##/####', 'Name1', '08.31.11', 'Approved'),
  createData(1, 'EG/20##/####', 'Name2', '08.31.53', 'Disable'),
  createData(2, 'EG/20##/####', 'Name3', '08.32.05', 'Error'),
  createData(3, 'EG/20##/####', 'Name4', '08.32.15', 'Approved'),
];

export default function RecordedAttendance() {
  return (
    <React.Fragment>
      <Title>Recorded Attendance</Title>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Reg No</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>Time</TableCell>
            <TableCell align="justfy">Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell>{row.regno}</TableCell>
              <TableCell>{row.name}</TableCell>
              <TableCell>{row.time}</TableCell>
              <TableCell align="justify" style={{ display: 'flex', alignItems: 'center' }}>
                {row.status === 'Approved' && <CheckCircleIcon color="success" style={{ marginRight: '4px' }} />}
                {row.status === 'Disable' && <BlockIcon color="error" style={{ marginRight: '4px' }} />}
                {row.status === 'Error' && <ErrorIcon color="error" style={{ marginRight: '4px' }} />}
                {row.status}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </React.Fragment>
  );
}
