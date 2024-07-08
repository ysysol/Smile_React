import React from 'react';
import { AppBar, Toolbar, Typography, IconButton, Tabs, Tab, Box, Avatar, createTheme } from '@mui/material';
import { Phone, Email, CalendarToday, PhotoCamera, Folder, Description, Assignment, Delete, Home, Image, BarChart, AccountBalance, AssignmentTurnedIn, InsertPhoto, CheckBox, Science, CameraAlt, Medication, Description as DescriptionIcon } from '@mui/icons-material';
import { styled } from '@mui/material/styles';

const CustomTab = styled(Tab)(({ theme }) => ({
  textTransform: 'none', // Disable uppercase transformation
  minWidth: 120,
  fontWeight: theme.typography.fontWeightRegular,
  fontFamily: 'Oswald, sans-serif', // Apply font family
  marginRight: theme.spacing(1),
  '& .MuiTab-iconWrapper': {
    color: '#cacacf', // Set icon color to gray
  },
  '&:hover': {
    color:'#4D4D51', //theme.palette.primary.main,
    opacity: 1,
    '& .MuiTab-iconWrapper': {
      color:'#4D4D51'//theme.palette.primary.main, // Change icon color on hover
    },
  },
  '&.Mui-selected': {
    fontWeight: theme.typography.fontWeightMedium,
    '& .MuiTab-iconWrapper': {
      color:'#4D4D51' //theme.palette.primary.main, // Change icon color when selected
    },
  },
  '&.Mui-focusVisible': {
    backgroundColor:'#4D4D51' //'rgba(100, 95, 228, 0.32)',
  },
}));

const theme = createTheme({
  typography: {
    fontFamily: 'Oswald, sans-serif',
  },
});


const Medications: React.FC = () => {
  const [tabIndex, setTabIndex] = React.useState(2); // default to Charts tab

  const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
    setTabIndex(newValue);
  };

  return (
    <div style={{ backgroundColor: '#f0f2f5', height: '100vh' }}>
      <AppBar position="static" color="default">
        <Toolbar>
          <Avatar alt="Julia Smith" src="path/to/avatar.jpg" />
          <Box ml={2}>
            <Typography variant="h6">Julia Smith</Typography>
            <Typography variant="body2">Active, 01.28.94</Typography>
          </Box>
          <Box ml="auto" display="flex" alignItems="center">
            <Typography variant="body2">Primary provider: Dr. Louie Al-Faraje</Typography>
            <Typography variant="body2" ml={2}>Active until 06.22</Typography>
            <Typography variant="body2" ml={2}>Secondary insurance: Expired on 07.21</Typography>
            <Typography variant="body2" ml={2}>Last visit: 12.11.22</Typography>
            <Typography variant="body2" ml={2}>Next date: Set date</Typography>
          </Box>
          <Box ml={2}>
            <IconButton><Phone /></IconButton>
            <IconButton><Email /></IconButton>
            <IconButton><CalendarToday /></IconButton>
          </Box>
        </Toolbar>
      </AppBar>
      <Box display="flex">

        <Box flex={1}>
          <Tabs value={tabIndex} onChange={handleTabChange} indicatorColor="primary" textColor="primary" variant="scrollable" scrollButtons="auto">
            <CustomTab icon={<Home />} label="General" />
            <CustomTab icon={<Image />} label="Photos" />
            <CustomTab icon={<BarChart />} label="Charts" />
            <CustomTab icon={<AccountBalance />} label="eClaims" />
            <CustomTab icon={<AssignmentTurnedIn />} label="Ledger" />
            <CustomTab icon={<InsertPhoto />} label="Implant Exam" />
            <CustomTab icon={<CheckBox />} label="Smile" />
            <CustomTab icon={<CheckBox />} label="Checklists" />
            <CustomTab icon={<Science />} label="Lab" />
            <CustomTab icon={<CameraAlt />} label="Imaging" />
            <CustomTab icon={<Medication />} label="eRx" />
            <CustomTab icon={<DescriptionIcon />} label="Docs" />
          </Tabs>
          <Box p={3}>
            {tabIndex === 2 && (
              <Box textAlign="center">
                <img src="path/to/xray-image.jpg" alt="AI Analysis" style={{ width: '100%', height: 'auto' }} />
                <Typography variant="h6">AI Analysis</Typography>
                <Typography variant="body2">0 problems found</Typography>
              </Box>
            )}
          </Box>
        </Box>
      </Box>
    </div>
  );
}

export default Medications;
