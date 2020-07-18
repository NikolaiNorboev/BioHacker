import React from 'react';
import styles from './programList.module.css';

//  action перед покупкой пррограммы 
export default function () {
  return (
      <>
      <div className>
        <div className = "pricing-header px-3 py-3 pt-md-5 pb-md-4 mx-auto text-center">
          <h1 className="display-4"> 
          Осталось выбрать программу:</h1>
          <p className="lead">
            "Quickly build an effective pricing table for your potential customers with this Bootstrap example. It’s built with default Bootstrap components and utilities with little customization."</p>
        </div>

        

        <div className="container">
          <div className="card-deck mb-3 text-center">

            {/* первая карточка */}
            <div className="card mb-4 shadow-sm">
              <div className="card-header">
                <h4 className="my-0 fonr-weigth-normal">Просто</h4>
              </div>
              <div className={`card-text ${styles.pad}`}>
                <h1 className="card-title pricing-card-title">
                ₽500
                <small className="text-muted">/ м</small>
                </h1>
                <ul className="list-unstyled mt-3 mb-4">
                  <li>Полное сопровождение</li>
                  <li>Календарь приема</li>
                  <li>Календарь приема</li>
                  <li>Календарь приема</li>
                  <li>Календарь приема</li>
                </ul>
                <buttom type="button" className=" green btn btn-lg btn-block btn-outline-success">
                  Начать
                </buttom>
              </div>

            </div>
            
            {/* вторая карточка */}
            <div className="card mb-4 shadow-sm">
              <div className="card-header">
                <h4 className="my-0 fonr-weigth-normal">Стандарт</h4>
              </div>
              <div className={`card-text ${styles.pad}`}>
                <h1 className="card-title pricing-card-title">
                ₽1500
                <small className="text-muted">/ м</small>
                </h1>
                <ul className="list-unstyled mt-3 mb-4">
                  <li>Полное сопровождение</li>
                  <li>Календарь приема</li>
                  <li>Календарь приема</li>
                  <li>Календарь приема</li>
                  <li>И много всего</li>
                </ul>
                <buttom type="button" className="btn btn-lg btn-block btn-success">
                  Начать
                </buttom>
              </div>

            </div>
            
            {/* третья карточка */}
            <div className="card mb-4 shadow-sm">
              <div className="card-header">
                <h4 className="my-0 fonr-weigth-normal">Серьезный</h4>
              </div>
              <div className={`card-text ${styles.pad}`}>
                <h1 className="card-title pricing-card-title">
                ₽5000
                <small className="text-muted">/ м</small>
                </h1>
                <ul className="list-unstyled mt-3 mb-4">
                  <li>Полное сопровождение</li>
                  <li>Календарь приема</li>
                  <li>Календарь приема</li>
                  <li>Календарь приема</li>
                  <li>И много-много-много всего</li>
                </ul>
                <buttom type="button" className="btn btn-lg btn-block btn-success">
                  Подборать
                </buttom>
              </div>

            </div>
            

          </div>
        </div>
      </div>
      </>
  )
}
