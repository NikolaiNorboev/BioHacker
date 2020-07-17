import React from 'react';
import { useSelector, useDispatch} from 'react-redux';
import { getAnswer } from '../../../redux/actions/questionnaire';
import './PageOfQuest.scss'

function PageOfQuest(props) {

  const { getNext, questionIndex, questionText, data, questionsCount, image, type, getPrev} = props;
  const quest = useSelector(state => state.quest);
  const dispatch = useDispatch();

  let flag = false;
  if (questionIndex > 1) flag = true;

  function getAns(key) {
    // quest = quest.map((third) => {
    //   return (
    //     third.questionIndex === questionIndex ?{
    //       data.map(four => {
    //         return (
    //           if (four.key === key) {
    //           four.questionOption = !four.questionOption;
    //           }
    //         )
    //       
    //     }
    //   )
    // })
  }

  return(
    <div className="question">
     
      <p className="questionCount">{questionIndex}/{questionsCount}</p>
      <h3>{questionText}</h3>
      <img className="question__img" src={image} alt="alt" />
      <ul className="questionUl">
        {data.length && data.map(second => {
          return(
            <li key={questionIndex + data.key} className="questionLi">
              <span className="questionSpan">{second.questionOption}</span>
              <input className="questionInput"type={type} defaultChecked={second.questionAnswer} onClick={getAns(data.key)}/>
            </li>
          )
        })}
      {flag && <button onClick={getPrev}>Previos</button>}
      <button onClick={getNext}>Next</button>
      </ul>
      
    </div>
  )
}

export default PageOfQuest;
