import React from 'react';
import  ProgramVideo from '../components/program/ProgramVideo';
import  ProgramCheckList from '../components/program/ProgramCheckList';
import  ProgramAction from '../components/program/ProgramAction';
import  ProgramCalendar from '../components/program/ProgramCalendar';
// import {Container} from 'react-bootstrap';

export default function () {
  return (
    <div className="container row card" style={{position:"relative"}} >
      <div className="card-body" ><ProgramVideo /></div>
      <div className="card-body" ><ProgramCheckList/></div>
      <div className="card-body" ><ProgramAction/></div>
      <div className="card-body" ><ProgramCalendar/></div>

    </div>
  )

}
