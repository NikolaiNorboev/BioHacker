import React, { useState } from 'react';
import { useSelector, useDispatch} from 'react-redux';
import { getAnswer } from '../../../redux/actions/questionnaire';
import './PageOfQuest.scss';

function PageOfQuest({qi, getPrev, getNext}) {
  const [flag2, setFlag2] = useState(false)
  let quest = useSelector(state => state.quest);
  let thisQ = quest[qi];
  const dispatch = useDispatch();

  let flag = false;
  if (qi > 0) flag = true;  

  function getAns(key) {
    setFlag2(true);
    const newData = thisQ.data.map(one => {
      return (
        one.key === key ? {...one, questionAnswer: !one.questionAnswer} :
        thisQ.type === 'radio' ? {...one, questionAnswer: false} : one
      )
    })
    quest = quest.map(sec => {
      return(
        sec.questionIndex === thisQ.questionIndex ? {...sec, data: newData} : sec
      )
    });
    // console.log(quest);
    dispatch( getAnswer(quest));
  }

  return(
    <div className="question">
     
      <p className="questionCount">{qi + 1}/{quest.length}</p>
      <h3>{thisQ.questionText}</h3>
      <img className="question__img" src={thisQ.image} alt="alt" />
      <ul className="questionUl">
        {thisQ.data && thisQ.data.map(second => {
          return(
            <li key={second.key} className="questionLi">
              <span className="questionSpan">{second.questionOption}</span>
              <input className="questionInput"type={thisQ.type} 
                defaultChecked={second.questionAnswer} 
                onChange={() =>getAns(second.key)}/>
            </li>
          )
        })}
      {flag && <button onClick={getPrev} className="app-button">
        Previos</button>}
      {flag2 && <button onClick={getNext} className="app-button">{
      quest.length === qi + 1 ? "Result" : "Next"}</button>}
      </ul>
      
    </div>
  )
}

export default PageOfQuest;
