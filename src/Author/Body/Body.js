import React from 'react';
import './Body.css';
import Paragraph from '../../components/Paragraph';

export default class Body extends React.Component {
  constructor(props) {
    super(props);
    this.state = { color: 'nothing' };
    this.bgColor = this.props.questions.bgColor;
  }

  onOptionClick = (e) => {
    if (this.props.questions.answer === e.target.innerText) {
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
    this.bgColor = this.props.questions.bgColor;
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
