export default function(state, { type, payload }) {
  switch (type) {
    case "add":
      return [...state, payload];
    case "delete":
      return state.filter(elem => elem.id !== payload);
    default:
      return state;
  }
}
