// import { Octokit } from "@octokit/rest"  

// export const octokit = new Octokit({     
//      auth: import.meta.env.REACT_APP_GH,
// });

const token = import.meta.env.VITE_GITHUB_PAT;

import axios from "axios";

const api = axios.create({
  baseURL: 'https://api.github.com/',
  // headers: {
  //   Authorization: `Bearer ${token}`
  // }
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
