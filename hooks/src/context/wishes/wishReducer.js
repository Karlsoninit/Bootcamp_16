import Type from "../types";

// export const reducer = (state, { type, payload }) => {
//   switch (type) {
//     case Type.ADD_WISH:
//       return [...state, payload];
//     default:
//       return state;
//   }
// };

const handlers = {
  [Type.ADD_WISH]: (state, action) => [...state, action.payload],
  [Type.DELETE_WISH]: (state, { payload }) =>
    state.filter(elem => elem.id !== payload),
  DEFAULT: state => state
};

export const reducer = (state, action) => {
  const handler = handlers[action.type] || handlers.DEFAULT;
  return handler(state, action);
};
