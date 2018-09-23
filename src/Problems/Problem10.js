import React, {Component} from 'react';
import './Problems.css'

class Problem10 extends Component {
  state = {showSolution:false}

  showSolutionHandler = () => {
    this.setState({showSolution:!this.state.showSolution})
  }
  //algorithm for this problem very similar to problem 7
  //code takes about 5-6 seconds to run

  // primeFinder = (max) => {
  //   let primeSum = 2;
  //   for(let i=3;i<max;i++){
  //     primeSum+=this.primeCheck(i);
  //   }
  //   return primeSum;
  // }
  // primeCheck = (num) => {
  //   let x = Math.floor(Math.sqrt(num));
  //
  //   while(x>=2) {
  //     if(num % x ===0){
  //       return false;
  //     }
  //     x--;
  //   }
  //   return num;
  // }

  render() {
    let solution = null;
    if(this.state.showSolution) {
      solution = <Solution />
    }

    return (
      <div className="Problem">
        <h2>Problem 10: Summation of primes (Solved)</h2>
        <h3>NOTE: ***Solution commented out, takes ~5-10 seconds to load component***</h3>
        <p>The sum of the primes below 10 is 2 + 3 + 5 + 7 = 17.</p>
        <p>Find the sum of all the primes below two million.</p>
        <h3>Sum of all primes below 140759: 142913828922</h3>
        {/* <h3>Sum of all primes below 140759: {this.primeFinder(2000000)}</h3> */}

        <button className="Button" onClick={() => this.showSolutionHandler()}>{this.state.showSolution ? 'Hide solution notes' : 'Show solution notes'}</button>
        {solution}
      </div>
    );
  }
}

const Solution = () => {
  return (
    <div>
      <p>Used same prime algorithm as problem 7</p>
      <p>Added each value to a sum variable, instead of pushing to an array</p>
      <p>returned sum</p>
    </div>
  );
}

export default Problem10;
