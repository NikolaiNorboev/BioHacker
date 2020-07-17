import React from 'react';
import DayPicker from 'react-day-picker';
import DayPickerInput from 'react-day-picker/DayPickerInput';

import 'react-day-picker/lib/style.css';

 
export default function () {
  const WEEKDAYS_SHORT = {
    ru: ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'],
  };
  const MONTHS = {
    ru: [
      'Январь',
      'Февраль',
      'Март',
      'Апрель',
      'Май',
      'Июнь',
      'Июль',
      'Август',
      'Сентябрь',
      'Октябрь',
      'Ноябрь',
      'Декабрь',
    ],
  };
  
  const WEEKDAYS_LONG = {
    ru: [
      'Воскресенье',
      'Понедельник',
      'Вторник',
      'Среда',
      'Четверг',
      'Пятница',
      'Суббота',
    ],
  };
  
  const FIRST_DAY_OF_WEEK = {
    ru: 1,
  };
  // Translate aria-labels
  const LABELS = {
    ru: { nextMonth: 'следующий месяц', previousMonth: 'предыдущий месяц' },
  };

  return (
      <>
          <div>
            <h5 className="card-title">Выберите когда вы готовы начать</h5>
              <DayPicker
              // locale= {ru}
              style= {{display: "flex", justifyContent:"space-around"}}
              onDayChange={day => console.log(day)}
              />

          </div>
      </>
  )
}

