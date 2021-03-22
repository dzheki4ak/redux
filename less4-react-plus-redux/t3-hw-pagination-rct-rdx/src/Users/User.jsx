import React from 'react';

const User = ({ users }) => {

  return users.map(user => {
    const { name, age } = user;
    return (
      <li key={user.id} className="user">
        <span className="user__name">{name}</span>
        <span className="user__age">{age}</span>
      </li>
    );
  });
};

export default User;
