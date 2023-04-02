import { configureStore, combineReducers } from "@reduxjs/toolkit"
import { Action } from 'redux';
import { useDispatch } from 'react-redux';
import counterReducer from "./counterReducer"
import userReducer from "./user/userSlice"

import logger from "redux-logger"
import thunk, { ThunkAction, ThunkDispatch } from 'redux-thunk';

const reducers = combineReducers({
  counter: counterReducer,
    user: userReducer,
})
export const store = configureStore({
  reducer: reducers,
  // middleware: (getDefaultMiddleware) =>
  //   getDefaultMiddleware({
  //     serializableCheck: {
  //       ignoredActions: [
  //         "user/onFetchUsers/fulfilled",
  //       ],
  //     },
  //   }).concat(logger),
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export type ReduxState = ReturnType<typeof reducers>;
export type TypedDispatch = ThunkDispatch<ReduxState, unknown, Action>;
export type TypedThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  ReduxState,
  unknown,
  Action
>;
export const useTypedDispatch = () => useDispatch<TypedDispatch>();
export default store
