export const SET_USERS = "gets an add users to the state";
export const ADD_USER = "add new user to the users list";

export const setUsers = (users) => {
  return {
    type: SET_USERS,
    payload: users,
  };
};

export const addUser = (user) => {
  return {
    type: ADD_USER,
    payload: user,
  };
};
