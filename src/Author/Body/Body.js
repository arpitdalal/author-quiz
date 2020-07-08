import React from 'react';
import './Body.css';
import Paragraph from '../../components/Paragraph';

export default class Body extends React.Component {
  constructor(props) {
    super(props);
    this.state = { color: 'nothing' };
    this.bgColor = this.props.options.bgColor;
    console.log(this.bgColor);
  }

  onOptionClick = (e) => {
    if (this.props.options.answer === e.target.innerText) {
      this.bgColor = '';
      this.setState({ color: 'green' });
      this.props.answerClicked();
    } else {
      this.bgColor = '';
      this.setState({ color: 'red' });
      this.props.wrongOptionClicked();
    }
  };

  componentDidUpdate() {
    this.bgColor = this.props.options.bgColor;
  }

  render() {
    return (
      <div className={`body ${this.bgColor ? this.bgColor : this.state.color}`}>
        <div className='image'>
          <img src={this.props.options.imgUrl} alt='robot' />
        </div>
        <div className='options'>
          {this.props.options.options.map((text, i) => {
            return <Paragraph key={i} text={text} onClick={this.onOptionClick} />;
          })}
        </div>
      </div>
    );
  }
}
