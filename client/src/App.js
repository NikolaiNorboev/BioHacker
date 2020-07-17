import React, {useEffect} from 'react';
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
import Stepper from './components/Stepper';
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
          <Route path="/thankYou">
            <Thankyou />
          </Route>
          <Route path="/stepper">
            <Stepper />
          </Route>
          <Route path="/">
            <Landing />
          </Route>
        </Switch>
      </Router>
    </>
  );
}
