import React from 'react';
import ChannelSelection from '../ChannelSelection';
import PurchaseList from '../program/purchaseList'
// import Calendar from 'react-calendar';
// import 'react-calendar/dist/Calendar.css';
import DayPicker from 'react-date-picker';
import 'react-day-picker/lib/style.css';

import { setDate } from '../../redux/actions/channel';

import { useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

// import styles from './purchaseList.module.css';

export default function () {
  const history = useHistory();
  const auth = useSelector(state => state.auth);
  const channel = useSelector(state => state.channel);
  const program = useSelector(state => state.program);
  const subscription = useSelector(state => state.channel);
  const dispatch = useDispatch();

  function saveAndGoToLK() {
    const responseSettings = setSettings();
    history.push('/');
    if (responseSettings.status === 200) {
    }

    // if (event.target.id === 'push') {
    //   pushCheckBoxHandler();
    // }
  }

  async function setSettings() {

    await fetch('/subscribe', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(subscription),
    });

    return await fetch('/api/settings', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        id: auth.id,
        username: auth.username,
        programId: program._id,
        startDate: channel.startDate,
        channelType: channel.channelType,
        telegramUserName: channel.telegramUserName,
        pushSubscription: channel.pushSubscription,
      }),
    });
  }

  function setDateHandler(date) {
    console.log(date);
    dispatch(setDate(date));
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
          <div className="card-body">
              <DayPicker 
                  // className="col col-md-3"
                  onChange={setDateHandler}
                  locale={'ru'}
                  value={channel.startDate}
              />
            </div>
        </div>
        
        <div className='card'>
          <ChannelSelection />
        </div>
      </div>


        <div className='card'>
          <div className="card-body"> 
            <a href="#" className="btn btn-success" onClick={saveAndGoToLK}>Сохранить</a>
          </div>
        </div>
    </>
  )
}
