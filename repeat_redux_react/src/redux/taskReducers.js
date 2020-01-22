import { combineReducers } from "redux";
import Type from "./types";

const task = (state = {}, { type, payload }) => {
  switch (type) {
    case Type.ADD_TASK:
      return payload;
    default:
      return state;
  }
};

export default combineReducers({
  task
});
