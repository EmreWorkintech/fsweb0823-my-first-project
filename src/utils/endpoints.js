import { REQ_TYPES } from "../hooks/useAxios";

export const getUsersParams = () => ({
  endpoint: "users",
  reqType: REQ_TYPES.GET,
});

export const getUserParams = (id) => ({
  endpoint: `users/${id}`,
  reqType: REQ_TYPES.GET,
});

export const createUsersParams = (user) => ({
  endpoint: "users",
  reqType: REQ_TYPES.POST,
  payload: user,
});

export const updateUsersParams = (user) => ({
  endpoint: `users/${user.id}`,
  reqType: REQ_TYPES.PUT,
  payload: user,
});

export const deleteUsersParams = (id) => ({
  endpoint: `users/${id}`,
  reqType: REQ_TYPES.DELETE,
});
