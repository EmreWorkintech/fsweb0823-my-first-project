import { ADD_USER, SET_USERS } from "../actions/usersActions";

const initialState = [];

export const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USERS:
      return action.payload;
    case ADD_USER:
      return [...state, action.payload];
    default:
      return state;
  }
};