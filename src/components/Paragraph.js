import React from 'react';
import './Paragraph.css';

export default class Paragraph extends React.Component {
  render() {
    return (
      <p className='option' onClick={(e) => this.props.onClick(e)}>
        {this.props.text}
      </p>
    );
  }
}
