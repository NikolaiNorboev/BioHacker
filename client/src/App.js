import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Nav from './components/Navbar';
import Signup from './components/auth/Signup';
import Login from './components/auth/Login';
import Logout from './components/auth/Logout';
import PrivateRoute from './components/auth/PrivateRoute';
import Landing from './pages/landing';
import Stepper from './pages/stepper';
import User from './pages/user';
import sessionChecker from './components/hooks/auth-hook';
import ChannelSelection from './components/ChannelSelection';
import Test from './components/questionnaire/test'
import Info from './components/Info';
import Program from './components/Stepper/Program';
import Thankyou from './components/program/Thankyou';



export default function App() {
  // Проверяем наличие на сервере сессии для данного пользователя
  // !!! наличие сессии не гарантирует статус авторизированного пользователя
  // для авторизации необходимо получать с сервера доп. инф-ю о правах пользователя
  sessionChecker();

  return (
    <>
      <Router>
        <Nav />
        <Switch>
          <Route path="/signup">
            <Signup />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/logout">
            <Logout />
          </Route>
          <PrivateRoute path="/info">
            <Info />
          </PrivateRoute>
          <Route path="/program">
            <Program />
          </Route>
          <Route path="/thankYou">
            <Thankyou />
          </Route>
          <Route path="/stepper">
            <Stepper />
          </Route>
          <Route path="/user">
            <User />
          </Route>
          <Route path="/channel">
            <ChannelSelection />
          </Route>
          <Route path="/quest">
            <Test />
          </Route>
          <Route path="/">
            <Landing />
          </Route>
        </Switch>
      </Router>
    </>
  );
}
