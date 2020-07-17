import React from 'react';
import { Link } from 'react-router-dom';
import styles from './main.module.css';

function main() {
  return (
    <>
      <div className="container d-flex  my-4 justify-content-center">
        <div className="bg-light d-flex flex-column justify-content-around">
          <h1 className="d-flex mt-1 align-items-center justify-content-center text-center user-select-none">
            Cформируйте привычку быть здоровым
          </h1>
          <Link
            to="/signup"
            type="button"
            class="btn btn-success flex-end mx-4 mb-1"
          >
            Зарегистрироваться
          </Link>
        </div>
        <img
          className={styles.mainimg}
          src="/img/SC_Human_Nature_and_Diversity.jpg"
          alt="human-nature"
        />
      </div>
      <div class="col-md-12 col-lg-12" />
    </>
  );
}

export default main;
