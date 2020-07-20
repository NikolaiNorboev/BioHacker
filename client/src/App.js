import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Nav from './components/Navbar';
import Signup from './components/auth/Signup';
import Login from './components/auth/Login';
import Logout from './components/auth/Logout';
import Program from './pages/program';
import SessionRoute from './components/auth/SessionRoute';
import Landing from './pages/landing';
import Stepper from './components/Stepper';
// import useSessionChecker from './components/hooks/auth-hook';
import Thankyou from './components/program/Thankyou';
import User from './pages/user';
import ChannelSelection from './components/ChannelSelection';



export default function App() {
  // useSessionChecker();

  return (
    <>
      <Router>
        <Nav />
        <Switch>
          <SessionRoute path="/signup">
            <Signup />
          </SessionRoute>
          <SessionRoute path="/login">
            <Login />
          </SessionRoute>
          <SessionRoute path="/logout">
            <Logout />
          </SessionRoute>
          <Route path="/program">
            <Program />
          </Route>
          <SessionRoute path="/thankYou">
            <Thankyou />
          </SessionRoute>
          <SessionRoute path="/stepper">
            <Stepper />
          </SessionRoute>
          <SessionRoute path="/user">
            <User />
          </SessionRoute>
          <SessionRoute path="/channel">
            <ChannelSelection />
          </SessionRoute>
          <SessionRoute exact path="/">
            <Landing />
          </SessionRoute>
        </Switch>
      </Router>
    </>
  );
}
