import types from "./constant";

const initial_state = {
  profile: null,
  loading: false
};

export default (state = initial_state, action) => {
  switch (action.type) {
    case types.GET_PROFILE:
      return {
        ...state,
        profile: action.payload,
        loading: false
      };

    case types.PROFILE_LOADING:
      return {
        ...state,
        loading: true
      };

    default:
      return state;
  }
};
