import { combineReducers } from "redux";

import { userReducer } from "./userReducer";
import { postReducer } from "./postReducer";
import { albumReducer } from "./albumReducer";
import { photoReducer } from "./photoReducer";
import { todoReducer } from "./todoReducer";

export const reducers = combineReducers({
  userReducer,
  postReducer,
  albumReducer,
  photoReducer,
  todoReducer,
});
