import React, { useState } from "react";
import "./Patients.css";
import { Link } from "react-router-dom";
import AddPatient from "../../components/AddPatient"; // Assuming NewPatientForm is in the same directory
import { NewPatient } from "../../types/NewPatient"; // Import NewPatient type
import initialPatients from "../../data/patients.json"; // Import mock patient data
// Define the initial patients with numeric IDs


const Patients: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [patients, setPatients] = useState(initialPatients);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
  };

  // Updated handleSavePatient to accept NewPatient type
  const handleSavePatient = (newPatient: NewPatient) => {
    // Generate a new numeric ID
    const newId = patients.length > 0 ? Math.max(...patients.map(p => p.id)) + 1 : 1;
    const patientWithId = { ...newPatient, id: newId };
    setPatients([...patients, patientWithId]);
  };

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  const filteredPatients = patients.filter((patient) =>
    patient.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div>
      <h1>Patients List</h1>
      <div className="patient-search-container">
        <input
          type="text"
          placeholder="Search patients..."
          value={searchQuery}
          onChange={handleSearchChange}
        />
      </div>
      <div className="patients-grid">
        {filteredPatients.length > 0 ? (
          filteredPatients.map((patient) => (
            <Link
              key={patient.id}
              to={`/patient/${patient.id}`}
              className="patient-card-link"
            >
              <div key={patient.id} className="patient-card">
                <div className="patient-info">
                  <h2>{patient.name}</h2>
                  <p>Age: {patient.age}</p>
                  <p>Gender: {patient.gender}</p>
                  <p>Condition: {patient.condition}</p>
                </div>
              </div>
            </Link>
          ))
        ) : (
          <p>No patients found.</p>
        )}
      </div>
      <button onClick={toggleDrawer}>Add New Patient</button>
      <AddPatient
        isOpen={isDrawerOpen}
        onClose={toggleDrawer}
        onSave={handleSavePatient} // Pass handleSavePatient directly
      />
    </div>
  );
};

export default Patients;
