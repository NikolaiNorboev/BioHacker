import React from 'react';
import {Route, Redirect} from 'react-router-dom';
import {useSelector} from 'react-redux';


function PrivateRoute({children, ...rest}) {
  const isAuthenticated = useSelector(state => state.auth.isAuthenticated);
    console.log('isAuthenticated', isAuthenticated);
  return <Route {...rest}>
    {
      isAuthenticated
        ? children
        : <Redirect to="/login" />
    }
  </Route>
}

export default PrivateRoute;
