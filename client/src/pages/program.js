import React from 'react';
import ProgramVideo from '../components/program/ProgramVideo';
import ProgramCheckList from '../components/program/ProgramCheckList';
import ProgramAction from '../components/program/ProgramAction';
import ProgramCalendar from '../components/program/ProgramCalendar';
import ProgramPayment from '../components/program/ProgramPayment';
import VideoPlayer from '../components/VideoPlayer';

export default function () {
  return (
    <>
    {/* <div className="container card" style={{position:"relative"}} >
      <div className="card-body" style={{display: "flex", justifyContent:"space-around"}}><ProgramVideo /></div>

      <div className="card-body" style={{display: "flex", justifyContent:"space-around"}}><ProgramCalendar/></div>
      <div className="card-body" style={{display: "flex", justifyContent:"space-around"}}><ProgramPayment/></div>
    </div> */}

    <div className=" mb-3 mt-10">
      <div className="d-flex justify-content-around align-item-center">
        <ProgramVideo />
      </div>
    </div>

    <div className="container mb-3 mt-10">
      <div className="d-flex justify-content-center align-item-center">
        <ProgramCheckList/>
      </div>
    </div>

    <div>
      <div className="container"><ProgramAction/></div>
    </div>
    </>
  )

}
