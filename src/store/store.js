import { applyMiddleware, legacy_createStore as createStore } from "redux";
import { reducers } from "./reducers/index.js";
import { myLogger_arrow } from "./middlewares/myLogger.js";
import { authControl } from "./middlewares/authControl.js";
import logger from "redux-logger";

const middlewares = applyMiddleware(myLogger_arrow, authControl, logger);

export const myStore = createStore(reducers, middlewares);
