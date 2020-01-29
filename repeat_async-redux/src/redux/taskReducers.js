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

const allTasks = (state = [], { type, payload }) => {
  switch (type) {
    case Type.ADD_TASKS_ALL:
      return payload;
    case Type.DELETE_TASK:
      return state.filter(task => task.id !== payload);
    case Type.LOGOUT_DONE:
      return [];
    default:
      return state;
  }
};

const errors = (state = null, { type, payload }) => {
  switch (type) {
    case Type.FETCH_ERROR:
      return payload;
    default:
      return state;
  }
};

const success = (state = true, { type, payload }) => {
  switch (type) {
    case Type.START_SUCCESS:
      return true;
    case Type.LOGOUT_DONE:
      return false;
    default:
      return state;
  }
};


export default combineReducers({
  task,
  allTasks,
  errors,
  success
});
