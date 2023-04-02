import { createAsyncThunk } from "@reduxjs/toolkit"
import { User, ParamsUser, ApiResponse } from "./userTypes"
import api from "../../api/api"

export const onFetchUsers = createAsyncThunk<User[], ParamsUser>(
  "user/onFetchUsers",
  async (payload) => {
    try {
      const response = await api.get("search/users", {
        params: payload,
      })
      if (response.status === 200) {
        const data: ApiResponse = response.data
        if ("items" in data) {
          return data.items.map((user: Partial<User>) => ({
            id: user.id ?? 0,
            login: user.login ?? "",
            avatar_url: user.avatar_url ?? "",
          }))
        }
      } else {
        return response.data
      }
    } catch (error: any) {
      throw new Error(error);

    }
  }
)
