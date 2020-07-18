import React from 'react';
import { Link } from 'react-router-dom';

function ActionForm() {
  return (
    <>
      <h2 className="text-center text-success">Регистрация</h2>
      <div className="jumbotron jumbotron-fluid">
        <div className="container">
          <h1 className="display-4 text-center">
            Не откладывайте на потом ваше здоровье
          </h1>
          <p className="lead text-center">
            Найчните действовать сегодня, и совсем скоро вы почуствуете
            изменения в лучшую сторону!
          </p>
          <Link
            class="btn btn-success mx-auto"
            to="/signup"
            role="button"
          >
            Зарегистрироваться
          </Link>
        </div>
      </div>
    </>
  );
}

export default ActionForm;
