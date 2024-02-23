import { configureStore } from '@reduxjs/toolkit';
import { carsReducer } from './carsSlise';
// import { filterReducer } from './filterSlice';

export const store = configureStore({
  reducer: {
    cars: carsReducer,
    // filter: filterReducer,
  },
});