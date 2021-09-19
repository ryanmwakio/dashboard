import { ActionTypes } from "../constants/action-types";

export const createPhoto = (photos) => {
  return {
    type: ActionTypes.POST_PHOTO,
    payload: photos,
  };
};

export const getPhotos = (photos) => {
  return {
    type: ActionTypes.GET_PHOTOS,
    payload: photos,
  };
};

export const selectedPhoto = (photo) => {
  return {
    type: ActionTypes.SELECTED_PHOTO,
    payload: photo,
  };
};

export const updatePhoto = (photos) => {
  return {
    type: ActionTypes.UPDATE_PHOTO,
    payload: photos,
  };
};

export const deletePhoto = (photos) => {
  return {
    type: ActionTypes.DELETE_PHOTO,
    payload: photos,
  };
};
