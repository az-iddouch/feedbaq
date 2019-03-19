import { FETCH_USER } from '../actions/types';

export default function(state = null, action) {
  switch (action.type) {
    case FETCH_USER:
      return action.payload || false; //if it's an empty string return false
    default:
      return state;
  }
}
