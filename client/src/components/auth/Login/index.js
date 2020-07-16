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

  return (
    <div className="form-container">
      {error && <div className="error">{error}</div>}
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
    </div>
  );
}
