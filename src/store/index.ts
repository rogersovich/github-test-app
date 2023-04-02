import { configureStore, combineReducers } from "@reduxjs/toolkit"
import { Action } from "redux"
import { useDispatch } from "react-redux"
import userReducer from "./user/userSlice"
import reposSlice from "./reposUser/reposSlice"

import logger from "redux-logger"
import { ThunkAction, ThunkDispatch } from "redux-thunk"

const reducers = combineReducers({
  user: userReducer,
  reposUser: reposSlice
})
export const store = configureStore({
  reducer: reducers,

  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export type ReduxState = ReturnType<typeof reducers>
export type TypedDispatch = ThunkDispatch<ReduxState, unknown, Action>
export type TypedThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  ReduxState,
  unknown,
  Action
>
export const useTypedDispatch = () => useDispatch<TypedDispatch>()
export default store
