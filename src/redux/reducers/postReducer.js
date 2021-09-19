import { ActionTypes } from "../constants/action-types";

const initialState = {
  posts: [],
};

export const postReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.GET_POSTS:
      return { ...state, posts: payload };
    case ActionTypes.CREATE_POST:
      return { ...state, posts: payload };
    case ActionTypes.DELETE_POST:
      return { ...state, posts: payload };
    default:
      return state;
  }
};
