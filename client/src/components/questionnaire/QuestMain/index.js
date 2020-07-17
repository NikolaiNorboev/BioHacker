import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { useSelector } from 'react-redux';
import PageOfQuest from '../PageOfQuest';
import './QuestMain.scss'

function QuestMain(props) {
  const data = useSelector(state => state.quest);
  const history = useHistory();
  const [questionIndex,setQI] = useState(0);
  
  function getPrev() {
    console.log('buttonP');
    setQI(questionIndex - 1);
  }
  function getNext() {
    console.log('buttonN');
    if (data.length === questionIndex + 1) {
      history.push('/result');
    } else {
      setQI(questionIndex + 1);
    }
  }

  return (
    <div className='questMain'>
      <TransitionGroup>
        <CSSTransition
          timeout={1000}
          classNames="slide"
          key={questionIndex}
        >
          <PageOfQuest
            key={questionIndex}
            {...data[questionIndex]}
            getNext={getNext}
            getPrev={getPrev}
            questionsCount={data.length}
          />
        </CSSTransition>
      </TransitionGroup>
    </div>
  )
}

export default QuestMain;
