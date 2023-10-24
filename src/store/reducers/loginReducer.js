/*
 action = {
    type: "CHANGE_NAME",
    payload: "Emre"
 }
*/

import { CHANGE_NAME, CHANGE_PASSWORD } from "../actions/loginActions";

const initialState = {
  name: "",
  password: "",
};

export const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_NAME:
      /*
            const newState = {...state};
            newState.name = action.payload;
            return newState
            */
      return { ...state, name: action.payload };
    case CHANGE_PASSWORD:
      return { ...state, password: action.payload };
    default:
      return state;
  }
};
