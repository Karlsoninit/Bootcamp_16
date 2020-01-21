import Type from "./types";

export const addTask = task => ({
  type: Type.ADD_TASK,
  payload: task
});

export const deleteTask = id => ({
  type: Type.DELETE_TASK,
  payload: id
});

export const fetchAllTasks = tasks => ({
  type: Type.FETCH_ALL_TASKS,
  payload: tasks
});
