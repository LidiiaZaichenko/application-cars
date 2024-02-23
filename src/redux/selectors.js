// import { createSelector } from '@reduxjs/toolkit';

export const selectCars = state => state.cars.items;
// export const selectFilter = state => state.filter;
// export const selectError = state => state.cars.error;
// export const selectIsLoading = state => state.cars.isLoading;

// export const selectFilteredContacts = createSelector(
//   [selectContacts, selectFilter],
//   (contacts, filter) => {
//     return contacts.filter(({ name }) =>
//       name.toLowerCase().includes(filter.toLowerCase())
//     );
//   }
// );