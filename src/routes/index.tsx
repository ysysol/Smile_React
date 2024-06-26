import React from "react";
import { RouteObject } from "react-router-dom";
import Home from "../pages/home/Home";
import Patients from "../pages/patients/Patients";
import Patient from "../pages/patient/Patient";
import Settings from "../pages/Settings";
import Invoices from "../pages/invoices/Invoice";
import { FaHome, FaUsers, FaUser, FaCog, FaFileInvoice } from "react-icons/fa";

interface AppRouteObject {
  path: string;
  element: React.ReactNode;
  link: string;
  icon?: React.ComponentType;
  subroutes?: {
    path: string;
    link: string;
  }[];
  invisible?: boolean; // Add the invisible property
}

const routes: AppRouteObject[] = [
  {
    path: "/",
    element: <Home />,
    link: "Home",
    icon: FaHome,
  },
  {
    path: "/patients",
    element: <Patients />,
    link: "Patients",
    icon: FaUsers,
  },
  {
    path: "/patient/:id",
    element: <Patient />,
    link: "Patient",
    icon: FaUser, 
    invisible: true, // Example of an invisible route
  },
  {
    path: "/profile/:id",
    element: <Patient />,
    link: "Profile",
    icon: FaUser,
    subroutes: [
      { path: "/profile/view", link: "View Profile" },
      { path: "/profile/edit", link: "Edit Profile" },
    ],
    invisible: true, // Example of an invisible route
  },
  {
    path: "/invoice/",
    element: <Invoices />,
    link: "Invoice",
    icon: FaFileInvoice,
    subroutes: [
      { path: "/profile/view", link: "View Profile" },
      { path: "/profile/edit", link: "Edit Profile" },
    ],
    invisible: false, // Example of an invisible route
  },
  {
    path: "/settings",
    element: <Settings />,
    link: "Settings",
    icon: FaCog,
  },
];

export default routes;
