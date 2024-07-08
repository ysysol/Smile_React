// src/DentalProfile.tsx
import React, { useState } from "react";
import { Box, Tabs, Tab, Drawer, Typography, Button } from "@mui/material";
import styled from "styled-components";
import Odontography from "./odontography";
import TreatmentDrawer from "./treatmentDrawer";

const ProfileContainer = styled(Box)`
  padding: 20px;
  background-color: #ffffff;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  max-width: 1200px;
  margin: 20px auto;
`;

const StyledTabs = styled(Tabs)`
  margin-bottom: 20px;
`;

const StyledButton = styled(Button)`
  margin-bottom: 20px;
`;

const DentalProfile: React.FC = () => {
  const [tabIndex, setTabIndex] = useState(0);
  const [drawerOpen, setDrawerOpen] = useState(false);

  const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
    setTabIndex(newValue);
  };

  const openDrawer = () => {
    setDrawerOpen(true);
  };

  const closeDrawer = () => {
    setDrawerOpen(false);
  };

  return (
    <ProfileContainer>
      <Typography variant="h4">Patient Profile</Typography>
      <StyledTabs value={tabIndex} onChange={handleTabChange}>
        <Tab label="Conditions" />
        <Tab label="Existing" />
        <Tab label="Planned" />
        <Tab label="Encounter" />
      </StyledTabs>
      <Box hidden={tabIndex !== 3}>
        <StyledButton variant="contained" onClick={openDrawer}>
          Add Treatment
        </StyledButton>
        <Odontography
          onToothClick={function (toothNumber: number): void {
            throw new Error("Function not implemented.");
          }}
        />
      </Box>
      <Drawer anchor="right" open={drawerOpen} onClose={closeDrawer}>
        <TreatmentDrawer closeDrawer={closeDrawer} toothNumber={null} />
      </Drawer>
    </ProfileContainer>
  );
};

export default DentalProfile;
