import { combineReducers } from "redux";
import { userReducer } from "./userReducer";
import { postReducer } from "./postReducer";

export const reducers = combineReducers({ userReducer, postReducer });
