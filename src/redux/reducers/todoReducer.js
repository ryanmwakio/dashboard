import { ActionTypes } from "../constants/action-types";

const initialState = {
  todos: [],
};

export const todoReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.GET_TODOS:
      return { ...state, todos: payload };
    case ActionTypes.CREATE_TODO:
      return { ...state, todos: payload };
    case ActionTypes.DELETE_TODO:
      return { ...state, todos: payload };
    default:
      return state;
  }
};
