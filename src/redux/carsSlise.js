import { createSlice } from '@reduxjs/toolkit';
import { fetchCars } from './operations';

const initialState = {
  items: [],
  isLoading: false,
  error: null,
};

const handlePending = state => {
  return {
    ...state,
    isLoading: true,
  };
};

const carsSlice = createSlice({
  name: 'cars',
  initialState,
  extraReducers: {
    [fetchCars.pending]: handlePending,
  },
});

export const carsReducer = carsSlice.reducer;
