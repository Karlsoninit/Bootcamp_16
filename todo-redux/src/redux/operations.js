import axios from "axios";
import { fetchAllTasks, addTask } from "./actions";

export const addFetch = task => async dispatch => {
  try {
    const data = await axios.post(
      "https://async-redux-todo.firebaseio.com/todos.json",
      task
    );
    console.log("save :", JSON.parse(data.config.data));
    dispatch(addTask(JSON.parse(data.config.data)));
  } catch (e) {
      console.log(e)
      throw e
  }
};

export const getFetchAllTask = () => async dispatch => {
  const data = await axios.get(
    "https://async-redux-todo.firebaseio.com/todos.json"
  );

  dispatch(fetchAllTasks(data.data));
  console.log("all :", data.data);
};
