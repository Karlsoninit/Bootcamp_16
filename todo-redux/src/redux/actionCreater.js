export const deleteItem = (state, payload) =>
  state.filter(elem => elem.id !== payload);
