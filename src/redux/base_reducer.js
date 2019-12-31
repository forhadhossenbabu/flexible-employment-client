import { combineReducers } from "redux";

import auth_reducer from "./_auth/reducer";
import info_reducer from "./_info/reducer";
import profile_reducer from "./_profile/reducer";

export default combineReducers({
  auth: auth_reducer,
  info: info_reducer,
  profile: profile_reducer
});
