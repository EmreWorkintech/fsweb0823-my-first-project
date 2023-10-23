/*
 initialState = {
    name: "",
    password: ""
 }

 action = {
    type: "CHANGE_NAME",
    payload: "Emre"
 }
*/

export const loginReducer = (state, action) => {
  switch (action.type) {
    case "CHANGE_NAME":
      /*
            const newState = {...state};
            newState.name = action.payload;
            return newState
            */
      return { ...state, name: action.payload };
    case "CHANGE_PASSWORD":
      return { ...state, password: action.payload };
    default:
      return state;
  }
};
