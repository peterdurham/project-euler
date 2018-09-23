import React, {Component} from 'react';
import './Problems.css'

class Problem7 extends Component {
  state = {showSolution:false}

  showSolutionHandler = () => {
    this.setState({showSolution:!this.state.showSolution})
  }

  // primeFinder = (max) => {
  //   let numbers = [];
  //   for(let i = 0 ; i <= 105000 ; i++ ){
  //     numbers.push(i);
  //   }
  //
  //   for(let i=3 ; i<=max ; i++){
  //     for (let j=2 ; j<i ; j++){
  //       if(i%j === 0) {
  //         numbers[i]=0;
  //         break;
  //       }
  //     }
  //   }
  //   const primes = numbers.filter((number)=>number>1);
  //   return primes[10000];
  // }



  primeFinder = (max) => {
    let results = [2];
    //looped over all numbers up to max pushing numbers to array
    for(let i=3;i<max;i++){
      results.push(this.primeCheck(i))
    }
    //filtered out returned false values
    let primes = results.filter((item)=>item>1);
    //returned 10001st prime
    return primes[10000];
  }

  primeCheck = (num) => {
    //set upper bounds to prime check for square root of the number tested
    //(at least one factor of a compound number would be less or equal)
    let x = Math.floor(Math.sqrt(num));
    //while looped over every number in the range testing divisibility
    while(x>=2) {
      if(num % x ===0){
        return false;
      }
      x--;
    }
    //returned the number if no factor were found
    return num;
  }



  render() {
    let solution = null;
    if(this.state.showSolution) {
      solution = <Solution />
    }

    return (
      <div className="Problem">
        <h2>Problem 7: 10001st prime (Solved)</h2>
        <p>By listing the first six prime numbers: 2, 3, 5, 7, 11, and 13, we can see that the 6th prime is 13.</p>
        <p>What is the 10001st prime number?</p>
        <h4>Primes:</h4>
        <h3>10001st Prime number: {this.primeFinder(105000)}</h3>
        <button className="Button" onClick={() => this.showSolutionHandler()}>{this.state.showSolution ? 'Hide solution notes' : 'Show solution notes'}</button>
        {solution}
      </div>
    );
  }
}

const Solution = () => {
  return (
    <div>
      <p>Setup a function to take a number argument and check for primeness</p>
      <p>Set the upper bounds for numbers to test divisibility for each number as the square root of that number</p>
      <p>Used a while loop to return false for any divisible numbers, or the number after checking 2 - upper bound</p>
      <p>Set up a for loop in another function to test all numbers for primeness up to a large number</p>
      <p>Pushed each result to an array then filtered out all false values</p>
      <p>If the array was >10001 in length, returned the 10000th index of the array</p>
    </div>
  );
}

export default Problem7;
