import { STEPPLUS, STEPMINUS } from './action-types';

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
