import { ANSWERQUEST } from '../actions/action-types';
const initialState = [
  {
    questionIndex: 0,
    image: "https://static9.depositphotos.com/1315253/1105/i/450/depositphotos_11057241-stock-photo-spring-meadow-with-cottage.jpg",
    questionText: 'Вы выросли:',
    type: 'radio',
    data: [
      {
        key: 0,
        questionOption: 'В большом городе',
        questionAnswer: false,
      },
      {
        key: 1,
        questionOption: 'В небольшом городе',
        questionAnswer: false,
      },
      {
        key: 2,
        questionOption: 'В сельской местности',
        questionAnswer: false,
      }
    ]
  },
  {
    questionIndex: 1,
    questionText: 'Ваш пол:',
    type: 'radio',
    image: "https://aif-s3.aif.ru/images/006/882/c850f70632e2b6ffbd4f03514c490b5d.jpg",
    data: [
      {
        key: 0,
        questionOption: 'Мужской',
        questionAnswer: false,
      },
      {
        key: 1,
        questionOption: 'Женский',
        questionAnswer: false,
      }
    ]
  },
  {
    questionIndex: 2,
    questionText: 'Ваш возраст',
    type: 'radio',
    image: 'https://image1.thematicnews.com/uploads/images/00/00/40/2017/04/21/b24a4cf7c6.jpg',
    data: [
      {
        key: 0,
        questionOption: 'до 18',
        questionAnswer: false,
      },
      {
        key: 1,
        questionOption: '18-35',
        questionAnswer: false,
      },
      {
        key: 2,
        questionOption: 'старше 35',
        questionAnswer: false,
      }
    ]
  },
  {
    questionIndex: 3,
    questionText: 'Ваше представление о здоровом образе жизни:',
    type: 'radio',
    image: 'https://www.12stom.by/images/zozh.jpg',
    data: [
      {
        key: 0,
        questionOption: 'это здорово',
        questionAnswer: false,
      },
      {
        key: 1,
        questionOption: 'можно обойтись без него',
        questionAnswer: false,
      },
      {
        key: 2,
        questionOption: 'иногда следует его соблюдать',
        questionAnswer: false,
      },
      {
        key: 3,
        questionOption: 'не вижу смысла в его ведении',
        questionAnswer: false,
      }
    ]
  },
  {
    questionIndex: 4,
    questionText: 'Как вы считаете, зачем нужен ЗОЖ?',
    type: 'radio',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRrjs7KxJgRUdP2qFW_G054phl-Kg9myW_jCQ&usqp=CAU',
    data: [
      {
        key: 0,
        questionOption: 'это помогает мне в учебе/работе',
        questionAnswer: false,
      },
      {
        key: 1,
        questionOption: 'это помогает мне чувствовать себя в "форме"',
        questionAnswer: false,
      },
      {
        key: 2,
        questionOption: 'для поддержания здоровья',
        questionAnswer: false,
      },
      {
        key: 3,
        questionOption: 'затрудняюсь ответить',
        questionAnswer: false,
      }
    ]
  },
  {
    questionIndex: 5,
    questionText: 'Курите ли вы или курили раньше?',
    type: 'radio',
    image: 'https://astv.ru/content/NewsImage/3c/f3/3cf3ae8e-19dc-41e7-959a-4e73d4b2e5ec_1.jpg',
    data: [
      {
        key: 0,
        questionOption: 'да',
        questionAnswer: false,
      },
      {
        key: 1,
        questionOption: 'нет',
        questionAnswer: false,
      },
    ]
  },
  {
    questionIndex: 6,
    questionText: 'Как часто вы употребляете алкоголь?',
    type: 'radio',
    image: 'https://www.ferra.ru/thumb/750x0/filters:quality(75)/imgs/2020/03/23/06/3832146/09a496a0a11d293b4b6f42720ce56cacd7226005.jpg',
    data: [
      {
        key: 0,
        questionOption: 'каждый день',
        questionAnswer: false,
      },
      {
        key: 1,
        questionOption: 'раз в неделю',
        questionAnswer: false,
      },
      {
        key: 2,
        questionOption: 'раз в месяц',
        questionAnswer: false,
      },
      {
        key: 3,
        questionOption: 'не употребляю алкоголь',
        questionAnswer: false,
      },
    ],
  },
  {
    questionIndex: 7,
    questionText: 'Принимаете ли вы какие либо наркотические средства или принимали раньше?',
    type: 'radio',
    image: 'https://shegarcrb.ru/files/k-kakim-izmeneniyam-privodyat-sinteticheskie-narkotiki.jpg',
    data: [
      {
        key: 0,
        questionOption: 'нет, никогда',
        questionAnswer: false,
      },
      {
        key: 1,
        questionOption: 'да, довольно часто',
        questionAnswer: false,
      },
      {
        key: 2,
        questionOption: 'иногда',
        questionAnswer: false,
      }
    ]
  },
  {
    questionIndex: 8,
    questionText: 'Как вы проводите свободное время?',
    type: 'checkbox',
    image: 'https://lh3.googleusercontent.com/proxy/xaapXt9ryRYj0Zoitl1I38GbvxVFeXnwSaJdpqP_ufziBavu1Tz2SU-5dm8T-ne8mt_clRrpWabSBKIhxBplRPayLas3XikosCasOTUSBT2n7qawRnQ_yWVgOXEzD07E-qwPNao',
    data: [
      {
        key: 0,
        questionOption: 'смотрю телевизор/играю в компьютерные игры',
        questionAnswer: false,
      },
      {
        key: 1,
        questionOption: 'общаюсь с друзьями и родными',
        questionAnswer: false,
      },
      {
        key: 2,
        questionOption: 'занимаюсь спортом',
        questionAnswer: false,
      },
      {
        key: 3,
        questionOption: 'выбираюсь на природу',
        questionAnswer: false,
      },
      // {
      //   key: 4,
      //   questionOption: 'сплю',
      //   questionAnswer: false,
      // },
      // {
      //   key: 5,
      //   questionOption: 'читаю',
      //   questionAnswer: false,
      // },
      // {
      //   key: 6,
      //   questionOption: 'занимаюсь рукоделием',
      //   questionAnswer: false,
      // },
      {
        key: 7,
        questionOption: 'занимаюсь домашними делами',
        questionAnswer: false,
      }
    ]
  },
  {
    questionIndex: 9,
    questionText: 'Правильно ли вы питаетесь?',
    type: 'radio',
    image: 'https://bigpicture.ru/wp-content/uploads/2019/06/6-3-800x533.jpg',
    data: [
      {
        key: 0,
        questionOption: 'да, всегда',
        questionAnswer: false,
      },
      {
        key: 1,
        questionOption: 'нет, к сожалению не получается',
        questionAnswer: false,
      },
      {
        key: 2,
        questionOption: 'нет, не вижу в этом никакого смысла',
        questionAnswer: false,
      }
    ]
  },
  {
    questionIndex: 10,
    questionText: 'Как часто вы употребляете фаст фуд?',
    type: 'radio',
    image: 'https://vestirama.ru/assets/templates/images/photo/649fa319da90757a86eb5871c80ed9a0.jpg',
    data: [
      {
        key: 0,
        questionOption: 'раз в день точо',
        questionAnswer: false,
      },
      {
        key: 1,
        questionOption: 'раз в месяц',
        questionAnswer: false,
      },
      {
        key: 2,
        questionOption: 'очень редко',
        questionAnswer: false,
      },
      {
        key: 3,
        questionOption: 'никогда',
        questionAnswer: false,
      }
    ]
  },
  {
    questionIndex: 11,
    questionText: 'Как часто вы делаете утреннюю зарядку?',
    type: 'radio',
    image: 'https://lh3.googleusercontent.com/proxy/gW04F4OX4Qg3V_h9sMRg2MqIVUMuDGjgXoKPGZ5rxw5jHxwnI2lKQ5mwEVvU2XbEWoO55cOrEoERm81rlcrsr7Wpz_WN2ecVHFyCgKJHlcWY067KWtzWy7DtwCS9Nmm-mGMoDmIvA3hCjblyHA',
    data: [
      {
        key: 0,
        questionOption: 'каждый день',
        questionAnswer: false,
      },
      {
        key: 1,
        questionOption: 'раз в два дня',
        questionAnswer: false,
      },
      {
        key: 2,
        questionOption: 'никогда',
        questionAnswer: false,
      },
      {
        key: 3,
        questionOption: 'что это такое?',
        questionAnswer: false,
      }
    ]
  },
  {
    questionIndex: 12,
    questionText: 'Занимались ли вы когда-нибудь каким-либо видом спорта, посещали спортивную секци?',
    type: 'radio',
    image: 'https://rebenokvsporte.ru/wp-content/uploads/2018/11/Skalolazanie.jpg',
    data: [
      {
        key: 0,
        questionOption: 'да',
        questionAnswer: false,
      },
      {
        key: 1,
        questionOption: 'нет',
        questionAnswer: false,
      },
    ]
  },
  {
    questionIndex: 13,
    questionText: 'Когда в последний раз вы были в спортивном зале?',
    type: 'radio',
    image: 'https://ddxfitness.ru/upload/iblock/d9e/d9e7d8d1492f1c310070fbccb105776a.jpg',
    data: [
      {
        key: 0,
        questionOption: 'вчера',
        questionAnswer: false,
      },
      {
        key: 1,
        questionOption: 'неделю назад',
        questionAnswer: false,
      },
      {
        key: 2,
        questionOption: 'месяц назад',
        questionAnswer: false,
      },
      {
        key: 3,
        questionOption: 'не помню',
        questionAnswer: false,
      },
    ]
  },
  {
    questionIndex: 14,
    questionText: 'Можете ли вы себе позволить посещение различных спортивных секций, залов, бассейна и т.д.?',
    type: 'radio',
    image: 'data:image/jpeg;base64,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',
    data: [
      {
        key: 0,
        questionOption: 'могу, регулярно посещаю',
        questionAnswer: false,
      },
      {
        key: 1,
        questionOption: 'могу, но не вижу в этом смысла',
        questionAnswer: false,
      },
      {
        key: 2,
        questionOption: 'не могу, т.к. нет времени',
        questionAnswer: false,
      },
      {
        key: 3,
        questionOption: 'не могу, т.к. не хватает дене',
        questionAnswer: false,
      },
    ]
  },
  {
    questionIndex: 14,
    questionText: 'Какое количество денег вы тратите на приобретение витаминов, полезных продуктов питания (фрукты, овощи и т.д.)?',
    type: 'radio',
    image: 'https://image.freepik.com/free-photo/_79783-134.jpg',
    data: [
      {
        key: 0,
        questionOption: '70%-100% от бюджета',
        questionAnswer: false,
      },
      {
        key: 1,
        questionOption: '50%-60% от бюджета',
        questionAnswer: false,
      },
      {
        key: 2,
        questionOption: '30%-40% от бюджета',
        questionAnswer: false,
      },
      {
        key: 3,
        questionOption: '0%-20% от бюджета',
        questionAnswer: false,
      },
    ]
  },
  {
    questionIndex: 14,
    questionText: 'Для того чтобы чувствовать себя в форме, вам необходимо?',
    type: 'radio',
    image: 'https://www.vitamarg.com/images/img5/sekrety-schastlivogo-cheloveka.jpg',
    data: [
      {
        key: 0,
        questionOption: 'соблюдение режима дня',
        questionAnswer: false,
      },
      {
        key: 1,
        questionOption: 'занятие спортом',
        questionAnswer: false,
      },
      {
        key: 2,
        questionOption: 'употребление алкоголя/наркотических средств',
        questionAnswer: false,
      },
      {
        key: 3,
        questionOption: 'литература',
        questionAnswer: false,
      },
    ]
  },
];
  



export default (state = initialState, action) => {
  switch (action.type) {
    case ANSWERQUEST:
      return action.newState
    default:
      return state;
  }
};
