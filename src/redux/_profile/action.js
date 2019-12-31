import axios from "axios";
import { api_url } from "../../config";
import types from "./constant";
import { set_error, set_loading, set_success } from "../_info/action";

export const get_current_profile = () => async dispatch => {
  dispatch({ type: types.PROFILE_LOADING });
  await axios
    .get(`${api_url}/api/employe-profile`)
    .then(resp => {
      dispatch({ type: types.GET_PROFILE, payload: resp.data });
    })
    .catch(err => {
      dispatch({ type: types.GET_PROFILE, payload: {} });
    });
};

export const create_new_profile = (data, history) => async dispatch => {
  dispatch(set_loading());
  axios
    .post(`${api_url}/api/create-employe-profile`, data)
    .then(async resp => {
      if (resp.status === 200 && resp.data.status) {
        dispatch(set_success());
        await axios
          .get(`${api_url}/api/employe-profile`)
          .then(resp => {
            dispatch({ type: types.GET_PROFILE, payload: resp.data });
            history.push("/employer-dashbord");
          })
          .catch(err => {
            history.push("/employer-dashbord");
          });
      } else return dispatch(set_error(resp.data));
    })
    .catch(err => dispatch(set_error(err.response.data)));
};
