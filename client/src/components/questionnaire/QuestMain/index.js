import React, { useState } from 'react';
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { useSelector } from 'react-redux';
import PageOfQuest from '../PageOfQuest';
import './QuestMain.scss'

function QuestMain(props) {
  const data = useSelector(state => state.quest);
  const [questionIndex,setQI] = useState(0);
  function getNext() {
    // let history = props.history;
    console.log('button');
    if (data.length === questionIndex + 1) {
      // this.props.getResult(this.state.score, history);
      console.log('Fin');
    } else {
      setQI(questionIndex + 1);
    }
  }

  return (
    <div className='questMain'>
      <h6>Quest Main</h6>
      <TransitionGroup>
        <CSSTransition
          timeout={500}
          classNames="slide"
          key={questionIndex}
        >
          <PageOfQuest
            key={questionIndex}
            {...data[questionIndex]}
            getNext={getNext}
            questionsCount={data.length}
          />
        </CSSTransition>
      </TransitionGroup>
    </div>
  )
}

export default QuestMain;
