import { SET_CHANNEL, SET_DATE, SET_TELEGRAM_NAME } from '../actions/action-types';

// const initial = {
//   userId: '',
//   channelType: '',
//   telegramUserId: '',
//   startDate: '',
// }

export default (state = {}, action) => {
  switch (action.type) {
    case SET_CHANNEL:
      return {
        ...state,
        channelType: action.channelType,
      }
    case SET_DATE:
      return {
        ...state,
        startDate: action.startDate,
      }
    case SET_TELEGRAM_NAME: 
      return {
        ...state,
        telegramUserName: action.telegramUserName,
      }
    default:
      return state;
  }
};
