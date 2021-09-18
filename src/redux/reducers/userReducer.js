import { ActionTypes } from "../constants/action-types";

const initialState = {
  users: [],
};

export const userReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.GET_USERS:
      return { ...state, users: payload };
    case ActionTypes.POST_USERS:
      return { ...state, users: payload };
    case ActionTypes.DELETE_USER:
      return { ...state, users: payload };
    default:
      return state;
  }
};
