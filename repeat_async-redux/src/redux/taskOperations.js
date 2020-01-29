import axios from "axios";
import {
  addTasksAll,
  deleteTask,
  fetchError,
  startSuccess
} from "./taskActions";

const transformFetch = data => {
  console.log("!!!!", data);
  if (data) {
    return Object.keys(data).map(key => ({
      ...data[key],
      id: key
    }));
  } else {
    return [];
  }
};

export const fetchPost = task => async dispatch => {
  try {
    const data = await axios.post(
      `${process.env.REACT_APP_URL}/wishlist.json`,
      task
    );
    dispatch(startSuccess());
    console.log(data);
  } catch (e) {
    dispatch(fetchError(e));
  }
};

export const getTasks = () => async dispatch => {
  try {
    const data = await axios.get(`${process.env.REACT_APP_URL}/wishlist.json`);
    // console.log("get firebase", data);
    dispatch(addTasksAll(transformFetch(data.data)));

    // console.log(transformFetch(data.data));
  } catch (e) {
    dispatch(fetchError(e));
  }
};

export const deleteItem = id => async dispatch => {
  try {
    const data = await axios.delete(
      `${process.env.REACT_APP_URL}/wishlist/${id}.json`
    );
    dispatch(deleteTask(id));
    console.log("delete", data);
  } catch (e) {
    console.log(e);
    dispatch(fetchError(e));
  }
};
