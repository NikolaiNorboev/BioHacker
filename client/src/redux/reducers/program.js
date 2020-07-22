import { SET_PRICE } from '../actions/action-types';

export default (state = {}, action) => {
  switch (action.type) {
    case SET_PRICE:
      return {
        ...state,
        price: action.price,
    }

    default:
      return state;
  }
};
