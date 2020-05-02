import { TRACK_VISITOR, TRACK_VISITORS } from "../actions/types";

const initialState = {
  trackedVisitor: {},
  trackedVisitors: [],
};

export const trackVisitorReducer = (state = initialState, action) => {
  switch (action.type) {
    case TRACK_VISITOR:
      return {
        ...state,
        trackedVisitor: action.payload,
      };

    case TRACK_VISITORS:
      return {
        ...state,
        trackedVisitors: action.payload,
      };

    default:
      return state;
  }
};
