import React from 'react';
import './PageOfQuest.scss'

function PageOfQuest(props) {

  const { getNext, questionIndex, questionText, data, questionsCount} = props;

  return(
    <div className="question">
     
      <p className="questionCount">{questionIndex}/{questionsCount}</p>
      <h3>{questionText}</h3>
      <ul className="questionUl">
        {data.length && data.map(second => {
          return(
            <li key={questionIndex + data.key} className="questionLi">
              <span className="questionSpan">{second.questionOption}</span>
              <input className="questionInput"type="checkbox" defaultChecked={second.questionAnswer} />
            </li>
          )
        })}
      <button onClick={getNext}>Next</button>
      </ul>
      
    </div>
  )
}

export default PageOfQuest;
