// src/App.tsx
import React, { useState } from "react";
import { Box, Drawer, Typography, Tabs, Tab, Grid } from "@mui/material";
import styled from "styled-components";
import GlobalStyle from "../Profile/profileStyles";

import TreatmentDrawer from "./treatmentDrawer";
import SummaryTable from "./summaryTable";
import CareplanTypeDropdown from "../../components/CareplanTypeDropdown";
import TreatmentButtons from "../../components/TreatmentButtons";
import myimage from "../../assets/images/1.png";
import Odontography from "./odontography";

const ProfileContainer = styled(Box)`
  padding: 20px;
  background-color: #ffffff;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  max-width: 1700px;
  margin: 20px auto;
`;

const StyledTabs = styled(Tabs)`
  margin-bottom: 20px;
`;

const Patient: React.FC = () => {
  const [tabIndex, setTabIndex] = useState(0);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [selectedTooth, setSelectedTooth] = useState<number | null>(null);

  const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
    setTabIndex(newValue);
  };

  const openDrawer = (toothNumber: number) => {
    setSelectedTooth(toothNumber);
    setDrawerOpen(true);
  };

  const closeDrawer = () => {
    setDrawerOpen(false);
    setSelectedTooth(null);
  };

  return (
    <div>
      <GlobalStyle />
      <ProfileContainer>
        <Typography variant="h4">Patient Profile</Typography>
        <StyledTabs value={tabIndex} onChange={handleTabChange}>
          <Tab label="Conditions" />
          <Tab label="Existing" />
          <Tab label="Planned" />
          <Tab label="Encounter" />
        </StyledTabs>
        <Grid container spacing={2}>
          {/* <Grid item xs={12}>
            <Odontography onToothClick={openDrawer} />
          </Grid> */}
          <Grid item xs={6}>
            <Box
              sx={{
                bgcolor: "#ffffff",
                p: 2,
                boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
                borderRadius: 4,
              }}
            >
              {/* Add Treatment buttons and components here */}
              <Box component="img" alt="Placeholder Image" src={myimage} />
            </Box>
          </Grid>
          <Grid item xs={6}>
            <Box
              sx={{
                p: 4,
              }}
            >
              <Typography variant="h6">Treatment</Typography>
              {/* Add Careplan Type components here */}
              <CareplanTypeDropdown />
              <TreatmentButtons />
            </Box>
          </Grid>
          <Grid item xs={12}>
            <SummaryTable />
          </Grid>
        </Grid>
        <Drawer anchor="right" open={drawerOpen} onClose={closeDrawer}>
          <TreatmentDrawer
            closeDrawer={closeDrawer}
            toothNumber={selectedTooth}
          />
        </Drawer>
      </ProfileContainer>
    </div>
  );
};

export default Patient;
