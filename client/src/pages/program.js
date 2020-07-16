import React from 'react';
import  ProgramVideo from '../components/program/ProgramVideo';
import  ProgramCheckList from '../components/program/ProgramCheckList';
import  ProgramAction from '../components/program/ProgramAction';
import  ProgramCalendar from '../components/program/ProgramCalendar';
// import {Container} from 'react-bootstrap';

export default function () {
  return (
    <div className="container mt-4 position-fixed" >
      {/* <div><ProgramVideo /></div> */}
      <div><ProgramCheckList/></div>
      <div><ProgramAction/></div>
      <div><ProgramCalendar/></div>

    </div>
  )

}
