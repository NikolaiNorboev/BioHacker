import React, {useState} from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

import DayPicker from 'react-date-picker';
import 'react-day-picker/lib/style.css';


import styles from './styles.module.css'


export default function () {
  const [value, onChange] = useState();


  return (
      <>
      <div>

        <h5 class="card-title">Дата начала программы</h5>

          {/* <Calendar locale={'ru'}
                style= {{display: "flex", justifyContent:"space-around"}}
                onChange={onChange}
                value={value}
                /> */}
        <div>
        <DayPicker 
            locale={'ru'}
            onChange={onChange}
            value={value}
        />
        </div>
 

                
        <h5 class="card-title mt-4">Уведомления</h5>
        <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
        
        <div className="centercheck">
          <input type="checkbox" name=""></input>
        </div>
{/* 
        <div class="btn-group-toggle" data-toggle="buttons">
          Push-уведомления:
          <label class="btn btn-secondary active">
            <input type="checkbox" checked/> Checked
          </label>
          По e-mail:
          <label class="btn btn-secondary  ">
            <input type="checkbox"/> Checked
          </label>
          В telegram:
          <label class="btn btn-secondary  ">
            <input type="checkbox"/> Checked
          </label>
        </div>     */}

        
        <a href="#" class="btn btn-success">Сохранить</a>
      </div>
      </>
  )
}
