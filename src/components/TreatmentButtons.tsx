import React, { useState } from 'react';
import { Grid, Button, Modal, Box, Typography } from '@mui/material';

const treatmentOptions: string[] = [
  'Exam', 'X-Ray', 'Prophy/FI', 'Period/SRP', 'Space Mint',
  'Composite', 'Amalgam', 'Crowns', 'Build up/ Pins', 'Crown & BU',
  'Extraction', 'Bridge Abutment', 'Bridge Pontic', 'Inlay Onlay', 'Veneers',
  'Root Canal', 'Pulp Procedure', 'Denture', 'Partial Denture', 'Dent/ Other Part'
];

const TreatmentButtons: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [selectedTreatment, setSelectedTreatment] = useState<string | null>(null);

  const handleOpen = (treatment: string) => {
    setSelectedTreatment(treatment);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedTreatment(null);
  };

  return (
    <>
      <Grid container spacing={1}>
        {treatmentOptions.map((option) => (
          <Grid item xs={6} sm={4} md={3} key={option}>
            <Button variant="outlined" fullWidth onClick={() => handleOpen(option)}>
              {option}
            </Button>
          </Grid>
        ))}
      </Grid>
      <Modal open={open} onClose={handleClose}>
        <Box
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: 400,
            bgcolor: 'background.paper',
            border: '1px solid #cdcdcd',
            color: '#cdcdcd',
            boxShadow: 24,
            p: 4,
          }}
        >
          <Typography variant="h6" component="h2">
            {selectedTreatment}
          </Typography>
          <Typography sx={{ mt: 2 }}>
            Details about {selectedTreatment} treatment.
          </Typography>
          {/* Add more details or inputs as required */}
        </Box>
      </Modal>
    </>
  );
};

export default TreatmentButtons;
