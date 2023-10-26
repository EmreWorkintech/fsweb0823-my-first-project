import {
  ADD_USER,
  GET_USERS_FETCHING,
  GET_USERS_SUCCESS,
  GET_USERS_ERROR,
} from "../actions/usersActions";

const initialState = {
  userList: [],
  isFetching: false,
  error: "",
};

export const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_USER:
      return { ...state, userList: [...state.userList, action.payload] };
    case GET_USERS_FETCHING:
      return { ...state, isFetching: true, error: "" };
    case GET_USERS_SUCCESS:
      return { ...state, userList: action.payload, isFetching: false };
    case GET_USERS_ERROR:
      return { ...state, error: action.payload, isFetching: false };
    default:
      return state;
  }
};
