// ActionTypes
import * as actionTypes from "../actions/actionTypes";

const initialState = {
  user: null,
  profile: null,
  myprofile: null,
  response: null,
  error: null
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_CURRENT_USER:
      return {
        ...state,
        user: action.payload
      };
    case actionTypes.FETCH_PROFILE:
      return {
        ...state,
        profile: action.payload
      };
    case actionTypes.FETCH_MY_PROFILE:
      return {
        ...state,
        myprofile: action.payload
      };
    case actionTypes.UPDATE_PROFILE:
      return {
        ...state,
        response: action.payload
      };
    case actionTypes.ERROR:
      return {
        ...state,
        error: action.payload
      };
    default:
      return state;
  }
};

export default reducer;
