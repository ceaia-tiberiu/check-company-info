import { FETCH_DESCRIPTION, FETCH_NEWS } from '../actions/types';

const initialState = {
  description: [],
  news: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_DESCRIPTION:
      return {
        ...state,
        description: action.payload,
      };
    case FETCH_NEWS:
      return {
        ...state,
        news: action.payload,
      };
    default:
      return state;
  }
};
