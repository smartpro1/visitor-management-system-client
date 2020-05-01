import { combineReducers } from "redux";
import { errorReducer } from "./errorReducer";
import { getVisitorsReducer } from "./getVisitorsReducer";
import { getVisitorsLogsReducer } from "./getVisitorsLogsReducer";
import { loginAdminReducer } from "./adminReducer";
import { trackVisitorReducer } from "./trackVisitorReducer";

export default combineReducers({
  errors: errorReducer,
  visitors: getVisitorsReducer,
  login: loginAdminReducer,
  logs: getVisitorsLogsReducer,
  trackedVisitors: trackVisitorReducer,
});
