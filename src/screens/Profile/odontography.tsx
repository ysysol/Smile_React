// src/Odontography.tsx
import React from 'react';
import styled from 'styled-components';
import myphoto from "../../assets/images/1.png";
const OdontographyContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: 20px 0;
`;

const Image = styled.img`
  max-width: 100%;
  height: auto;
  border: 1px solid #ccc;
  border-radius: 8px;
`;

interface OdontographyProps {
  onToothClick: (toothNumber: number) => void;
}

const Odontography: React.FC<OdontographyProps> = ({ onToothClick }) => {
  const handleToothClick = (toothNumber: number) => {
    onToothClick(toothNumber);
  };

  return (
    <OdontographyContainer>
      <Image
        src={myphoto}
        alt="Odontography"
        useMap="#odontography-map"
      />
      <map name="odontography-map">
        {/* Define clickable areas for each tooth */}
        <area shape="rect" coords="20,20,40,40" alt="Tooth 1" onClick={() => handleToothClick(1)} />
        {/* Add more areas for other teeth */}
      </map>
    </OdontographyContainer>
  );
};

export default Odontography;
