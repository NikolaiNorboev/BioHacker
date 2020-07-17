import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Nav from './components/Navbar';
import Signup from './components/auth/Signup';
import Login from './components/auth/Login';
import Logout from './components/auth/Logout';
import Info from './components/Info';
import QuestMain from './components/questionnaire/QuestMain';
import Program from './pages/program';
import PrivateRoute from './components/auth/PrivateRoute';
import Landing from './pages/landing';
import Stepper from './components/Paginator';
import sessionChecker from './components/hooks/auth-hook';
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
          <Route path="/quest">
            <QuestMain />
          </Route>
          <Route path="/program">
            <Program />
          </Route>
<<<<<<< HEAD
          <Route path="/thankYou">
            <Thankyou />
=======
          <Route path="/stepper">
            <Stepper />
>>>>>>> daa8f5da265a921cbae9afaf1de0fa9b28ae07f3
          </Route>
          <Route path="/">
            <Landing />
          </Route>
        </Switch>
      </Router>
    </>
  );
}
