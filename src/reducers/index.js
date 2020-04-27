import { combineReducers } from "redux";

import { errorReducer } from "./errorReducer";
import { getVisitorsReducer } from "./getVisitorsReducer";

export default combineReducers({
  errors: errorReducer,
  visitors: getVisitorsReducer,
});
