import { GET_VISITORS_LOGS } from "../actions/types";

const initialState = {
  visitorsLogs: [],
  visitorLog: {},
};

export const getVisitorsLogsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_VISITORS_LOGS:
      return {
        ...state,
        visitorsLogs: action.payload,
      };
    default:
      return state;
  }
};
