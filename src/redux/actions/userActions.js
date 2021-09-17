import { ActionTypes } from "../constants/action-types";

export const createUser = (user) => {
  return {
    type: ActionTypes.POST_USER,
    payload: user,
  };
};

export const getProducts = (users) => {
  return {
    type: ActionTypes.GET_USERS,
    payload: users,
  };
};

export const updateUser = (user) => {
  return {
    type: ActionTypes.UPDATE_USER,
    payload: user,
  };
};

export const deleteUser = (user) => {
  return {
    type: ActionTypes.DELETE_USER,
    payload: user,
  };
};
