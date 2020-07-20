// http://jquense.github.io/react-big-calendar/examples/index.html#intro
import React from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
// import events from '../events'
// import * as dates from '../../src/utils/dates'


export default function Statistics({  }) {

  const localizer = momentLocalizer(moment)
  // Setup the localizer by providing the moment (or globalize) Object
  // to the correct localizer.
  // const localizer = Calendar.momentLocalizer(moment); // or globalizeLocalizer

  return (
    <div>
      <Calendar
        localizer={localizer}
        // events={myEventsList}
        startAccessor="start"
        endAccessor="end"
      />
    </div>
  )
} 


