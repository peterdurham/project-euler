import React, {Component} from 'react';
import './Problems.css'

class Problem6 extends Component {
  state = {showSolution:false}

  showSolutionHandler = () => {
    this.setState({showSolution:!this.state.showSolution})
  }

  sumSquareDiff = (num) => {
    //sum of squares
    let sumOfSquares = 0;
    for( let i=1 ; i<=num ; i++ ){
      let squared = Math.pow(i,2);
      sumOfSquares+=squared;
    }

    //square of sums
    let unsquaredSum = 0;
    for( let i=1 ; i<=num ; i++){
      unsquaredSum += i;
    }
    let squareOfSums = Math.pow(unsquaredSum,2);

    //difference
    let difference = squareOfSums - sumOfSquares;
    return difference;
  }

  render() {
    let solution = null;
    if(this.state.showSolution) {
      solution = <Solution />
    }

    return (
      <div className="Problem">
        <h2>Problem 6: Sum square difference (Solved)</h2>
        <p>The sum of the squares of the first ten natural numbers is,</p>
        <p>1<sup>2</sup> + 2<sup>2</sup> + ... + 10<sup>2</sup> = 385</p>
        <p>The square of the sum of the first ten natural numbers is,</p>
        <p>(1 + 2 + ... + 10)<sup>2</sup> = 55<sup>2</sup> = 3025</p>
        <p>Hence the difference between the sum of the squares of the first ten natural numbers and the square of the sum is 3025 − 385 = 2640.</p>
        <p>Find the difference between the sum of the squares of the first one hundred natural numbers and the square of the sum.</p>
        <h4>Sum square difference of first 10 natural numbers: {this.sumSquareDiff(10)}</h4>
        <h4>Sum square difference of first 20 natural numbers: {this.sumSquareDiff(20)}</h4>
        <h3>Sum square difference of first 100 natural numbers: {this.sumSquareDiff(100)}</h3>
        <button className="Button" onClick={() => this.showSolutionHandler()}>{this.state.showSolution ? 'Hide solution notes' : 'Show solution notes'}</button>
        {solution}
      </div>
    );
  }
}

const Solution = () => {
  return (
    <div>
      <p>Set variables for sum of squares and square of sums each to 0</p>
      <p>Used a for loop squaring each number up to the given number</p>
      <p>Added each square to the sum of squares variable</p>
      <p>Used another for loop adding each number up to the given number</p>
      <p>Squared the resulting sum (after the loop) to find square of sums</p>
      <p>Returned square of sums minus sum of squares (difference)</p>
    </div>
  );
}

export default Problem6;
