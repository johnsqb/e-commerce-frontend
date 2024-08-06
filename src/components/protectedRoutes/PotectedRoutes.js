// components/ProtectedRoute.js
import React from 'react';
import { Outlet, Navigate } from 'react-router-dom';
import { getUserRole } from '../../redux/utils/JwtDecode';



const ProtectedRoutes = ({ allowedRoles }) => {
  const role = getUserRole();

  if (!role) {
    return <Navigate to="/login" />;
  }

  if (!allowedRoles.includes(role)) {
    return <Navigate to="/login" />;
  }

  return <Outlet />;
};

export default ProtectedRoutes;

