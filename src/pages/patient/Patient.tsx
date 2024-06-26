import React, { useState } from "react";
import { useParams } from "react-router-dom";
import patientsData from "../../data/patients.json"; // Import mock patient data
import { FaEnvelope, FaPhone } from "react-icons/fa"; // Import icons for buttons
import "./Patient.css"; // Import CSS file for styling (create this file)
import Card from "../../components/Card/Card";
import DentalChartTab from "../dental-chart-tabs/DentalChartTab"; // Import tab components
import MedicalHistoryTab from "../dental-chart-tabs/MedicalHistoryTab";
import AppointmentsTab from "../dental-chart-tabs/AppointmentsTab";

interface ProfileParams {
  id: string; // Ensure 'id' is defined as string
  [key: string]: string | undefined; // Add string index signature
}

const Patient: React.FC = () => {
  const { id } = useParams<ProfileParams>();
  const [activeTab, setActiveTab] = useState<string>("DentalChart");

  // Find patient by ID from mock data
  const patient = patientsData.find((p) => p.id.toString() === id);

  if (!patient) {
    return <div>Patient not found.</div>;
  }

  // Mock last visit date and phone number (replace with actual data if available)
  const lastVisitDate = "June 20, 2024";
  const phoneNumber = "+1 123-456-7890";

  const renderTabContent = () => {
    switch (activeTab) {
      case "DentalChart":
        return <DentalChartTab />;
      case "MedicalHistory":
        return <MedicalHistoryTab />;
      case "Appointments":
        return <AppointmentsTab />;
      default:
        return null;
    }
  };

  return (
    <div className="profile-container">
      <Card title="Patient Information">
        <div className="profile-top-card">
          <div className="profile-top-left">
            <div className="profile-photo">
              {/* Replace with actual patient photo */}
              <img src={`https://via.placeholder.com/150`} alt="Patient" />
            </div>
            <div className="profile-info">
              <h1>{patient.name}</h1>
              <p>Last Visit: {lastVisitDate}</p>
              <p>Phone: {phoneNumber}</p>
            </div>
          </div>
          <div className="profile-top-right">
            <button className="profile-button">
              <FaEnvelope />
            </button>
            <button className="profile-button">
              <FaPhone />
            </button>
          </div>
        </div>
      </Card>

      <Card title="Chart">
        <div className="tabs">
          <button
            className={`tab-button ${activeTab === "DentalChart" ? "active" : ""}`}
            onClick={() => setActiveTab("DentalChart")}
          >
            Dental Chart
          </button>
          <button
            className={`tab-button ${activeTab === "MedicalHistory" ? "active" : ""}`}
            onClick={() => setActiveTab("MedicalHistory")}
          >
            Medical History
          </button>
          <button
            className={`tab-button ${activeTab === "Appointments" ? "active" : ""}`}
            onClick={() => setActiveTab("Appointments")}
          >
            Appointments
          </button>
        </div>
        <div className="tab-content">
          {renderTabContent()}
        </div>
      </Card>
    </div>
  );
};

export default Patient;


// import React from "react";
// import { useParams } from "react-router-dom";
// import patientsData from "../../data/patients.json"; // Import mock patient data
// import { FaEnvelope, FaPhone } from "react-icons/fa"; // Import icons for buttons
// import "./Patient.css"; // Import CSS file for styling (create this file)
// import Card from "../../components/Card/Card";
// import dentalChartImg from "../../images/dent-1.jpg"; // Import dental chart image
// interface ProfileParams {
//   id: string; // Ensure 'id' is defined as string
//   [key: string]: string | undefined; // Add string index signature
// }

// const Patient: React.FC = () => {
//   const { id } = useParams<ProfileParams>();

//   // Find patient by ID from mock data
//   const patient = patientsData.find((p) => p.id.toString() === id);

//   if (!patient) {
//     return <div>Patient not found.</div>;
//   }

//   // Mock last visit date and phone number (replace with actual data if available)
//   const lastVisitDate = "June 20, 2024";
//   const phoneNumber = "+1 123-456-7890";

//   return (
//     <div className="profile-container">
//       <Card title="Patient Information">
//         <div className="profile-top-card">
//           <div className="profile-top-left">
//             <div className="profile-photo">
//               {/* Replace with actual patient photo */}
//               <img src={`https://via.placeholder.com/150`} alt="Patient" />
//             </div>
//             <div className="profile-info">
//               <h1>{patient.name}</h1>
//               <p>Last Visit: {lastVisitDate}</p>
//               <p>Phone: {phoneNumber}</p>
//             </div>
//           </div>
//           <div className="profile-top-right">
//             <button className="profile-button">
//               <FaEnvelope />
//             </button>
//             <button className="profile-button">
//               <FaPhone />
//             </button>
//           </div>
//         </div>
//       </Card>

//       <Card title="Chart">
//         <div className="dental-chart">
//           {/* Replace with actual dental chart image */}
//           <img src={dentalChartImg} alt="Dental Chart" />
//         </div>
//       </Card>
//     </div>
//   );
// };

// export default Patient;
