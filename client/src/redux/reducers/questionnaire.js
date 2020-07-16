const initialState = [
  {
    answer: '1',
    question_text: 'First question',
    data: [
      {
        key: 1,
        question_option: 'First answer',
        question_answer: false,
      },
      {
        key: 2,
        question_option: 'First answer',
        question_answer: false,
      }
    ]
  },
  {
    answer: '2',
    question_text: 'Second question',
    data: [
      {
        key: 1,
        question_option: 'First answer',
        question_answer: false,
      },
      {
        key: 2,
        question_option: 'First answer',
        question_answer: false,
      },
    ],
  },
];


export default (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};
