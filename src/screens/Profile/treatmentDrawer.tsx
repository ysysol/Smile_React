// src/TreatmentDrawer.tsx
import React, { useState } from 'react';
import { Box, TextField, Button, Typography } from '@mui/material';
import styled from 'styled-components';

interface TreatmentDrawerProps {
  closeDrawer: () => void;
  toothNumber: number | null;
}

const DrawerContainer = styled(Box)`
  padding: 20px;
  width: 300px;
  background-color: #ffffff;
`;

const StyledTextField = styled(TextField)`
  margin-bottom: 20px;
`;

const StyledButton = styled(Button)`
  margin-top: 20px;
`;

const TreatmentDrawer: React.FC<TreatmentDrawerProps> = ({ closeDrawer, toothNumber }) => {
  const [date, setDate] = useState('');
  const [provider, setProvider] = useState('');
  const [treatmentArea, setTreatmentArea] = useState('');
  const [treatment, setTreatment] = useState('');
  const [photo, setPhoto] = useState<File | null>(null);

  const handleSubmit = () => {
    // Handle form submission and SQL query
    console.log({ date, provider, treatmentArea, treatment, photo });
    closeDrawer();
  };

  return (
    <DrawerContainer>
      <Typography variant="h6">Tooth #{toothNumber}</Typography>
      <StyledTextField
        label="Date"
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
        fullWidth
        InputLabelProps={{
          shrink: true,
        }}
      />
      <StyledTextField
        label="Provider"
        value={provider}
        onChange={(e) => setProvider(e.target.value)}
        fullWidth
      />
      <StyledTextField
        label="Treatment Area"
        value={treatmentArea}
        onChange={(e) => setTreatmentArea(e.target.value)}
        fullWidth
      />
      <StyledTextField
        label="Treatment"
        value={treatment}
        onChange={(e) => setTreatment(e.target.value)}
        fullWidth
        multiline
        rows={4}
      />
      <Button
        variant="contained"
        component="label"
        fullWidth
      >
        Upload Photo
        <input
          type="file"
          hidden
          onChange={(e) => setPhoto(e.target.files ? e.target.files[0] : null)}
        />
      </Button>
      <StyledButton variant="contained" color="primary" onClick={handleSubmit} fullWidth>
        Save
      </StyledButton>
    </DrawerContainer>
  );
};

export default TreatmentDrawer;
