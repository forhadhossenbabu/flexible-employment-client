import _ from "lodash";
import types from "./constant";

const initialState = {
  is_authenticated: false,
  role: null,
  user: {}
};

export default (state = initialState, action = {}) => {
  switch (action.types) {
    case types.SET_CURRENT_USER:
      return {
        ...state,
        is_authenticated: !_.isEmpty(action.payload),
        role: action.payload.role,
        user: action.payload
      };
    case types.SET_LOGGEDIN_USER:
      return {
        ...state,
        is_authenticated: !_.isEmpty(action.payload),
        user: action.payload
      };

    default:
      return state;
  }
};
