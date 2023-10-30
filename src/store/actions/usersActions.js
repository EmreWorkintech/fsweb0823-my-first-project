import axios from "axios";

export const GET_USERS = "gets an users from the API";
export const GET_USERS_FETCHING = "fetching users started";
export const GET_USERS_SUCCESS = "successfully got the users from API";
export const GET_USERS_ERROR = "got an error from the API";

export const ADD_USER = "add new user to the users list";

export const addUser = (user) => {
  return {
    type: ADD_USER,
    payload: user,
  };
};

export const getUsers = () => (dispatch) => {
  dispatch(getUsersFetching());
  axios
    .get("https://reqres.in/api/users?per_page=12")
    .then((res) => {
      //console.log(res.data.data);
      dispatch(getUsersSuccess(res.data.data));
    })
    .catch((err) => {
      //console.error(err.message);
      dispatch(getUsersError(err.message));
    });
};

const getUsersFetching = () => {
  return {
    type: GET_USERS_FETCHING,
  };
};

const getUsersSuccess = (users) => {
  return {
    type: GET_USERS_SUCCESS,
    payload: users,
  };
};

const getUsersError = (message) => {
  return {
    type: GET_USERS_ERROR,
    payload: message,
  };
};
