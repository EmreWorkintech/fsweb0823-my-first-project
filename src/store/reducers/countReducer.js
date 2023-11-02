import { DECREASE, INCREASE, PLUS } from "../actions/counterActions";

const initialState = 0;

export const countReducer = (state = initialState, action) => {
  switch (action.type) {
    case INCREASE:
      const incState = state + 1;
      return incState < 5 ? incState : 5;

    case DECREASE:
      const decState = state - 1;
      return decState > 0 ? decState : 0;

    case PLUS:
      const newState = state + action.payload;
      return newState;

    default:
      return state;
  }
};
