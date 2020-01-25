import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import rootReducer from "./redux/taskReducers";

const middlewares = [thunk];

const enhancer = applyMiddleware(...middlewares);

export const store = createStore(rootReducer, composeWithDevTools(enhancer));
