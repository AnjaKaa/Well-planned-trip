import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { IPlan } from "../../types/planTypes";
import { newPlan, getAllPlans } from "../../api";

export interface IPlanState {
  list: IPlan[]
}



const initialState: IPlanState = {
  list: []
}
interface IGenericState<T> {
  data?: T
  status: 'loading' | 'finished' | 'error'
}

export const createPlan = createAsyncThunk('plans/createPlan',
  async (plan: IPlan, thunkAPI) => {

    const res = await newPlan(plan);
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
    }
  },
  extraReducers: {
    [createPlan.fulfilled]: (state, action) => { console.log('createPlan.fulfilled', action) },
    [getPlans.fulfilled]: (state, action) => { console.log('getPlans.fulfilled', action) }
  }
}
);

export const { addPlan, setAllPlans } = plansSlice.actions;

export default plansSlice.reducer;
