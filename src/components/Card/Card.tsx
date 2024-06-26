import React from 'react';
import './Card.css'; // Import CSS file for styling (create this file)

interface CardProps {
    title: string;
    children: React.ReactNode;
}

const Card: React.FC<CardProps> = ({ title, children }) => (
    <div className="card">
     <div className="card-header">
        <h2>{title}</h2>
      </div>
        <div className="card-content">
            {children}
        </div>
    </div>
);

export default Card;
