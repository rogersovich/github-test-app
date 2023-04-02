import { createAsyncThunk } from "@reduxjs/toolkit"
import { ReposUser } from "./reposTypes"
import api from "../../api/api"

export const onFetchReposUser = createAsyncThunk<ReposUser[], string>(
  "reposUser/onFetchReposUser",
  async (username) => {
    try {
      const response = await api.get(`users/${username}/repos`, {
        params: {
          per_page: 20
        }
      })
      const data = response.data

      return data.map((repos: Partial<ReposUser>) => ({
        id: repos.id ?? 0,
        name: repos.name ?? "",
        full_name: repos.full_name ?? "",
        html_url: repos.html_url ?? "",
        description: repos.description ?? "",
        stargazers_count: repos.stargazers_count ?? 0,
        watchers_count: repos.watchers_count ?? 0,
        forks_count: repos.forks_count ?? 0,
      }))
    } catch (error: any) {
      throw new Error(error)
    }
  }
)
