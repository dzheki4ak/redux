import React from 'react';
import UserMenu from './UserMenu';

export default class Header extends React.Component {
  render() {
    return (
      <header className="header">
        <UserMenu />
      </header>
    );
  }
}
