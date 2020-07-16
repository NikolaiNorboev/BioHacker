import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Button, Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


export default function Signup() {
  const history = useHistory();
  const [inputs, setInputs] = useState({
    username: '',
    email: '',
    password: '',
  });
  const [error, setError] = useState(false);

  async function signup(event) {
    event.preventDefault();

    const response = await fetch('api/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(inputs),
    });

    const json = await response.json();
    if (response.status === 200) {
      return history.push('/login');
    }
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
      <Form onSubmit={signup}>
        <Form.Group controlId="formBasicLogin">
          <Form.Label>Логин</Form.Label>
          <Form.Control
            type="text"
            name="username"
            required
            value={inputs.username}
            onChange={changed}
            placeholder="Укажите login" />
        </Form.Group>

        <Form.Group controlId="formBasicEmail">
          <Form.Label>Адрес электронный почты</Form.Label>
          <Form.Control
            type="email"
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
        <Button variant="primary" type="submit">Зарегистрироваться</Button>
      </Form>
    </div>
  );
}
