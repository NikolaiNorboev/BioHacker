import { STEPPLUS, STEPMINUS, STEPFOUR } from './action-types';

export function stepPlus () {
  return {
    type: STEPPLUS,
  }
}

export function stepMinus () {
  return {
    type: STEPMINUS,
  }
}

export function stepFour () {
  return {
    type: STEPFOUR,
  }
}
