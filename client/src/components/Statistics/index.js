// http://jquense.github.io/react-big-calendar/examples/index.html#intro
import React, {useEffect, useState} from 'react';
import { Calendar, momentLocalizer, Views } from 'react-big-calendar';
import moment from 'moment';
import 'moment/locale/ru';  // without this line it didn't work
import 'react-big-calendar/lib/css/react-big-calendar.css';


moment.locale('ru');

export default function Statistics({  }) {
  const [error, setError] = useState(false);
    const testEvents = [
      {
        'title': 'Выпить витаминку, 2шт',
        'result': 0,
        'allDay': false,
        'start': new Date(2020, 6, 25, 10, 0), // 10.00 AM
        'end': new Date(2020, 6, 25, 14, 0), // 2.00 PM 
      },
      {
        'title': 'Выпить витаминку, 2шт',
        'result': 0,
        'allDay': false,
        'start': new Date(2020, 6, 22, 10, 0), // 10.00 AM
        'end': new Date(2020, 6, 22, 14, 0), // 2.00 PM 
      },
      {
        'title': 'Выпить витаминку, 2шт',
        'result': 1,
        'allDay': false,
        'start': new Date(2020, 6, 23, 10, 0), // 10.00 AM
        'end': new Date(2020, 6, 23, 14, 0), // 2.00 PM 
      },
      {
        'title': 'Выпить витаминку, 2шт',
        'result': 2,
        'allDay': false,
        'start': new Date(2020, 6, 24, 10, 0), // 10.00 AM
        'end': new Date(2020, 6, 24, 14, 0), // 2.00 PM 
      },
      {
        'title': 'Выпить витаминку, 2шт',
        'result': 0,
        'allDay': false,
        'start': new Date(2020, 6, 25, 10, 0), // 10.00 AM
        'end': new Date(2020, 6, 25, 14, 0), // 2.00 PM 
      },
      {
        'title': 'Выпить витаминку, 2шт',
        'result': 0,
        'allDay': false,
        'start': new Date(2020, 6, 22, 10, 0), // 10.00 AM
        'end': new Date(2020, 6, 22, 14, 0), // 2.00 PM 
      },
      {
        'title': 'Выпить витаминку, 2шт',
        'result': 1,
        'allDay': false,
        'start': new Date(2020, 6, 23, 10, 0), // 10.00 AM
        'end': new Date(2020, 6, 23, 14, 0), // 2.00 PM 
      },
      {
        'title': 'Выпить витаминку, 2шт',
        'result': 2,
        'allDay': false,
        'start': new Date(2020, 6, 24, 10, 0), // 10.00 AM
        'end': new Date(2020, 6, 24, 14, 0), // 2.00 PM 
      },
      {
        'title': 'Выпить витаминку, 2шт',
        'result': 0,
        'allDay': false,
        'start': new Date(2020, 6, 25, 10, 0), // 10.00 AM
        'end': new Date(2020, 6, 25, 14, 0), // 2.00 PM 
      },
      {
        'title': 'Выпить витаминку, 2шт',
        'result': 0,
        'allDay': false,
        'start': new Date(2020, 6, 22, 10, 0), // 10.00 AM
        'end': new Date(2020, 6, 22, 14, 0), // 2.00 PM 
      },
      {
        'title': 'Выпить витаминку, 2шт',
        'result': 1,
        'allDay': false,
        'start': new Date(2020, 6, 23, 10, 0), // 10.00 AM
        'end': new Date(2020, 6, 23, 14, 0), // 2.00 PM 
      },
      {
        'title': 'Выпить витаминку, 2шт',
        'result': 2,
        'allDay': false,
        'start': new Date(2020, 6, 24, 10, 0), // 10.00 AM
        'end': new Date(2020, 6, 24, 14, 0), // 2.00 PM 
      },
      {
        'title': 'Выпить витаминку, 2шт',
        'result': 0,
        'allDay': false,
        'start': new Date(2020, 6, 25, 10, 0), // 10.00 AM
        'end': new Date(2020, 6, 25, 14, 0), // 2.00 PM 
      },
      {
        'title': 'Выпить витаминку, 2шт',
        'result': 0,
        'allDay': false,
        'start': new Date(2020, 6, 22, 10, 0), // 10.00 AM
        'end': new Date(2020, 6, 22, 14, 0), // 2.00 PM 
      },
      {
        'title': 'Выпить витаминку, 2шт',
        'result': 1,
        'allDay': false,
        'start': new Date(2020, 6, 23, 10, 0), // 10.00 AM
        'end': new Date(2020, 6, 23, 14, 0), // 2.00 PM 
      },
      {
        'title': 'Выпить витаминку, 2шт',
        'result': 2,
        'allDay': false,
        'start': new Date(2020, 6, 24, 10, 0), // 10.00 AM
        'end': new Date(2020, 6, 24, 14, 0), // 2.00 PM 
      },
      {
        'title': 'Выпить витаминку, 2шт',
        'result': 0,
        'allDay': false,
        'start': new Date(2020, 6, 25, 10, 0), // 10.00 AM
        'end': new Date(2020, 6, 25, 14, 0), // 2.00 PM 
      },
      {
        'title': 'Выпить витаминку, 2шт',
        'result': 0,
        'allDay': false,
        'start': new Date(2020, 6, 22, 10, 0), // 10.00 AM
        'end': new Date(2020, 6, 22, 14, 0), // 2.00 PM 
      },
      {
        'title': 'Выпить витаминку, 2шт',
        'result': 1,
        'allDay': false,
        'start': new Date(2020, 6, 23, 10, 0), // 10.00 AM
        'end': new Date(2020, 6, 23, 14, 0), // 2.00 PM 
      },
      {
        'title': 'Выпить витаминку, 2шт',
        'result': 2,
        'allDay': false,
        'start': new Date(2020, 6, 24, 10, 0), // 10.00 AM
        'end': new Date(2020, 6, 24, 14, 0), // 2.00 PM 
      },
    ];
  const [course, setCourse] = useState({events: testEvents});

  useEffect(() => {
    (async() => {
      const response = await fetch('/course');
      
      const json = await response.json();
      if (response.status === 200) {
        json.course.events.map((event, index) => {
          json.course.events[index].start = new Date(event.start);
          json.course.events[index].end = new Date(event.end);
        })
        setCourse(json.course);
      }
      return setError(json.message);
    })();
  },[]);


  const localizer = momentLocalizer(moment)

  return (
    <div className='container' style={{ height: 700 }}>
      {error && <span className="error">{error}</span>}
      <Calendar
        localizer={localizer}
        events={course.events}
        step={15}
        drilldownView='day'
        // view='month'
        defaultView={Views.AGENDA}
        // defaultDate={new Date(2020, 6, 22)}
        defaultDate={course.startDate}
        // views={'month', 'work_week', 'week', 'day', 'agenda'}
        min={new Date(2020, 6, 22, 7, 0)} // 8.00 AM
        max={new Date(2020, 6, 22, 20, 0)} // Max will be 6.00 PM!
        // showMultiDayTimes
        // popup
        // timeslots={8}
        // onSelectSlot={slotSelected}
        // onSelectEvent={eventSelected}
        eventPropGetter={eventStyleGetter}
      />
    </div>
  );
} 


function eventStyleGetter(event, start, end, isSelected) {
  // const backgroundColor = '#' + event.hexColor;
  const style = {
      backgroundColor: "lightblue",
      borderRadius: '0px',
      opacity: 0.8,
      color: 'black',
      border: '0px',
      display: 'block'
  };
  if (event.result === 1) {
    style.backgroundColor = "#3174ad";
  } else if (event.result === 2) {
    style.backgroundColor = "pink";
  };
  return {
      style: style
  };
}
