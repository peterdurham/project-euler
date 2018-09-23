import React, {Component} from 'react';
import './Problems.css'

class Problem3 extends Component {
  state = {showSolution:false}

  showSolutionHandler = () => {
    this.setState({showSolution:!this.state.showSolution})
  }

  primeFactor = (num) => {
      let factors = [];
      //checked each number up to 10000 for divisibility into number
      for( let i = 2 ; i < 10000 ; i++ ) {
        //if divisible, divide that number out
        if( num % i === 0) {
          num /= i;
          //pushed factor onto a factors array
          factors.push(i);
          //checked for additional instances of found factors
          while( num % i === 0) {
            num /= i;
          }
        }
      }
      //checked if all factors had been divided out
      if(num === 1){
        //returned the last (and largest) factor
        let largestFactor = factors.pop();
        return largestFactor;
      } else{
        return 'loop over larger value, largest factor not yet found.'
      }

  }

  render() {
    let solution = null;
    if(this.state.showSolution) {
      solution = <Solution />
    }
    return (
      <div className="Problem">
        <h2>Problem 3: Largest Prime Factor (Solved)</h2>
        <p>The prime factors of 13195 are 5, 7, 13 and 29.</p>
        <p>What is the largest prime factor of the number 600851475143 ?</p>
        <h4>Largest prime factor of 13195: {this.primeFactor(13195)}</h4>
        <h4>Largest prime factor of 363783: {this.primeFactor(363783)}</h4>
        <h3>Largest prime factor of 600851475143: {this.primeFactor(600851475143)}</h3>
        <button className="Button" onClick={() => this.showSolutionHandler()}>{this.state.showSolution ? 'Hide solution notes' : 'Show solution notes'}</button>
        {solution}
      </div>
    );
  }
}

const Solution = () => {
  return (
    <div>
      <p>Created an empty array for factors</p>
      <p>Used a for loop over all integers 1-10000</p>
      <p>Used an if statement to check whether the given number was divisible by each number</p>
      <p>If a number divided into the given number, pushed that number to factor array,</p>
      <p>then divided given number by divisible number</p>
      <p>Used a while loop to divide out all remaining identical factors</p>
      <p>Checked whether remaining number was 1 to see if all factors had been divided out</p>
      <p>Popped and returned the last (and biggest) number from array if so</p>
    </div>
  );
}

export default Problem3;
