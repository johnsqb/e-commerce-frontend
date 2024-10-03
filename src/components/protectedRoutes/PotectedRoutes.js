// components/ProtectedRoute.js
import React from 'react';
import { Outlet, Navigate } from 'react-router-dom';
import { getUserRole } from '../../redux/utils/JwtDecode';
import Unauthorized from '../Unauthorized';



const ProtectedRoutes = ({ allowedRoles }) => {
  const role = getUserRole();
  console.log(role);
  console.log(allowedRoles)
  

  if (!role) {
    return <Navigate to="/login" />;
  }

  if (!allowedRoles.includes(role)) {
    return <Navigate to="/unauthorized" replace />; // Replace ensures the user cannot go back to this route
  }
  return <Outlet />;
};

export default ProtectedRoutes;

