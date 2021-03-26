import { createSelector } from 'reselect';

export const userListSelector = state => {
  return state.users.usersList;
};

export const filterTextSelector = state => {
  return state.users.filterText;
};

export const filteredUserListSelector = createSelector(
  [userListSelector, filterTextSelector],
  (usersList, filterText) => {
    const result =
      filterText !== ''
        ? usersList.filter(user =>
            user.name.toLowerCase().includes(filterText.toLowerCase()),
          )
        : usersList;
    return result;
  },
);

