import "./App.css";
import React from "react";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      counterForGood: 0,
      counterForNeutral: 0,
      counterForPoor: 0,
      countAvg: 0,
      countPos: 0,
    };
  }

  statistics(good, neutral, poor) {
    let denominator = good + neutral + poor;
    if (denominator === 0) {
      return { countAvg: 0, countPos: 0 };
    } else
      return {
        countAvg: (good - poor) / denominator,
        countPos: (good * 100) / denominator,
      };
  }

  countAverage(good, neutral, poor) {
    let sum = good + neutral + poor;
    let finalAvarage = isNaN((good - poor) / sum) ? 0 : (good - poor) / sum;
    return finalAvarage;
  }
  countPositive(good, neutral, poor) {
    let sum = good + neutral + poor;
    let finalPercentage = isNaN((good * 100) / sum) ? 100 : (good * 100) / sum;
    return finalPercentage;
  }

  good() {
    this.setState({
      counterForGood: this.state.counterForGood + 1,
      countAvg: this.countAverage(
        this.state.counterForGood,
        this.state.counterForNeutral,
        this.state.counterForPoor
      ),
      countPos: this.countPositive(
        this.state.counterForGood,
        this.state.counterForNeutral,
        this.state.counterForPoor
      ),
    });
  }

  neutral() {
    this.setState({
      counterForNeutral: this.state.counterForNeutral + 1,
      countAvg: this.countAverage(
        this.state.counterForGood,
        this.state.counterForNeutral,
        this.state.counterForPoor
      ),
      countPos: this.countPositive(
        this.state.counterForGood,
        this.state.counterForNeutral,
        this.state.counterForPoor
      ),
    });
  }
  poor() {
    this.setState({
      counterForPoor: this.state.counterForPoor + 1,
      countAvg: this.countAverage(
        this.state.counterForGood,
        this.state.counterForNeutral,
        this.state.counterForPoor
      ),
      countPos: this.countPositive(
        this.state.counterForGood,
        this.state.counterForNeutral,
        this.state.counterForPoor
      ),
    });
  }

  render() {
    return (
      <div>
        <div>
          <h2>Give Feedback</h2>
        </div>
        <div>
          <button onClick={this.good.bind(this)}>good</button>
          <button onClick={this.neutral.bind(this)}>neutral</button>
          <button onClick={this.poor.bind(this)}>poor</button>
        </div>
        <div>
          <h2>Statistics</h2>
        </div>
        <div>Good: {this.state.counterForGood}</div>
        <div>Neutral: {this.state.counterForNeutral}</div>
        <div>Poor: {this.state.counterForPoor}</div>
        <div>Average: {this.state.countAvg} </div>
        <div>Positive: {this.state.countPos}%</div>
      </div>
    );
  }
}
export default App;
