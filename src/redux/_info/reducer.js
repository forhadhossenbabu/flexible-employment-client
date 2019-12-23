import types from "./constant";
const initial_state = {
  loading: false,
  error: false,
  errors: {}
};

export default (state = initial_state, action) => {
  switch (action.type) {
    case types.SET_LOADING:
      return {
        ...state,
        loading: true,
        error: false,
        errors: {}
      };
    case types.SET_ERROR:
      return {
        ...state,
        loading: false,
        error: true,
        ...action.payload
      };
    case types.SET_SUCCESS:
      return {
        ...state,
        loading: false,
        error: false,
        errors: {}
      };
    default:
      return state;
  }
};
