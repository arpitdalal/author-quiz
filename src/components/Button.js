import React from 'react';
import './Button.css';

export default class Button extends React.Component {
  render() {
    return (
      <React.Fragment>
        <button onClick={this.props.onClick}>{this.props.children}</button>
      </React.Fragment>
    );
  }
}
