import { createStore, combineReducers } from "redux";
import { devToolsEnhancer } from "redux-devtools-extension";
import reducer from "./redux/reducers";

const reducers = combineReducers({
  aplication: reducer
});

export const store = createStore(reducers, devToolsEnhancer());
