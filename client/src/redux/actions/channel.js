import { SET_CHANNEL, SET_DATE, SET_TELEGRAM_NAME } from './action-types';

export function setChannel( channelType) {
  return {
    type: SET_CHANNEL,
    channelType,
  }
}

export function setDate( startDate) {
  return {
    type: SET_DATE,
    startDate,
  }
}

export function setTelegramName(telegramUserName) {
  return {
    type: SET_TELEGRAM_NAME,
    telegramUserName,
  }
}
