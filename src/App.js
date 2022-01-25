import "./App.css";
import React from "react";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      counter1: 0,
      counter2: 0,
      counter3: 0,
      title: "Give Feedback",
      result: "Statistics",
      good: "good",
      neutral: "neutral",
      poor: "poor",
      all: [],
    };
  }

  good() {
    this.setState({ counter1: this.state.counter1 + 1 });
  }

  neutral() {
    this.setState({ counter2: this.state.counter2 + 1 });
  }
  poor() {
    this.setState({ counter3: this.state.counter3 + 1 });
  }

  render() {
    return (
      <div>
        <div>
          <h2>{this.state.title}</h2>
        </div>
        <div>
          <button onClick={this.good.bind(this)}>good</button>
          <button onClick={this.neutral.bind(this)}>neutral</button>
          <button onClick={this.poor.bind(this)}>poor</button>
        </div>
        <div>
          <h2>{this.state.result}</h2>
        </div>
        <div>
          {this.state.good}: {this.state.counter1}
        </div>
        <div>
          {this.state.neutral}: {this.state.counter2}
        </div>
        <div>
          {this.state.poor}: {this.state.counter3}
        </div>
      </div>
    );
  }
}
export default App;
