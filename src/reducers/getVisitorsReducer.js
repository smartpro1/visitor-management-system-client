import { GET_VISITORS } from "../actions/types";

const initialState = {
  visitors: [],
  visitor: {},
};

export const getVisitorsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_VISITORS:
      return {
        ...state,
        visitors: action.payload,
      };
    default:
      return state;
  }
};
