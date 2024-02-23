import { createSelector } from '@reduxjs/toolkit';

export const selectCars = state => state.cars.items;
export const selectFilter = state => state.filter;
export const selectError = state => state.contacts.error;
export const selectIsLoading = state => state.contacts.isLoading;

export const selectFilteredContacts = createSelector(
  [selectCars, selectFilter],
  (cars, filter) => {
    return cars.filter(({ make }) =>
    make.toLowerCase().includes(filter.toLowerCase())
    );
  }
);