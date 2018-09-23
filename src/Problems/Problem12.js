import React, {Component} from 'react';
import './Problems.css'

class Problem12 extends Component {
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
        <h2>Problem 12: Highly divisible triangular number (unsolved)</h2>
        <p>The sequence of triangle numbers is generated by adding the natural numbers. So the 7<sup>th</sup> triangle number would be 1 + 2 + 3 + 4 + 5 + 6 + 7 = 28. The first ten terms would be:</p>
        <p>1, 3, 6, 10, 15, 21, 28, 36, 45, 55, ...</p>
        <p>Let us list the factors of the first seven triangle numbers:</p>
        <p>1: 1</p>
        <p>3: 1,3</p>
        <p>6: 1,2,3,6</p>
        <p>10: 1,2,5,10</p>
        <p>15: 1,3,5,15</p>
        <p>21: 1,3,7,21</p>
        <p>28: 1,2,4,7,14,28</p>
        <p>We can see that 28 is the first triangle number to have over five divisors.</p>
        <p>What is the value of the first triangle number to have over five hundred divisors?</p>
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

export default Problem12;
