import { ANSWERQUEST } from '../actions/action-types';
const initialState = [
  {
    questionIndex: '1',
    questionText: 'First question',
    type: 'checkbox',
    data: [
      {
        key: 1,
        questionOption: 'First answer',
        questionAnswer: false,
      },
      {
        key: 2,
        questionOption: 'Second answer',
        questionAnswer: true,
      },
      {
        key: 3,
        questionOption: 'Third answer',
        questionAnswer: false,
      }
    ]
  },
  {
    questionIndex: '2',
    questionText: 'Second question',
    type: 'radio',
    data: [
      {
        key: 1,
        questionOption: 'First answer',
        questionAnswer: true,
      },
      {
        key: 2,
        questionOption: 'Second answer',
        questionAnswer: false,
      }
    ]
  },
  {
    questionIndex: '3',
    questionText: 'Third question',
    type: 'checkbox',
    data: [
      {
        key: 1,
        questionOption: 'First answer',
        questionAnswer: false,
      },
      {
        key: 2,
        questionOption: 'Second answer',
        questionAnswer: false,
      }
    ]
  },
  {
    questionIndex: '4',
    questionText: 'Fourth question',
    type: 'radio',
    data: [
      {
        key: 1,
        questionOption: 'First answer',
        questionAnswer: false,
      },
      {
        key: 2,
        questionOption: 'Second answer',
        questionAnswer: false,
      },
      {
        key: 3,
        questionOption: 'Third answer',
        questionAnswer: false,
      }
    ]
  },
];


export default (state = initialState, action) => {
  switch (action.type) {
    case ANSWERQUEST:
      return action.newState;
    default:
      return state;
  }
};
