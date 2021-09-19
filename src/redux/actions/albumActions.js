import { ActionTypes } from "../constants/action-types";

export const createAlbum = (albums) => {
  return {
    type: ActionTypes.CREATE_ALBUM,
    payload: albums,
  };
};

export const getAlbums = (albums) => {
  return {
    type: ActionTypes.GET_ALBUMS,
    payload: albums,
  };
};

export const selectedAlbum = (album) => {
  return {
    type: ActionTypes.SELECTED_ALBUM,
    payload: album,
  };
};

export const updateAlbum = (albums) => {
  return {
    type: ActionTypes.UPDATE_ALBUM,
    payload: albums,
  };
};

export const deleteAlbum = (albums) => {
  return {
    type: ActionTypes.DELETE_ALBUM,
    payload: albums,
  };
};
