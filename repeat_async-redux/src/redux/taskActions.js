import Type from "./types";

export const addTask = value => ({
  type: Type.ADD_TASK,
  payload: value
});

export const addTasksAll = task => ({
  type: Type.ADD_TASKS_ALL,
  payload: task
});

export const startSuccess = () => ({
  type: Type.START_SUCCESS
});

export const deleteTask = id => ({
  type: Type.DELETE_TASK,
  payload: id
});

export const fetchError = er => ({
  type: Type.FETCH_ERROR,
  payload: er
});

export const logout = () => ({
  type: Type.LOGOUT_DONE
});

// export { addTask, addTasksAll, deleteTask, fetchError };
