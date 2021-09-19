import { ActionTypes } from "../constants/action-types";

const initialState = {
  albums: [],
};

export const albumReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.GET_ALBUMS:
      return { ...state, albums: payload };
    case ActionTypes.CREATE_ALBUM:
      return { ...state, albums: payload };
    case ActionTypes.DELETE_ALBUM:
      return { ...state, albums: payload };
    default:
      return state;
  }
};
