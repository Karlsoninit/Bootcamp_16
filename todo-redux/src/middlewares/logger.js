export const logger = state => next => action => {
  console.log("state :", state.getState());
  console.log("next :", next);
  console.log("action :", action);

  //   if (action.payload.meta) {
  //     return;
  //   }
  return next(action);
};
