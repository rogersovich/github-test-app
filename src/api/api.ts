import axios from "axios";

const api = axios.create({
  baseURL: 'https://api.github.com/',
});

api.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    return Promise.reject(error);
  }
);
export default api;
