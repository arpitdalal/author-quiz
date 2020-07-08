import React from 'react';
import './Paragraph.css';

export default class Paragraph extends React.Component {
  onClick = (e) => {
    this.props.onClick(e);
  };

  render() {
    return (
      <p className='option' onClick={this.onClick}>
        {this.props.text}
      </p>
    );
  }
}
