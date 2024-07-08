import React, { useState } from 'react';
import { FormControl, InputLabel, Select, MenuItem, Box, Button, SelectChangeEvent } from '@mui/material';

const CareplanTypeDropdown: React.FC = () => {
  const [careplanType, setCareplanType] = useState<string>('General Dentistry');

  const handleChange = (event: SelectChangeEvent<string>) => {
    setCareplanType(event.target.value);
  };

  return (
    <Box display="flex" alignItems="center" my={2}>
      <FormControl variant="outlined" size="small" style={{ minWidth: 200, marginRight: '16px' }}>
        <InputLabel>Careplan Type</InputLabel>
        <Select value={careplanType} onChange={handleChange} label="Careplan Type">
          <MenuItem value="General Dentistry">General Dentistry</MenuItem>
          <MenuItem value="Orthodontics">Orthodontics</MenuItem>
          <MenuItem value="Periodontics">Periodontics</MenuItem>
        </Select>
      </FormControl>
      <Button variant="outlined" style={{ marginRight: '8px' }}>Cn+</Button>
      <Button variant="outlined" style={{ marginRight: '8px' }}>Tx+</Button>
      <Button variant="outlined">Note</Button>
    </Box>
  );
};

export default CareplanTypeDropdown;
