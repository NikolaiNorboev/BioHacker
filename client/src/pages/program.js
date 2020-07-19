import React, {useState} from 'react';
import ProgramVideo from '../components/program/ProgramVideo';
import ProgramCheckList from '../components/program/ProgramCheckList';
import ProgramAction from '../components/program/ProgramAction';
import ProgramCalendar from '../components/program/ProgramCalendar';
import ProgramPayment from '../components/program/ProgramPayment';
import VideoPlayer from '../components/VideoPlayer';

export default function () {
  const [name, setName] = useState('Detox');

  return (
    <>
    {/* <div className="container card" style={{position:"relative"}} >
      <div className="card-body" style={{display: "flex", justifyContent:"space-around"}}><ProgramVideo /></div>

      <div className="card-body" style={{display: "flex", justifyContent:"space-around"}}><ProgramCalendar/></div>
      <div className="card-body" style={{display: "flex", justifyContent:"space-around"}}><ProgramPayment/></div>
    </div> */}
    <h5 className="card-title mt-4 d-flex justify-content-around"> Мы подобрали для вас программу {name}</h5>
    <div className=" mb-3 mt-10">
      <div className="d-flex justify-content-around align-item-center">
        <ProgramVideo />
      </div>
    </div>

    <div className="container mb-3 mt-10">
      <div className="d-flex justify-content-around align-item-center">
        <ProgramCheckList/>
      </div>
    </div>

    <div>
      <div className="container">
        <ProgramAction />
      </div>
    </div>
    </>
  )

}
