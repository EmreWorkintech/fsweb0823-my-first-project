export const countReducer = (state, action) => {
  switch (action.type) {
    case "INCREASE":
      const incState = state + 1;
      return incState < 5 ? incState : 5;

    case "DECREASE":
      const decState = state - 1;
      return decState > 0 ? decState : 0;

    default:
      return state;
  }
};
