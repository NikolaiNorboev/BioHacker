import React, {useState} from 'react';
import StepperH from 'react-stepper-horizontal';
import QuestMain from '../questionnaire/QuestMain';
import Program from '../../pages/program';

export default function Stepper() {
  const [step, setStep] = useState(0);

  return (
    <div>
      <StepperH steps={[
        { title: 'Чек-Лист' },
        { title: 'Описанае программы' },
        { title: 'Step Three' },
        { title: 'Step Four' }
      ]} activeStep={step} />
      <button onClick={() => setStep(state => ++state)}>Next</button>
      {step===0 && <QuestMain/>}
      {step===1 && <Program/>}
      {step===2 && <QuestMain/>}
      {step===3 && <QuestMain/>}
    </div>
  );

}
