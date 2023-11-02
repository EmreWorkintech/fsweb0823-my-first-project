import axios from "axios";

const token = localStorage.getItem("token");

export const API = axios.create({
  baseURL: "https://reqres.in/api/",
  headers: token
    ? {
        Authorization: `Bearer ${token}`,
      }
    : {},
});

export const API_v2 = axios.create({
  baseURL: "https://6540a96145bedb25bfc247b4.mockapi.io/api/",
  headers: token
    ? {
        Authorization: `Bearer ${token}`,
      }
    : {},
});
