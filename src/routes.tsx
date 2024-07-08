// src/routes.ts

import React from 'react';
import DashboardIcon from '@mui/icons-material/Dashboard';
import MailIcon from '@mui/icons-material/Mail';
import Dashboard from './screens/dashboard';
import Contactus from './screens/contactus';
import Patients from './screens/Patients/patients';
import Notifications from './screens/Notifications/notifications';
import Dentists from './screens/Dentists/dentists';
import Medications from './screens/Medications/medications';
import Treatments from './screens/Treatments/treatments';
import Invoices from './screens/Invoices/invoices';
import Appointments from './screens/Appointments/appointments';
import Patient from './screens/Profile/patient';
import AddAlertOutlinedIcon from '@mui/icons-material/AddAlertOutlined';
import MedicalInformationOutlinedIcon from '@mui/icons-material/MedicalInformationOutlined';
import VaccinesOutlinedIcon from '@mui/icons-material/VaccinesOutlined';
import FileCopyOutlinedIcon from '@mui/icons-material/FileCopyOutlined';
import FamilyRestroomSharpIcon from '@mui/icons-material/FamilyRestroomSharp';
import PeopleOutlineRoundedIcon from '@mui/icons-material/PeopleOutlineRounded';
import PeopleAltRoundedIcon from '@mui/icons-material/PeopleAltRounded';
interface Route {
  path: string;
  name: string;
  icon?: React.ReactNode; // Use React.ReactElement for icons
  component: React.ComponentType;
}

const routes: Route[] = [
  {
    path: '/dashboard',
    name: 'Dashboard',
    icon: <DashboardIcon color="disabled" fontSize="small" />,
    component: Dashboard,
  },
  {
    path: '/contactus',
    name: 'Contact Us',
    icon: <MailIcon color="disabled" fontSize="small"/>,
    component: Contactus,
  },
  {
    path: '/Patients',
    name: 'Patients',
    icon: <PeopleOutlineRoundedIcon color="disabled" fontSize="small"/>,
    component: Patients,
  },
  {
    path: '/dentists',
    name: 'Dentists',
    icon: <PeopleAltRoundedIcon color="disabled" fontSize="small"/>,
    component: Dentists,
  },
  {
    path: '/appointments',
    name: 'Appointments',
    icon: <FamilyRestroomSharpIcon color="disabled" fontSize="small"/>,
    component: Appointments,
  },
  {
    path: '/medications',
    name: 'Medications',
    icon: <MedicalInformationOutlinedIcon color="disabled" fontSize="small"/>,
    component: Medications,
  },
  {
    path: '/treatments',
    name: 'Treatments',
    icon: <VaccinesOutlinedIcon color="disabled" fontSize="small"/>,
    component: Treatments,
  },
  {
    path: '/notifications',
    name: 'Notifications',
    icon: <AddAlertOutlinedIcon color="disabled" fontSize="small"/>,
    component: Notifications,
  },
  {
    path: '/invoices',
    name: 'Invoices',
    icon: <FileCopyOutlinedIcon color="disabled" fontSize="small"/>,
    component: Invoices,
  },
  {
    path: '/profile/patient',
    name: 'Patient',
    icon: <FileCopyOutlinedIcon color="disabled" fontSize="small"/>,
    component: Patient,
  },
];

export default routes;
