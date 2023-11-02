import { combineReducers } from "redux";
import { countReducer } from "./countReducer";
import { loginFormReducer } from "./loginFormReducer";
import { usersReducer } from "./usersReducer";
import { loginReducer } from "./loginReducer";
import { favUserReducer } from "./favUsersReducer";

export const reducers = combineReducers({
  counter: countReducer,
  login: loginFormReducer,
  loggedInUser: loginReducer,
  users: usersReducer,
  favUsers: favUserReducer,
});
