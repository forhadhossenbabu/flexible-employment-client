import axios from "axios";
import types from "./constant";
import jwt_decode from "jwt-decode";
import { api_url } from "../../config";
import set_authorization_token from "../../authentication/set_authorization_token";

import { set_error, set_loading, set_success } from "../_info/action";

const set_loggedin_user = user_data => ({
  type: types.SET_LOGGEDIN_USER,
  payload: user_data
});
export const set_current_user = user_data => ({
  type: types.SET_CURRENT_USER,
  payload: user_data
});

export const register_user = (new_user_data, history) => async dispatch => {
  dispatch(set_loading());
  await axios
    .post(`${api_url}/api/register`, new_user_data)
    .then(resp => {
      if (resp.status === 200 && resp.data.status) {
        dispatch(set_success());
        history.push("/account-verify");
      } else return dispatch(set_error(resp.data));
    })
    .catch(err => dispatch(set_error(err.response.data)));
};

export const login_user = user_data => async dispatch => {
  dispatch(set_loading());
  await axios
    .post(`${api_url}/api/login`, user_data)
    .then(resp => {
      const { token } = resp.data;
      localStorage.setItem("jwtToken", token);
      set_authorization_token(token);
      const decoded_data = jwt_decode(token);
      dispatch(set_success());
      dispatch(set_loggedin_user(decoded_data));
    })
    .catch(err => dispatch(set_error(err.response.data)));
};
