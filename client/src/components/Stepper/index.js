import React from 'react';
import StepperH from 'react-stepper-horizontal';
import { useSelector, useDispatch } from 'react-redux';
import QuestMain from '../questionnaire/SimpleTest';
import Program from '../../pages/program';
import Payment from '../Payment';
import Statistics from '../Statistics';
import { stepPlus, stepMinus} from '../../redux/actions/stepper';


export default function Stepper() {
  const dispatch = useDispatch();
  const step = useSelector(state => state.step)
  return (
    <div>
      <StepperH 
      steps={[
        { title: 'Чек-Лист' },
        { title: 'Описанае программы' },
        { title: 'Оплата' },
        { title: 'Личный кабинет' }
      ]} 
      activeStep={step} 
      completeTitleColor='#757575'
      completeColor='#00006f'
      />
      <button onClick={() => dispatch(stepMinus())}>Prev</button>
      <button onClick={() => dispatch(stepPlus())}>Next</button>
      {step===0 && <QuestMain/>}
      {step===1 && <Program/>}
      {step===2 && <Payment/>}
      {step===3 && <Statistics/>}
    </div>
  );

}
