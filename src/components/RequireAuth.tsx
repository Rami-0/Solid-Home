/* eslint-disable react/prop-types */
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck

import { useLocation, Navigate, Outlet } from 'react-router-dom';
import useAuth from '../hooks/useAuth';
import Loading from './Loading/Loading';
import { useEffect, useState } from 'react';

const RequireAuth = ({ allowedRoles }) => {
  const { auth, isAuthenticated } = useAuth();
  const [isLoading, setIsLoading] = useState(true);

  const location = useLocation();

  useEffect(() => {
    if (auth?.roles) {
      setIsLoading(false);
    }
    if (!isAuthenticated) {
      setTimeout(() => {
        setIsLoading(false);
      }, 200);
    }
  }, [auth]);

  if (isLoading) {
    return <Loading />;
  }

  return allowedRoles?.some((allowedRole) => auth?.roles?.includes(allowedRole)) ? (
    <Outlet />
  ) : isAuthenticated ? (
    <Navigate to="/unauthorized" state={{ from: location }} replace />
  ) : (
    <Navigate to="/login" state={{ from: location }} replace />
  );
};

export default RequireAuth;
