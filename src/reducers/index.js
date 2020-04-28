import { combineReducers } from "redux";
import { errorReducer } from "./errorReducer";
import { getVisitorsReducer } from "./getVisitorsReducer";
import { loginAdminReducer } from "./adminReducer";

export default combineReducers({
  errors: errorReducer,
  visitors: getVisitorsReducer,
  login: loginAdminReducer,
});
