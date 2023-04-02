import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { ReposUser } from "./reposTypes"
import { onFetchReposUser } from "./reposApi"
import { RootState } from '../index';

export interface ReposState {
  isLoading: boolean
  repos: ReposUser[]
  error: string | null
}

const initialState: ReposState = {
  repos: [],
  isLoading: false,
  error: null,
}

export const reposSlice = createSlice({
  name: "reposUser",
  initialState,
  reducers: {
    getUsersStart(state) {
      state.isLoading = true
    },
    unsetError(state) {
      state.error = null
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(onFetchReposUser.pending, (state) => {
        state.isLoading = true
      })
      .addCase(
        onFetchReposUser.fulfilled,
        (state, action: PayloadAction<ReposUser[]>) => {
          state.isLoading = false
          state.repos = action.payload
        }
      )
      .addCase(onFetchReposUser.rejected, (state, action: any) => {
        state.isLoading = false
        state.error = action.error.message
      })
  },
})

export const { getUsersStart, unsetError } = reposSlice.actions

export const selectedRepos = (state: RootState) => state.reposUser.repos;
export const reposLoading = (state: RootState) => state.reposUser.isLoading;
export const error = (state: RootState) => state.reposUser.error;

export default reposSlice.reducer
