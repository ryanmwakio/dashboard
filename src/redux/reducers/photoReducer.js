import { ActionTypes } from "../constants/action-types";

const initialState = {
  photos: [],
};

export const photoReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.GET_PHOTOS:
      return { ...state, photos: payload };
    case ActionTypes.POST_PHOTO:
      return { ...state, photos: payload };
    case ActionTypes.DELETE_PHOTO:
      return { ...state, photos: payload };
    default:
      return state;
  }
};
