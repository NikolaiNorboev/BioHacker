import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Button, Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import {useDispatch} from 'react-redux'
import {getUser} from '../../../redux/actions/action-creators'

export default function Login() {
  const dispatch = useDispatch();
  const history = useHistory();
  const [inputs, setInputs] = useState({
    email: '',
    password: '',
  });
  const [error, setError] = useState(false);

  async function login(event) {
    event.preventDefault();

    const response = await fetch('/api/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(inputs),
    });

    const json = await response.json();
    if (response.status === 200) {
      dispatch(getUser(json.username));
      return history.push('/info');
    }
    console.log(json.message);
    return setError(json.message);
  }

  function changed({ target: { value, name } }) {
    // const obj = Object.assign({}, inputs);
    // obj[name] = value;
    setInputs({
      ...inputs,
      [name]: value,
    });
  }
  const googleAuth =() => window.open('http://localhost:3001/auth/google');
  const facebookAuth =() => window.open('http://localhost:3001/auth/facebook');
  const twitterAuth =() => window.open('http://localhost:3001/auth/twitter');
  const instagramAuth =() => window.open('http://localhost:3001/auth/instagram');
  const LinkedInAuth =() => window.open('http://localhost:3001/auth/linkedin');
  const SteamAuth =() => window.open('http://localhost:3001/auth/steam');
  const GitHubAuth =() => window.open('http://localhost:3001/auth/github');


  return (
    <span className="form-container">
      {error && <span className="error">{error}</span>}
      <Form onSubmit={login}>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Адрес электронный почты</Form.Label>
          <Form.Control
            type="text"
            name="email"
            required
            value={inputs.email}
            onChange={changed}
            placeholder="Укажите e-mail" />
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Пароль</Form.Label>
          <Form.Control
            type="password"
            name="password"
            required
            value={inputs.password}
            onChange={changed}
            placeholder="ваш пароль" />
        </Form.Group>
        <Form.Group controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Сохранить логин" />
        </Form.Group>
        <Button variant="primary" type="submit">Войти</Button>
      </Form>
      <span onClick={googleAuth}>
        <img src="https://c7.uihere.com/files/193/660/878/search-engine-optimization-internet-google-search-google-thumb.jpg" height='40'/>  
      </span>
      <span onClick={facebookAuth}>
        <img src="https://i.imgur.com/jiztYCH.png" height='40'/>  
      </span>
      <span onClick={twitterAuth}>
        <img src="https://i.imgur.com/EYA2FO1.png" height='40'/>  
      </span>
      <span onClick={instagramAuth}>
        <img src="https://i.imgur.com/aRc6LUJ.png" height='40'/>  
      </span>
      <span onClick={LinkedInAuth}>
        <img src="https://i.imgur.com/sYmVWAw.png" height='40'/>  
      </span>
      <span onClick={GitHubAuth}>
        <img src="https://blog.codingblocks.com/content/images/2019/01/download.png" height='40'/>  
      </span>
    </span>
  );
}
