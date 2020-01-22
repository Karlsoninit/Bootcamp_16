import Type from "./types";

export const addTask = value => ({
  type: Type.ADD_TASK,
  payload: value
});
