const initialState = [
  {
    questionIndex: '1',
    questionText: 'First question',
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
    questionIndex: '2',
    questionText: 'Second question',
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
];


export default (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};
