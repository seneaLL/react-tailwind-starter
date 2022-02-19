import React from 'react';
import { useSelector } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { Navigate, Outlet } from 'react-router-dom';

import { selectIsLoggedIn } from 'containers/App/selectors';

const stateSelector = createStructuredSelector({
  isLoggedIn: selectIsLoggedIn(),
});

export const PrivateRoute = () => {
  const { isLoggedIn } = useSelector(stateSelector);
  return isLoggedIn ? <Outlet /> : <Navigate to="/login" />;
};
