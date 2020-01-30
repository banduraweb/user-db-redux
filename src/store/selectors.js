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


export const selectFormData = createSelector(
    rootSelector,
    ({ form }) => form

);