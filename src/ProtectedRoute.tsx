// src/components/ProtectedRoute.tsx
import React from 'react';
import { Navigate } from 'react-router-dom';
import { getCurrentUser } from './services/authService';

const ProtectedRoute: React.FC<{ children: JSX.Element }> = ({ children }) => {
    const user = getCurrentUser();

    if (!user.token) {
        return <Navigate to="/login" />;
    }

    return children;
};

export default ProtectedRoute;
