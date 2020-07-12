import React from 'react';
import './Body.css';
import Paragraph from '../../components/Paragraph';

export default class Body extends React.Component {
  constructor(props) {
    super(props);
    this.state = { color: 'nothing' };
    this.bgColor = 'nothing';
  }

  onOptionClick = (e) => {
    this.bgColor = '';
    if (this.props.questions.answer === e.target.innerText) {
      this.setState({ color: 'green' });
      this.props.answerClicked(true);
    } else {
      this.setState({ color: 'red' });
      this.props.answerClicked(false);
    }
  };

  componentDidUpdate() {
    this.bgColor = 'nothing';
  }

  render() {
    return (
      <div className={`body ${this.bgColor ? this.bgColor : this.state.color}`}>
        <div className='image'>
          <img src={this.props.questions.imgUrl} alt='robot' />
        </div>
        <div className='options'>
          {this.props.questions.options.map((text, i) => {
            return <Paragraph key={i} text={text} onClick={this.onOptionClick} />;
          })}
        </div>
      </div>
    );
  }
}
