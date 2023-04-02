import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { User } from "./userTypes"
import { onFetchUsers } from "./userApi"

export interface UserState {
  isLoading: boolean
  users: User[]
  error: string | null
}

const initialState: UserState = {
  users: [],
  isLoading: false,
  error: null,
}

export const userSlice = createSlice({
  name: "user",
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
      .addCase(onFetchUsers.pending, (state) => {
        state.isLoading = true
      })
      .addCase(
        onFetchUsers.fulfilled,
        (state, action: PayloadAction<User[]>) => {
          state.isLoading = false
          state.users = action.payload
        }
      )
      .addCase(onFetchUsers.rejected, (state, action: any) => {
        state.isLoading = false
        state.error = action.error.message
      })
  },
})

export const { getUsersStart, unsetError } =
  userSlice.actions

export default userSlice.reducer
