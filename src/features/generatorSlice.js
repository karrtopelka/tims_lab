import { createSlice } from '@reduxjs/toolkit';

export const generatorSlice = createSlice({
  name: 'generator',
  initialState: {
    gen: [],
  },
  reducers: {
    changeGenerator: (state, action) => {
      state.gen = action.payload;
    },
  },
});

export const { changeGenerator } = generatorSlice.actions;

export const selectGenerator = (state) => state.generator.gen;

export default generatorSlice.reducer;
