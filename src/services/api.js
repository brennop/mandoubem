/* eslint-disable prettier/prettier */
import axios from "axios";

const api = axios.create({
  baseURL: "https://cgr.cjr.org.br/v1",
});

api.interceptors.request.use(
  function(config) {
    config.headers.Authentication = localStorage.getItem("token");
    return config;
  },
  function(error) {
    return Promise.reject(error);
  }
);

api.interceptors.response.use(
  function(response) {
    return response.data;
  },
  function(error) {
    if (error.status.code === 401) {
      localStorage.removeItem("token");
    }
    return Promise.reject(error);
  }
);

export const login = (data) => api.post("/login", data);

export default api;
