import React from 'react';
import PageOfQuest from '../PageOfQuest';
import {useSelector} from 'react-redux';

function QuestMain() {
  const data = useSelector(state => state.quest);
  return(
    <div>
      <h6>Quest Main</h6>
      <PageOfQuest />
    </div>
  )
}

export default QuestMain;
