import React from 'react';
import User from './User';
import { userFilter } from './users.actions';
import Filter from '../Filter';
import {
  filterTextSelector,
  filteredUserListSelector,
} from './users.selectors';

import { connect } from 'react-redux';

const UsersList = ({ usersList, filterText, filter }) => {
  return (
    <div>
      <Filter
        count={usersList.length}
        onChange={event => filter(event.target.value)}
        filterText={filterText}
      />
      <ul className="users">
        {usersList.map(user => {
          return <User key={user.id} {...user} />;
        })}
      </ul>
    </div>
  );
};

const mapState = state => {
  return {
    usersList: filteredUserListSelector(state),
    filterText: filterTextSelector(state),
  };
};
const mapDispatch = {
  filter: userFilter,
};

export default connect(mapState, mapDispatch)(UsersList);
