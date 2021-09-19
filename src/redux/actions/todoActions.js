import { ActionTypes } from "../constants/action-types";

export const createTodo = (todos) => {
  return {
    type: ActionTypes.CREATE_TODO,
    payload: todos,
  };
};

export const getTodos = (todos) => {
  return {
    type: ActionTypes.GET_TODOS,
    payload: todos,
  };
};

export const selectedTodo = (todo) => {
  return {
    type: ActionTypes.SELECTED_TODO,
    payload: todo,
  };
};

export const updateTodo = (todos) => {
  return {
    type: ActionTypes.UPDATE_POST,
    payload: todos,
  };
};

export const deleteTodo = (todos) => {
  return {
    type: ActionTypes.DELETE_TODO,
    payload: todos,
  };
};
