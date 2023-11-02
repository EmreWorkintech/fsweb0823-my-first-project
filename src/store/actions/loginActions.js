export const SET_LOGGED_IN_USER = "sets logged in user";

export const setLoggedInUser = (user) => {
  return {
    type: SET_LOGGED_IN_USER,
    payload: user,
  };
};
