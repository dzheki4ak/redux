import React from 'react';
import User from './User';
import Pagination from './Pagination';
import * as usersActions from './users.actions';

import { connect } from 'react-redux';

const UsersList = ({ usersList, currentPage, goNext, goPrev }) => {

  const itemsPerPage = 3;
  const start = currentPage * itemsPerPage
  const listToRender = usersList.slice(start, start + itemsPerPage);

  return (
    <div>
      <Pagination
        currentPage={currentPage}
        goNext={goNext}
        goPrev={goPrev}
        totalItems={usersList.length}
        itemsPerPage={itemsPerPage}
      />
      <ul className="users">
        <User
          users={listToRender}
        />
      </ul>
    </div>
  );
};

const mapState = state => {
  return {
    usersList: state.users.usersList,
    currentPage: state.currentPage,
  };
};

const mapDispatch = {
  goNext: usersActions.userPageFwd,
  goPrev: usersActions.userPageBck,
};

const connector = connect(mapState, mapDispatch);

export default connector(UsersList);
