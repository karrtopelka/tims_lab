import { createSlice } from '@reduxjs/toolkit';

export const inputsSlice = createSlice({
  name: 'inputs',
  initialState: {
    n: 0,
    a: 0,
    b: 0,
    r: 0,
  },
  reducers: {
    changeN: (state, action) => {
      state.n = action.payload;
    },
    changeA: (state, action) => {
      state.a = action.payload;
    },
    changeB: (state, action) => {
      state.b = action.payload;
    },
    changeR: (state, action) => {
      state.r = action.payload;
    },
  },
});

export const { changeN, changeA, changeB, changeR } = inputsSlice.actions;

export const selectN = (state) => state.inputs.n;
export const selectA = (state) => state.inputs.a;
export const selectB = (state) => state.inputs.b;
export const selectR = (state) => state.inputs.r;

export default inputsSlice.reducer;
