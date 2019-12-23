import types from "./constant";

export const set_error = errors_data => ({
  type: types.SET_ERROR,
  payload: errors_data
});

export const set_loading = () => ({
  type: types.SET_LOADING
});

export const set_success = () => ({
  type: types.SET_SUCCESS
});
