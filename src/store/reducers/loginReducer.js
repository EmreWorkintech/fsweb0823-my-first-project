import { SET_LOGGED_IN_USER } from "../actions/loginActions";

const initialState = {};

export const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_LOGGED_IN_USER:
      return action.payload;
    default:
      return state;
  }
};
