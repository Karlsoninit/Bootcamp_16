import Type from "./types";

export const addTask = task => ({
  type: Type.ADD_TASK,
  payload: task
});

export const deleteTask = (id, flag = true) => ({
  type: Type.DELETE_TASK,
  payload: { id, meta: flag }
});
