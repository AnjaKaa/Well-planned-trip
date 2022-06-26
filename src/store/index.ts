import { configureStore, applyMiddleware, compose } from "@reduxjs/toolkit";
import {
  routerMiddleware,
  connectRouter,
  RouterState
} from 'connected-react-router';
import userReducer, { IUserState } from "./slices/userSlice";
import { createBrowserHistory, History } from 'history';

export interface IRootState {
  router: RouterState,
  user: IUserState
}

export const history: History<any> = createBrowserHistory();
const preloadedState = {};

export const store = configureStore({
  reducer: {
    router: connectRouter(history),
    user: userReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(routerMiddleware(history)),
  preloadedState
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>


