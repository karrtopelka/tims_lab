import { configureStore } from '@reduxjs/toolkit';
import inputsReducer from '../features/inputsSlice';
import generatorReducer from '../features/generatorSlice';

export default configureStore({
  reducer: {
    inputs: inputsReducer,
    generator: generatorReducer,
  },
});
