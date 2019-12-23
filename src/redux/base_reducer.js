import { combineReducers } from "redux";

import auth_reducer from "./_auth/reducer";
import info_reducer from "./_info/reducer";

export default combineReducers({
  auth: auth_reducer,
  info: info_reducer
});
