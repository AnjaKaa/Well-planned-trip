import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { IPlan } from "../../types/planTypes";
import { newPlan, getAllPlans, updatePlan } from "../../api";

export interface IPlanState {
  list: IPlan[],
  current: IPlan;
}



const initialState: IPlanState = {
  list: [],
  current: null
}
// interface IGenericState<T> {
//   data?: T
//   status: 'loading' | 'finished' | 'error'
// }

export const createPlan = createAsyncThunk('plans/createPlan',
  async (plan: IPlan, thunkAPI) => {
    const res = await newPlan(plan);
    thunkAPI.dispatch(getPlans());
    return res;
  })

export const savePlan = createAsyncThunk('plans/savePlan',
  async (plan: IPlan, thunkAPI) => {
    const res = await updatePlan(plan);
    thunkAPI.dispatch(getPlans());
    return res;
  })

export const getPlans = createAsyncThunk('plans/getPlans',
  async (_, thunkAPI) => {
    const res = await getAllPlans();
    thunkAPI.dispatch(setAllPlans(res))
    return res;
  })

const plansSlice = createSlice({
  name: 'plans',
  initialState,
  reducers: {
    setAllPlans(state, action) {
      state.list = action.payload
    },
    addPlan(state, action) {
      state.list = [...state.list, action.payload]
    },
    selectPlan(state, action) {
      state.current = state.list.find(plan => plan.planId === action.payload)
    }
  },
  // extraReducers: {
  //   [createPlan.fulfilled as any]: (state, action) => { console.log('createPlan.fulfilled', action) },
  //   [getPlans.fulfilled as any]: (state, action) => { console.log('getPlans.fulfilled', action) }
  // }
}
);

export const { addPlan, setAllPlans, selectPlan } = plansSlice.actions;

export default plansSlice.reducer;
