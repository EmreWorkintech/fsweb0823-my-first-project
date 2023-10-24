import { combineReducers } from "redux";
import { countReducer } from "./countReducer";
import { loginReducer } from "./loginReducer";
import { usersReducer } from "./usersReducer";

export const reducers = combineReducers({
  counter: countReducer,
  login: loginReducer,
  users: usersReducer,
});
