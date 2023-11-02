import { applyMiddleware, legacy_createStore as createStore } from "redux";
import { reducers } from "./reducers/index.js";
import { myLogger_arrow } from "./middlewares/myLogger.js";
import { authControl } from "./middlewares/authControl.js";
import logger from "redux-logger";
import thunk from "redux-thunk";
import { composeWithDevTools } from "@redux-devtools/extension";

const middlewares = applyMiddleware(
  thunk,
  /*myLogger_arrow, */ authControl,
  logger
);

export const myStore = createStore(reducers, composeWithDevTools(middlewares));
