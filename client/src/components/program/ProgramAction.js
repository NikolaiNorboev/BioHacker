import React from 'react';
import styles from './programList.module.css';

//  action перед покупкой пррограммы
export default function () {
  return (
    <>
      <div className>
        <div className="pricing-header px-3 py-3 pt-md-5 pb-md-4 mx-auto text-center">
          <h4 className="display-6">Осталось выбрать опции:</h4>
          <p className="lead">
            Подберите для себя оптимальный набор опций, который соответствует
            вашим возможностям.
          </p>
        </div>

        <div className="container">
          <div className="card-deck mb-3 text-center">
            {/* первая карточка */}
            <div className="card mb-4 shadow-sm">
              <div className="card-header">
                <h4 className="my-0 fonr-weigth-normal">Базовый пакет</h4>
              </div>
              <div className={`card-text ${styles.pad}`}>
                <h1 className="card-title pricing-card-title">
                  ₽500
                  <small className="text-muted">/ м</small>
                </h1>
                <ul className="list-unstyled mt-3 mb-4">
                  <li>Календарь программы</li>
                  <li>Уведомления</li>
                  <li>Просмотр достижений</li>
                  <li> &nbsp;</li>
                  <li> &nbsp;</li>
                </ul>
                <button
                  type="button"
                  className="green btn btn-block btn-outline-success"
                >
                  Начать
                </button>
              </div>
            </div>

            {/* вторая карточка */}
            <div className="card mb-4 shadow-sm">
              <div className="card-header">
                <h4 className="my-0 fonr-weigth-normal">Стандартный пакет</h4>
              </div>
              <div className={`card-text ${styles.pad}`}>
                <h1 className="card-title pricing-card-title">
                  ₽1000
                  <small className="text-muted">/ м</small>
                </h1>
                <ul className="list-unstyled mt-3 mb-4">
                  <li>Календарь программы</li>
                  <li>Уведомления</li>
                  <li>Просмотр достижений</li>
                  <li className="list-group-item-success">Чат поддержки</li>
                  <li> &nbsp; </li>
                </ul>
                <button type="button" className="btn btn-block btn-success">
                  Начать
                </button>
              </div>
            </div>

            {/* третья карточка */}
            <div className="card mb-4 shadow-sm">
              <div className="card-header">
                <h4 className="my-0 fonr-weigth-normal">Полный пакет</h4>
              </div>
              <div className={`card-text ${styles.pad}`}>
                <h1 className="card-title pricing-card-title">
                  ₽3000
                  <small className="text-muted">/ м</small>
                </h1>
                <ul className="list-unstyled mt-3 mb-4">
                  <li>Календарь программы</li>
                  <li>Уведомления</li>
                  <li>Просмотр достижений</li>
                  <li className="list-group-item-success">Чат поддержки</li>
                  <li className="list-group-item-success">
                    1 личная консультация
                  </li>
                </ul>
                <button type="button" className="btn btn-block btn-success">
                  Начать
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
