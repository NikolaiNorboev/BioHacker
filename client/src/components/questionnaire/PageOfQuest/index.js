import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getAnswer } from '../../../redux/actions/questionnaire';
import './PageOfQuest.scss';

function PageOfQuest({ qi, getPrev, getNext }) {
  let quest = useSelector(state => state.quest);
  const [thisQ, setThisQ] = useState(quest[qi]);
  const dispatch = useDispatch();

  let flag = false;
  if (qi > 0) flag = true;

  function getAns(key) {
    const newData = thisQ.data.map(one => {
      return (
        one.key === key ? { ...one, questionAnswer: !one.questionAnswer } :
          thisQ.type == 'radio' ? { ...one, questionAnswer: false } : one
      )
    })
    if (thisQ.type == 'radio') {
      // setThisQ({...thisQ, data: newData});
      console.log(newData);
    }
    quest = quest.map(sec => {
      return (
        sec.questionIndex === thisQ.questionIndex ? { ...sec, data: newData, isAswer: true } : sec
      )
    });
    // console.log(quest);
    dispatch(getAnswer(quest));
  }

  return (
    <div className="container">
      <div className="d-flex flex-column justify-content-center">
        <div>
          <p className="question__count">{qi + 1}/{quest.length}</p>
          <h3 className="question__text">{thisQ.questionText}</h3>
          <img className="question__img" src={thisQ.image} alt="alt" />
        </div>
        <div class="btn-group-vertical">
          {thisQ.data && thisQ.data.map(second => {
            return (
              <p key={second.key} className="questionLi">
                <span className="question__option">{second.questionOption}</span>
                <label className="btn btn-light">
                  <input className="questionInput" type='checkbox'
                    defaultChecked={second.questionAnswer}
                    onChange={() => getAns(second.key)} />
                </label>
              </p>
            )
          })}
          <div class="btn-group-vertical">
            {flag && <button onClick={getPrev} className="btn btn-outline-primary">
              Previos</button>}
            {thisQ.isAswer && <button onClick={getNext} className="btn btn-outline-info">{
              quest.length === qi + 1 ? "Result" : "Next"}</button>}
          </div>
        </div>
      </div>
    </div>
  )
}

export default PageOfQuest;
