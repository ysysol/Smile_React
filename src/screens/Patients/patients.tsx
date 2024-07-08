import { Box, Container } from "@mui/material";
import React, { useState } from "react";
import GroupAddRoundedIcon from '@mui/icons-material/GroupAddRounded';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TableSortLabel,
  TablePagination,
  Checkbox,
  IconButton,
  Toolbar,
  Typography,
  Paper,
  Menu,
  MenuItem,
  Button,
  TextField,
  FormControl,
  Select,
  InputLabel,
  Modal,
  SelectChangeEvent,
} from "@mui/material";
import {
  Delete as DeleteIcon,
  Edit as EditIcon,
  MoreVert as MoreVertIcon,
  Add as AddIcon,
} from "@mui/icons-material";

import patientsData from "../../data/patients.json";
import AddNewPatient from "../../components/AddNewPatient";
import styled from 'styled-components';
import { Patient } from './../../types';



const Patients = () => {
  const [patients, setPatients] = useState<Patient[]>(patientsData);
  const [order, setOrder] = useState<"asc" | "desc">("asc");
  const [orderBy, setOrderBy] = useState<keyof Patient>("lastName");
  const [selected, setSelected] = useState<string[]>([]);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [filter, setFilter] = useState("");
  const [filterStatus, setFilterStatus] = useState("");
  const [openModal, setOpenModal] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);

  const handleRequestSort = (property: keyof Patient) => {
    const isAsc = orderBy === property && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(property);
  };

  const handleSelectAllClick = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.checked) {
      const newSelecteds = patients.map((n) => n.lastName);
      setSelected(newSelecteds);
      return;
    }
    setSelected([]);
  };

  const handleClick = (event: React.MouseEvent<unknown>, name: string) => {
    const selectedIndex = selected.indexOf(name);
    let newSelected: string[] = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, name);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1)
      );
    }

    setSelected(newSelected);
  };

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleFilterChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFilter(event.target.value);
  };

  const handleFilterStatusChange = (event: SelectChangeEvent<string>) => {
    setFilterStatus(event.target.value);
  };

  const handleMenuClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleDelete = (name: string) => {
    setPatients(patients.filter((patient) => patient.lastName !== name));
    setSelected([]);
  };

  const handleModalOpen = () => {
    setOpenModal(true);
  };

  const handleModalClose = () => {
    setOpenModal(false);
  };

  const handleDrawerOpen = () => {
    setDrawerOpen(true);
  };

  const handleDrawerClose = () => {
    setDrawerOpen(false);
  };

  const handleAddPatient = (newPatient: Patient) => {
    setPatients([...patients, newPatient]);
  };

  const filteredPatients = patients.filter(
    (patient) =>
      (patient.firstName.toLowerCase().includes(filter.toLowerCase()) ||
        patient.lastName.toLowerCase().includes(filter.toLowerCase()) ||
        patient.condition.toLowerCase().includes(filter.toLowerCase()) ||
        patient.diagnosis.toLowerCase().includes(filter.toLowerCase())) &&
      (filterStatus === "" || patient.status === filterStatus)
  );

  const isSelected = (name: string) => selected.indexOf(name) !== -1;

  const emptyRows =
    rowsPerPage -
    Math.min(rowsPerPage, filteredPatients.length - page * rowsPerPage);

  const ProfileContainer = styled(Box)`
    padding: 20px;
    background-color: #ffffff;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    border-radius: 8px;
    max-width: 1700px;
    margin: 20px auto;
  `;
  return (
    <Box sx={{ display: "flex" }}>
      <Container fixed>
        <h1>Patients</h1>

        <ProfileContainer>
        <Paper>
          <Toolbar>
            {selected.length > 0 ? (
              <Typography
                sx={{ flex: "1 1 100%" }}
                color="inherit"
                variant="subtitle1"
                component="div"
              >
                {selected.length} selected
                <IconButton onClick={() => handleDelete(selected[0])}>
                  <DeleteIcon />
                </IconButton>
              </Typography>
            ) : (
              <Typography
                sx={{ flex: "1 1 100%" }}
                variant="h6"
                id="tableTitle"
                component="div"
              >
                Patients
              </Typography>
            )}
            <TextField
              label="Search"
              value={filter}
              sx={{  width: 220 }}
              onChange={handleFilterChange}
            />
            <FormControl sx={{ ml: 2, minWidth: 120}} >
              <InputLabel>Status</InputLabel>
              <Select
                value={filterStatus}
                onChange={handleFilterStatusChange}
                label="Status"
                sx={{  width: 120 }}
              >
                <MenuItem value="">
                  <em>All</em>
                </MenuItem>
                <MenuItem value="new patient">New Patient</MenuItem>
                <MenuItem value="active">Active</MenuItem>
                <MenuItem value="non-active">Non-active</MenuItem>
              </Select>
            </FormControl>
            <Button
              variant="outlined"
              color="primary"
              startIcon={<GroupAddRoundedIcon />}
              sx={{ ml: 2, width: 500 }}
              onClick={handleModalOpen}
            >
              Add Patient
            </Button>
            <Button
              variant="outlined"
              color="secondary"
              startIcon={<GroupAddRoundedIcon />}
              sx={{ ml: 2, width: 500 }}
              onClick={handleDrawerOpen}
            >
              Add Patient
            </Button>
          </Toolbar>
          <TableContainer>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell padding="checkbox">
                    <Checkbox
                      indeterminate={
                        selected.length > 0 && selected.length < patients.length
                      }
                      checked={
                        patients.length > 0 &&
                        selected.length === patients.length
                      }
                      onChange={handleSelectAllClick}
                    />
                  </TableCell>
                  {[
                    "firstName",
                    "lastName",
                    "age",
                    "dob",
                    "lastVisited",
                    "gender",
                    "condition",
                    "diagnosis",
                    "status",
                  ].map((column) => (
                    <TableCell
                      key={column}
                      sortDirection={orderBy === column ? order : false}
                    >
                      <TableSortLabel
                        active={orderBy === column}
                        direction={orderBy === column ? order : "asc"}
                        onClick={() =>
                          handleRequestSort(column as keyof Patient)
                        }
                      >
                        {column === "firstName"
                          ? "First Name"
                          : column === "lastName"
                          ? "Last Name"
                          : column === "dob"
                          ? "Date of Birth"
                          : column === "lastVisited"
                          ? "Last Visited"
                          : column.charAt(0).toUpperCase() + column.slice(1)}
                      </TableSortLabel>
                    </TableCell>
                  ))}
                  <TableCell />
                </TableRow>
              </TableHead>
              <TableBody>
                {filteredPatients
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((patient, index) => {
                    const isItemSelected = isSelected(patient.lastName);
                    return (
                      <TableRow
                        hover
                        onClick={(event) =>
                          handleClick(event, patient.lastName)
                        }
                        role="checkbox"
                        aria-checked={isItemSelected}
                        tabIndex={-1}
                        key={patient.lastName}
                        selected={isItemSelected}
                      >
                        <TableCell padding="checkbox">
                          <Checkbox checked={isItemSelected} />
                        </TableCell>
                        <TableCell>{patient.firstName}</TableCell>
                        <TableCell>{patient.lastName}</TableCell>
                        <TableCell>{patient.age}</TableCell>
                        <TableCell>{patient.dob}</TableCell>
                        <TableCell>{patient.lastVisited}</TableCell>
                        <TableCell>{patient.gender}</TableCell>
                        <TableCell>{patient.condition}</TableCell>
                        <TableCell>{patient.diagnosis}</TableCell>
                        <TableCell>{patient.status}</TableCell>
                        <TableCell padding="checkbox">
                          <IconButton onClick={handleMenuClick}>
                            <MoreVertIcon />
                          </IconButton>
                          <Menu
                            anchorEl={anchorEl}
                            keepMounted
                            open={Boolean(anchorEl)}
                            onClose={handleMenuClose}
                          >
                            <MenuItem onClick={() => console.log("Edit")}>
                              Edit
                            </MenuItem>
                            <MenuItem
                              onClick={() => handleDelete(patient.lastName)}
                            >
                              Delete
                            </MenuItem>
                          </Menu>
                        </TableCell>
                      </TableRow>
                    );
                  })}
                {emptyRows > 0 && (
                  <TableRow style={{ height: 53 * emptyRows }}>
                    <TableCell colSpan={6} />
                  </TableRow>
                )}
              </TableBody>
            </Table>
          </TableContainer>
          <TablePagination
            rowsPerPageOptions={[5, 10, 25]}
            component="div"
            count={filteredPatients.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          />
          <AddNewPatient
            open={drawerOpen}
            onClose={handleDrawerClose}
            onAddPatient={handleAddPatient}
          />
          <Modal
            open={openModal}
            onClose={handleModalClose}
            aria-labelledby="simple-modal-title"
            aria-describedby="simple-modal-description"
          >
            <div
              style={{
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                position: "absolute",
                backgroundColor: "white",
                padding: "16px",
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
              }}
            >
              <h2 id="simple-modal-title">Add New Patient</h2>
              <p id="simple-modal-description">
                Form for adding a new patient goes here.
              </p>
            </div>
          </Modal>
        </Paper>
        </ProfileContainer>
      </Container>

    </Box>
  );
};
export default Patients;
