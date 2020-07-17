import React from 'react';
import DayPicker from 'react-day-picker';
import 'react-day-picker/lib/style.css';

 
export default function () {
  return (
      <>
       <div className="container">
       <div className="card">
          <div className="card-body">
            <h5 className="card-title">Выберите когда вы готовы начать</h5>
            {/* <p class="card-text">With supporting text below as a natural lead-in to additional content.</p> */}
              <DayPicker />
            <a href="#" className="btn btn-primary">Оплатить</a>
          </div>
        </div>
        </div>
      </>
  )
}
