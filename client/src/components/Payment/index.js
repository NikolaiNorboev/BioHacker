import React, { useState } from 'react';
import styles from './payment.module.css'
{/* <script src="//code.jquery.com/jquery-1.11.1.min.js"></script> */ }


export default function Payment() {
  const [price, setPrice] = useState('500');
  //https://codepen.io/llgruff/pen/JdyJWR
  return (
    <>

      <div className="container">
        <div className="alert alert-success" role="alert">
          <h4 className="alert-heading">Оплата</h4>
        </div>
      </div>

      <div className="card">
      <div className={`${styles.new_body}`}>

        <div className="card-header">
          Детали платежа
          <img className="img-responsive pull-right" src="http://i76.imgup.net/accepted_c22e0.png"/>
        </div>

        <div class="card-body">
          <div className="row">
            <div className="col-md-6 mb-3">
              <label htmlFor="cardNumber">НОМЕР КАРТЫ</label>
                  <input
                    type="tel"
                    // className={`${styles.form_control}`}
                    name="cardNumber"
                    placeholder="Номер карты"
                    autoComplete="cc-number"
                    required autoFocus
                  />
            </div>
          </div>

            <div className="row">
              <div className="col-md-3 mb-3">
                        <label htmlFor="cardExpiry">До</label>
                        <input
                                    type="tel"
                                    // className={`${styles.form_control}`}
                                    name="cardExpiry"
                                    placeholder="ММ / ГГ"
                                    autoComplete="cc-exp"
                                    required
                                    />
              </div>

              <div className="col-md-3 mb-3">
                        <label htmlFor="cardCVC">CVС</label>
                        <input
                                    type="password"
                                    // className={`${styles.form_control}`}
                                    name="cardCVC"
                                    placeholder="CVC"
                                    autoComplete="cc-csc"
                                    required
                                    />
              </div>
            </div>

          <div>
  <a href="#" className="btn btn-success btn-lg btn-block ">Оплатить {price} руб</a>
          </div>

        </div>
      </div>
    </div>
  </>
  )
} 
