// src/SummaryTable.tsx
import React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Box, Typography } from '@mui/material';
import styled from 'styled-components';

const StyledTableContainer = styled(TableContainer)`
  margin-top: 20px;
`;

const SummaryTable = () => {
  const rows = [
    { date: '07/25/2020', description: 'D0210 - Intraoral complete...', toothArea: 4, provider: 'Abbey Caverhill', treatmentPlan: 'Root Canal Therapy', fees: '$110.0', status: 'Proposed', notes: 'No asymmetry, no swelling' },
    { date: '07/25/2020', description: 'D2950-Core build-up, including...', toothArea: 2, provider: 'Claribel Cypler', treatmentPlan: 'Extractions', fees: '$40.0', status: 'Proposed', notes: 'Points to #2 for pain extraorally' },
    { date: '07/25/2020', description: 'Treatment rational type of...', toothArea: 1, provider: 'Fanni Eldredge', treatmentPlan: 'Bridges and Implants', fees: '$95.0', status: 'Proposed', notes: 'Partially erupted' },
    { date: '07/25/2020', description: 'D2752-Crown porcelain fuse...', toothArea: 1, provider: 'Eliot Cooke', treatmentPlan: 'Fillings', fees: '$50.0', status: 'Proposed', notes: 'Working length radiograph - Good' },
  ];

  return (
    <Box  sx={{ bgcolor: "#ffffff",
      p: 4,
      boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
      borderRadius: 4}}>
        <Typography variant="h6">Summary</Typography>
        <StyledTableContainer>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Date</TableCell>
            <TableCell>Description</TableCell>
            <TableCell>Tooth Area</TableCell>
            <TableCell>Provider</TableCell>
            <TableCell>Treatment Plan</TableCell>
            <TableCell>Fees</TableCell>
            <TableCell>Status</TableCell>
            <TableCell>Notes</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row, index) => (
            <TableRow key={index}>
              <TableCell>{row.date}</TableCell>
              <TableCell>{row.description}</TableCell>
              <TableCell>{row.toothArea}</TableCell>
              <TableCell>{row.provider}</TableCell>
              <TableCell>{row.treatmentPlan}</TableCell>
              <TableCell>{row.fees}</TableCell>
              <TableCell>{row.status}</TableCell>
              <TableCell>{row.notes}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </StyledTableContainer>
    </Box>
  );
};

export default SummaryTable;
