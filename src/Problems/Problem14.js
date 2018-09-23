import React, {Component} from 'react';
import './Problems.css'

class Problem14 extends Component {
  state = {showSolution:false}

  showSolutionHandler = () => {
    this.setState({showSolution:!this.state.showSolution})
  }

  render() {
    let solution = null;
    if(this.state.showSolution) {
      solution = <Solution />
    }

    return (
      <div className="Problem">
        <h2>Problem 14: Longest Collatz sequence (unsolved)</h2>
        <p>The following iterative sequence is defined for the set of positive integers:</p>
        <p>n → n/2 (n is even)</p>
        <p>n → 3n + 1 (n is odd)</p>
        <p>Using the rule above and starting with 13, we generate the following sequence:</p>
        <p>13 → 40 → 20 → 10 → 5 → 16 → 8 → 4 → 2 → 1</p>
        <p>it can be seen that this sequence (starting at 13 and finishing at 1) contains 10 terms. Although it has not been proved yet (Collatz Problem), it is thought that all starting numbers finish at 1.</p>
        <p>Which starting number, under one million, produces the longest chain?</p>
        <p>NOTE: Once the chain starts the terms are allowed to go above one million.</p>

        <button className="Button" onClick={() => this.showSolutionHandler()}>{this.state.showSolution ? 'Hide solution notes' : 'Show solution notes'}</button>
        {solution}
      </div>
    );
  }
}

const Solution = () => {
  return (
    <div>
      <p>unsolved</p>
      <p></p>
      <p></p>
    </div>
  );
}

export default Problem14;
