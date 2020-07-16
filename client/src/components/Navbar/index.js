import React from 'react';
import { Navbar } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import {useSelector} from 'react-redux';

export default function Nav() {
  const isAuthenticated = useSelector(state => state.auth.isAuthenticated);
  const username = useSelector(state => state.auth.username);
  console.log(isAuthenticated, username);
  return (
    <Navbar fixed="top" bg="success" expand="lg">
      <Navbar.Brand href="#home" className="text-white">
        Bio-hacker
      </Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse className="justify-content-start">
        {!isAuthenticated && (
          <Navbar.Text>
            <a href="signup" className="text-white">
              Регистрация
            </a>
          </Navbar.Text>
        )}
        &nbsp;
        {!isAuthenticated && (
          <Navbar.Text>
            <a href="login" className="text-white">
              Войти
            </a>
          </Navbar.Text>
        )}
      </Navbar.Collapse>
      <Navbar.Collapse className="justify-content-end">
        {isAuthenticated && (
          <Navbar.Text className="text-white">
            Вы вошли как: {username}
          </Navbar.Text>
        )}
        &nbsp;
        {isAuthenticated && (
          <Navbar.Text>
            <a href="logout" className="text-white">
              Выйти
            </a>
          </Navbar.Text>
        )}
      </Navbar.Collapse>
    </Navbar>
  );
}
