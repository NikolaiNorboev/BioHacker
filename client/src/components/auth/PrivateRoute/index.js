import React from 'react';
import {Route, Redirect} from 'react-router-dom';
import {useSelector} from 'react-redux';
import sessionChecker from '../../hooks/auth-hook';

function PrivateRoute({children, ...rest}) {
  sessionChecker();
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  return (
    <Route {...rest}>
      {children}
      {isAuthenticated && <Redirect to="/login" />}
    </Route>
  );
}

export default PrivateRoute;
