import React from "react";
import dentalChartImg from "../../images/dental-4.png"; // Import dental chart image

const DentalChartTab: React.FC = () => {
  return (
    <div className="dental-chart">
      <img src={dentalChartImg} alt="Dental Chart" />
    </div>
  );
};

export default DentalChartTab;
