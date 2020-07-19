import React, {useState} from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

import DayPicker from 'react-date-picker';
import 'react-day-picker/lib/style.css';


export default function () {
  const [value, onChange] = useState();


  return (
      <>
      <div>

        <h5 class="card-title">Дата начала программы</h5>

          <Calendar locale={'ru'}
                style= {{display: "flex", justifyContent:"space-around"}}
                onChange={onChange}
                value={value}
                />
        <div>
        <DayPicker 
            locale={'ru'}
            onChange={onChange}
            value={value}
        />
        </div>
 

                
        <h5 class="card-title mt-4">Уведомления</h5>
        <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
        
        
        
        <a href="#" class="btn btn-success">Сохранить</a>
      </div>
      </>
  )
}
