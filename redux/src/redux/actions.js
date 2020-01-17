import Type from "./types";

export const increment = value => ({
  type: Type.INCREMENT_COUNT,
  payload: { value }
});

export const decrement = value => ({
  type: Type.DECREMENT_COUNT,
  payload: value
});
