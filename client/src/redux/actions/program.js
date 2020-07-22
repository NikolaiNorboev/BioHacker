import { SET_PRICE} from './action-types';

export function setPrice( price) {
  return {
    type: SET_PRICE,
    price,
  }
}
