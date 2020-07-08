import React from 'react';
import './Button.css';

export default class Button extends React.Component {
  render() {
    return (
      <div className={`btn ${this.props.toggle}`}>
        <button onClick={this.props.onClick}>Continue</button>
      </div>
    );
  }
}
