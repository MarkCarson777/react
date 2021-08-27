import {
  CREATE_STREAM,
  FETCH_STREAMS,
  FETCH_STREAM,
  EDIT_STREAM,
  DELETE_STREAM
} from '../actions/types';

export default (state = {}, action) => {
  switch (action.type) {
    case FETCH_STREAM: 
      return { ...state, [action.payload.id]: action.payload };
    case CREATE_STREAM: 
      return { ...state, [action.payload.id]: action.payload };
    case EDIT_STREAM:
      return { ...state, [action.apyload.id]: action.payload };
    case DELETE_STREAM:
      return { _.omit(state, 'id')};
    default:
      return state;
  }
};