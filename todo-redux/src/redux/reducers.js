import Type from "./types";
import { deleteItem, transform } from "./actionCreater";
const initialState = [];

const handlers = {
  [Type.ADD_TASK]: (state, { payload }) => {
    console.log("transform", transform(payload));
    return [payload, ...state];
  },
  [Type.DELETE_TASK]: (state, { payload }) => deleteItem(state, payload),
  [Type.FETCH_ALL_TASKS]: (state, { payload }) => transform(payload),
  DEFAULT: state => state
};

export const reducer = (state = initialState, action) => {
  const handler = handlers[action.type] || handlers.DEFAULT;
  return handler(state, action);
};

// export const reducer = (state = initialState, { type, payload }) => {
//   switch (type) {
//     case Type.ADD_TASK:
//       return [...state, payload];
//     case Type.DELETE_TASK:
//       return deleteItem(state, payload);
//     default:
//       return state;
//   }
// };
