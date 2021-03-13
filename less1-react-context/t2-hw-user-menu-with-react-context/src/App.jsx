import React from 'react';
import Header from './Header';
import { user, UserContext } from './user-context';

export default class App extends React.Component {
  state = {
    userData: user,
  };

  render() {
    return (
      <div className="page">
        <UserContext.Provider value={this.state.userData}>
          <Header />
        </UserContext.Provider>
      </div>
    );
  }
}
