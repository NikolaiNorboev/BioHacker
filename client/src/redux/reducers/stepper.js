import { STEPPLUS, STEPMINUS, STEPFOUR } from '../actions/action-types';

export default (state = 0, action) => {
  switch (action.type) {
    case STEPPLUS:
      return state = state + 1;
    case STEPMINUS:
      return state = state - 1;
    case STEPFOUR:
      return state = 3;
    default:
      return state;
  }
};
