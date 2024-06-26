import React, { useState } from "react";
import { Drawer, TextField, Button } from "@mui/material";
import { styled, ThemeProvider } from "@mui/system";
import { v4 as uuidv4 } from "uuid";
import { createTheme } from "@mui/material/styles";

const drawerWidth = 300;

const theme = createTheme(); // Create a theme instance

const DrawerContainer = styled(Drawer)(({ theme }) => ({
  width: drawerWidth,
  flexShrink: 0,
  '& .MuiDrawer-paper': {
    width: drawerWidth,
  },
}));

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  // ...theme.mixins.toolbar,
  justifyContent: "flex-end",
}));

const FormContainer = styled("div")(({ theme }) => ({
  margin: theme.spacing(2),
}));

const FormField = styled(TextField)(({ theme }) => ({
  margin: theme.spacing(1, 0),
}));

interface NewPatient {
  id: string;
  name: string;
  age: number;
  gender: string;
  condition: string;
}

interface NewPatientFormProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: (newPatient: NewPatient) => void;
}

const AddPatient: React.FC<NewPatientFormProps> = ({
  isOpen,
  onClose,
  onSave,
}) => {
  const [name, setName] = useState("");
  const [age, setAge] = useState<number | string>("");
  const [gender, setGender] = useState("");
  const [condition, setCondition] = useState("");

  const handleSave = () => {
    const newPatient: NewPatient = {
      id: uuidv4(),
      name,
      age: Number(age),
      gender,
      condition,
    };
    onSave(newPatient);
    onClose();
  };

  return (
    <ThemeProvider theme={theme}> {/* ThemeProvider to provide theme */}
      <DrawerContainer variant="persistent" anchor="right" open={isOpen}>
        <DrawerHeader>
          <Button onClick={onClose}>Close</Button>
        </DrawerHeader>
        <FormContainer>
          <FormField
            label="Name"
            variant="outlined"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <FormField
            label="Age"
            variant="outlined"
            type="number"
            value={age}
            onChange={(e) => setAge(e.target.value)}
          />
          <FormField
            label="Gender"
            variant="outlined"
            value={gender}
            onChange={(e) => setGender(e.target.value)}
          />
          <FormField
            label="Condition"
            variant="outlined"
            value={condition}
            onChange={(e) => setCondition(e.target.value)}
          />
          <Button variant="contained" color="primary" onClick={handleSave}>
            Save
          </Button>
        </FormContainer>
      </DrawerContainer>
    </ThemeProvider>
  );
};

export default AddPatient;
