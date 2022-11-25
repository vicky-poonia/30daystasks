import React, { Component } from "react";
import Question from "./Question";

class Questionandanswer extends Component {
  state = {
    question: "What is the world's deepest lake?",
    answer: "Lake Baikal, in Russian Siberia",
  };
  revealAnswerHandler = (event) => {
    this.setState({ question: this.state.answer });
  };
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>30 days of React</h1>
          <h2>Day One / Question & Answer</h2>
        </header>
        <Question
          question={this.state.question}
          click={this.revealAnswerHandler}
        />
      </div>
    );
  }
}

export default Questionandanswer;
