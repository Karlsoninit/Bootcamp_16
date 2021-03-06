import { createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { reducer } from "./reducers";
// import { logger } from "../middlewares/logger";
import thunk from "redux-thunk";
import logger from "redux-logger";

const middlewares = [];

if (process.env.NODE_ENV === "development") {
  middlewares.push(logger, thunk);
}

if (process.env.NODE_ENV === "productions") {
  middlewares.push(thunk);
}

const enhancer = combineReducers({
  todos: reducer
});

export const store = createStore(
  enhancer,
  composeWithDevTools(applyMiddleware(...middlewares))
);
