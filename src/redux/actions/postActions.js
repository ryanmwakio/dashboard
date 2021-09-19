import { ActionTypes } from "../constants/action-types";

export const createPost = (posts) => {
  return {
    type: ActionTypes.CREATE_POST,
    payload: posts,
  };
};

export const getPosts = (posts) => {
  return {
    type: ActionTypes.GET_POSTS,
    payload: posts,
  };
};

export const selectedPost = (post) => {
  return {
    type: ActionTypes.SELECTED_POST,
    payload: post,
  };
};

export const updatePost = (posts) => {
  return {
    type: ActionTypes.UPDATE_POST,
    payload: posts,
  };
};

export const deletePost = (posts) => {
  return {
    type: ActionTypes.DELETE_POST,
    payload: posts,
  };
};
