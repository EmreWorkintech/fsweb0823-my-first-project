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
