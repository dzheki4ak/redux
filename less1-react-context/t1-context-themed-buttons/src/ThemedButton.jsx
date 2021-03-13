import React from 'react';
import { ThemeContext } from './themes-context';

export default class ThemedButton extends React.Component {
  render() {
    return (
      <button
        {...this.props}
        className="btn"
        style={{
          backgroundColor: this.context.background,
          color: this.context.fontColor,
        }}
      ></button>
    );
  }
}

ThemedButton.contextType = ThemeContext;
