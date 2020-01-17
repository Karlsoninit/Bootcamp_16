import Type from "./types";
import { combineReducers } from "redux";

const counter = (state = 10, { type, payload }) => {
  //   console.log(action);
  switch (type) {
    case Type.INCREMENT_COUNT:
      return state + payload.value;
    case Type.DECREMENT_COUNT:
      return state - payload;
    default:
      return state;
  }
};


const todos = (state = [], { type, payload }) => {
  //   console.log(action);
  switch (type) {
    default:
      return state;
  }
};

export default combineReducers({
  counter,
  todos
});
