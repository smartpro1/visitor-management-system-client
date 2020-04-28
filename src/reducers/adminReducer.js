import { LOGIN_ADMIN } from "../actions/types";

const initialState = {
  isValidToken: false,
  adminCredentials: {},
};

export const loginAdminReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_ADMIN:
      const isPayload = action.payload ? true : false;
      return {
        ...state,
        isValidToken: isPayload,
        adminCredentials: action.payload,
      };

    default:
      return state;
  }
};
