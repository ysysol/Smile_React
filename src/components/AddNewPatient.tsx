// AddNewPatient.tsx
import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import {
  Button, Drawer, TextField, FormControl, InputLabel, Select, MenuItem,
  Typography, Box, IconButton
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

interface AddNewPatientProps {
  open: boolean;
  onClose: () => void;
  onAddPatient: (data: any) => void;
}

const schema = yup.object().shape({
  firstName: yup.string().required('First Name is required'),
  lastName: yup.string().required('Last Name is required'),
  age: yup.number().required('Age is required').positive().integer(),
  dob: yup.date().nullable().required('Date of Birth is required'),
  gender: yup.string().required('Gender is required'),
  condition: yup.string().required('Condition is required'),
  diagnosis: yup.string().required('Diagnosis is required'),
  status: yup.string().required('Status is required')
});

const AddNewPatient: React.FC<AddNewPatientProps> = ({ open, onClose, onAddPatient }) => {
  const { control, handleSubmit, setValue, formState: { errors } } = useForm({
    resolver: yupResolver(schema)
  });

  const onSubmit = (data: any) => {
    onAddPatient(data);
    onClose();
  };

  return (
    <Drawer anchor="right" open={open} onClose={onClose}>
      <Box sx={{ width: 350, padding: 2 }}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 2 }}>
          <Typography variant="h6">Add New Patient</Typography>
          <IconButton onClick={onClose}>
            <CloseIcon />
          </IconButton>
        </Box>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Controller
            name="firstName"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <TextField
                {...field}
                label="First Name"
                variant="outlined"
                margin="normal"
                fullWidth
                error={!!errors.firstName}
                helperText={errors.firstName ? errors.firstName.message : ''}
              />
            )}
          />
          <Controller
            name="lastName"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <TextField
                {...field}
                label="Last Name"
                variant="outlined"
                margin="normal"
                fullWidth
                error={!!errors.lastName}
                helperText={errors.lastName ? errors.lastName.message : ''}
              />
            )}
          />
          <Controller
            name="age"
            control={control}
            defaultValue={0} // Set defaultValue as a number
            render={({ field }) => (
              <TextField
                {...field}
                label="Age"
                type="number"
                variant="outlined"
                margin="normal"
                fullWidth
                error={!!errors.age}
                helperText={errors.age ? errors.age.message : ''}
              />
            )}
          />
          <Controller
            name="dob"
            control={control}
            defaultValue={undefined} // Set defaultValue as undefined
            render={({ field }) => (
              <TextField
                {...field}
                label="Date of Birth"
                type="date"
                variant="outlined"
                margin="normal"
                fullWidth
                InputLabelProps={{
                  shrink: true,
                }}
                error={!!errors.dob}
                helperText={errors.dob ? errors.dob.message : ''}
                onChange={(e) => {
                  const selectedDate = e.target.value ? new Date(e.target.value) : new Date();
                  setValue('dob', selectedDate ); // Ensure selectedDate is not undefined
                }}
              />
            )}
          />
          <Controller
            name="gender"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <FormControl variant="outlined" margin="normal" fullWidth error={!!errors.gender}>
                <InputLabel>Gender</InputLabel>
                <Select {...field} label="Gender">
                  <MenuItem value="male">Male</MenuItem>
                  <MenuItem value="female">Female</MenuItem>
                  <MenuItem value="other">Other</MenuItem>
                </Select>
                {errors.gender && <Typography color="error">{errors.gender.message}</Typography>}
              </FormControl>
            )}
          />
          <Controller
            name="condition"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <TextField
                {...field}
                label="Condition"
                variant="outlined"
                margin="normal"
                fullWidth
                error={!!errors.condition}
                helperText={errors.condition ? errors.condition.message : ''}
              />
            )}
          />
          <Controller
            name="diagnosis"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <TextField
                {...field}
                label="Diagnosis"
                variant="outlined"
                margin="normal"
                fullWidth
                error={!!errors.diagnosis}
                helperText={errors.diagnosis ? errors.diagnosis.message : ''}
              />
            )}
          />
          <Controller
            name="status"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <FormControl variant="outlined" margin="normal" fullWidth error={!!errors.status}>
                <InputLabel>Status</InputLabel>
                <Select {...field} label="Status">
                  <MenuItem value="new patient">New Patient</MenuItem>
                  <MenuItem value="active">Active</MenuItem>
                  <MenuItem value="non-active">Non-active</MenuItem>
                </Select>
                {errors.status && <Typography color="error">{errors.status.message}</Typography>}
              </FormControl>
            )}
          />
          <Box sx={{ display: 'flex', justifyContent: 'flex-end', marginTop: 2 }}>
            <Button onClick={onClose} color="secondary" sx={{ marginRight: 2 }}>
              Cancel
            </Button>
            <Button type="submit" variant="contained" color="primary">
              Add Patient
            </Button>
          </Box>
        </form>
      </Box>
    </Drawer>
  );
};

export default AddNewPatient;
