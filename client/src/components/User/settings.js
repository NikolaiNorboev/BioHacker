import React, {useState} from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';
import DayPicker from 'react-date-picker';
import 'react-day-picker/lib/style.css';

import ChannelSelection from '../ChannelSelection';
import PurchaseList from '../User/purchaseList'

import styles from './purchaseList.module.css';


export default function () {
  const [value, onChange] = useState();
  const history = useHistory();
  const auth = useSelector(state => state.auth);
  async function toLK() {
    const response = await fetch('/api/flag', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({id: auth.id}),
    });
    if (response.status === 200) {
      history.push('/user');
    }
  }
  return (
    <>
      <div>
        <div className="card">
            <PurchaseList />
        </div>


        <div className='card'>
          <div className="card-header">
            Выберите дату старта:
          </div>
          <div class="card-body">
              <DayPicker 
                  // className="col col-md-3"
                  locale={'ru'}
                  onChange={onChange}
                  value={value}
              />
            </div>
        </div>
        
        <div className='card'>
          <ChannelSelection />
        </div>
      </div>
{/*                 
        <h5 class="card-title mt-4">Уведомления</h5>
        <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
        
        <div className="centercheck">
          <input type="checkbox" name=""></input> */}
        {/* </div> */}
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

        <div className='card'>
          <div className="card-body"> 
            <a href="#" class="btn btn-success" onClick={toLK}>Сохранить</a>
          </div>
        </div>
    </>
  )
}
