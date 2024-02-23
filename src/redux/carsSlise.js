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

const handleRejected = (state, action) => {
  return {
    ...state,
    isLoading: false,
    error: action.payload,
  };
};

const handleFetchContactsSuccess = (state, action) => {
  return { ...state, isLoading: false, error: null, items: action.payload };
};

const carsSlice = createSlice({
  name: 'cars',
  initialState,
  extraReducers: {
    [fetchCars.pending]: handlePending,
    [fetchCars.rejected]: handleRejected,
    [fetchCars.fulfilled]: handleFetchContactsSuccess,
  },
});

export const carsReducer = carsSlice.reducer;
