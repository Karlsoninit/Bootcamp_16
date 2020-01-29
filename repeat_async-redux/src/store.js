import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import rootReducer from "./redux/taskReducers";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web

const persistConfig = {
  key: "root",
  storage,
  blacklist: ["task", "errors"]
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const middlewares = [thunk];

const enhancer = applyMiddleware(...middlewares);

export const store = createStore(
  persistedReducer,
  composeWithDevTools(enhancer)
);
export const persistor = persistStore(store);
