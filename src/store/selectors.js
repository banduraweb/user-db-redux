import { createSelector } from 'reselect';

const rootSelector = state => state;

export const selectUsers = createSelector(
  rootSelector,
  ({ usersData }) => {
    if (!usersData) {
      return [];
    }

    return usersData
  }
);


export const statusLoading = createSelector(
    rootSelector,
    ({ isLoading }) => isLoading

);