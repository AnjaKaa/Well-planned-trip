import { configureStore, applyMiddleware, compose } from "@reduxjs/toolkit";
import {
  routerMiddleware,
  connectRouter,
  RouterState
} from 'connected-react-router';
import userReducer, { IUserState } from "./slices/userSlice";
import { createBrowserHistory, History } from 'history';
import { IPlan } from './../types/planTypes';
import plansReducer, { IPlanState } from "./slices/plansSlice";

export interface IRootState {
  router: RouterState,
  user: IUserState,
  plans: IPlanState
}

export const history: History<any> = createBrowserHistory();
const preloadedState = {};

export const store = configureStore({
  reducer: {
    router: connectRouter(history),
    user: userReducer,
    plans: plansReducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(routerMiddleware(history)),
  preloadedState
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>


