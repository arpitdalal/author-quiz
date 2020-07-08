import React from 'react';

import Body from './Body/Body';
import Header from './Header/Header';
import Button from '../components/Button';

export default class Home extends React.Component {
  state = {
    btn: 'hide',
    quesNo: 0
  };

  questions = [
    {
      options: ['MacBeth', 'The Shinning', 'Heart of Darkness', 'Hamlet'],
      answer: 'The Shinning',
      bgColor: 'nothing',
      imgUrl:
        'https://images.unsplash.com/photo-1531837763904-5d3cb2632ea3?ixlib=rb-1.2.1&auto=format&fit=crop&w=250&q=80'
    },
    {
      options: ['The Shinning', 'The Adventures of Huckleberry Finn', 'MacBeth', 'IT'],
      answer: 'The Adventures of Huckleberry Finn',
      bgColor: 'nothing',
      imgUrl:
        'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=250&q=60'
    }
  ];

  getOptions = () => {
    return this.questions[this.state.quesNo];
  };

  updateQues = () => {
    const nextQuesNo = this.state.quesNo + 1;
    if (nextQuesNo < this.questions.length) {
      this.setState({ quesNo: nextQuesNo, btn: 'hide' });
    } else {
      this.setState({ quesNo: 0, btn: 'hide' });
    }
  };

  showButton = () => {
    this.setState({ btn: 'show' });
  };

  hideButton = () => {
    this.setState({ btn: 'hide' });
  };

  render() {
    return (
      <React.Fragment>
        <Header />
        <Body questions={this.getOptions()} answerClicked={this.showButton} wrongOptionClicked={this.hideButton} />
        <Button onClick={this.updateQues} toggle={this.state.btn} />
      </React.Fragment>
    );
  }
}
