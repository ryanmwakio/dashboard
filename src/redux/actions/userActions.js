import { ActionTypes } from "../constants/action-types";

export const createUser = (user) => {
  return {
    type: ActionTypes.POST_USER,
    payload: user,
  };
};

export const getUsers = (users) => {
  return {
    type: ActionTypes.GET_USERS,
    payload: users,
  };
};

export const selectedUser = (user) => {
  return {
    type: ActionTypes.SELECTED_USER,
    payload: user,
  };
};

export const updateUser = (users) => {
  return {
    type: ActionTypes.UPDATE_USER,
    payload: users,
  };
};

export const deleteUser = (users) => {
  return {
    type: ActionTypes.DELETE_USER,
    payload: users,
  };
};
