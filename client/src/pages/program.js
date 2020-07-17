import React from 'react';
import ProgramVideo from '../components/program/ProgramVideo';
import ProgramCheckList from '../components/program/ProgramCheckList';
import ProgramAction from '../components/program/ProgramAction';
import ProgramCalendar from '../components/program/ProgramCalendar';
import ProgramPayment from '../components/program/ProgramPayment';

export default function () {
  return (
    <div className="container card" style={{position:"relative"}} >
      <div className="card-body" style={{display: "flex", justifyContent:"space-around"}}  ><ProgramVideo /></div>
      <div className="card-body" style={{display: "flex", justifyContent:"space-around"}}><ProgramCheckList/></div>
      {/* <div className="card-body" style={{display: "flex", justifyContent:"space-around"}}><ProgramAction/></div> */}
      <div className="card-body" style={{display: "flex", justifyContent:"space-around"}} ><ProgramCalendar/></div>
      <div className="card-body" style={{display: "flex", justifyContent:"space-around"}} ><ProgramPayment/></div>
    </div>
  )

}
