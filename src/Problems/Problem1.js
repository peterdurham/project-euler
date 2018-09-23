import React, {Component} from 'react';
import './Problems.css'

class Problem1 extends Component {
  state = {showSolution:false}

  showSolutionHandler = () => {
    this.setState({showSolution:!this.state.showSolution})
  }
  multiplesAdder = (max) => {
      let sum = 0;
      for(let i=1 ; i<max ; i++ ){
          //test for divisibility
          if( i%3 === 0 || i%5 === 0){
            //adding to sum
            sum += i;
          }
      }
      return sum;
      console.log(sum);
  }

  render() {
    let solution = null;
    if(this.state.showSolution) {
      solution = <Solution />
    }

    return (
      <div className="Problem">
        <h2>Problem 1: Multiples of 3 and 5 (Solved)</h2>
        <p>If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.</p>
        <p>Find the sum of all the multiples of 3 or 5 below 1000.</p>
        <h4>Sum for multiples below 10: {this.multiplesAdder(10)}</h4>
        <h4>Sum for multiples below 100: {this.multiplesAdder(100)}</h4>
        <h3>Sum for multiples below 1000: {this.multiplesAdder(1000)}</h3>
        <button className="Button" onClick={() => this.showSolutionHandler()}>{this.state.showSolution ? 'Hide solution notes' : 'Show solution notes'}</button>
        {solution}
      </div>
    );
  }
}

const Solution = () => {
  return (
    <div>
      <p>Created a variable to add the multiples to</p>
      <p>Used a for loop over the numbers 1-999</p>
      <p>Used an if statement inside it to add values to the sum if they were divisible by 3 or 5</p>
    </div>
  );
}

export default Problem1;
