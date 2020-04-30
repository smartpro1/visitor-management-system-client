import { TRACK_VISITOR } from "../actions/types";

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
    default:
      return state;
  }
};
