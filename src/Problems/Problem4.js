import React, {Component} from 'react';
import './Problems.css'

class Problem4 extends Component {
  state = {showSolution:false}

  showSolutionHandler = () => {
    this.setState({showSolution:!this.state.showSolution})
  }

  palindromeFinder = (max) => {
      let palindromes = [];
      //double looped over the max value to check start at 80% of that value to save space
      for( let i = Math.floor(.80*max) ; i < max ; i++){
        for( let j = Math.floor(.80*max) ; j < max ; j++) {
          //found product of 2 numbers
          let product = i*j;
          //converted number to an array of strings
          let array = (""+product).split("");
          //reversed string array
          let reversed = parseInt(array.reverse().join(""));
          //tested equivalence of number and reversed number
          if(product === reversed) {
            //pushed all palindromes to palindrome array
            palindromes.push(product);
          }
        }
      }
      //returned the largest array item
      const largest = Math.max.apply(null, palindromes);
      return largest;
  }


  render() {
    let solution = null;
    if(this.state.showSolution) {
      solution = <Solution />
    }
    return (
      <div className="Problem">
        <h2>Problem 4: Largest palindrome product (Solved)</h2>
        <p>A palindromic number reads the same both ways. The largest palindrome made from the product of two 2-digit numbers is 9009 = 91 × 99.</p>
        <p>Find the largest palindrome made from the product of two 3-digit numbers.</p>
        <h4>Largest palindrome from product of 2-digit numbers: {this.palindromeFinder(100)}</h4>
        <h3>Largest palindrome from product of 3-digit numbers: {this.palindromeFinder(1000)}</h3>
        <button className="Button" onClick={() => this.showSolutionHandler()}>{this.state.showSolution ? 'Hide solution notes' : 'Show solution notes'}</button>
        {solution}
      </div>
    );
  }
}

const Solution = () => {
  return (
    <div>
      <p>Created an array to store palindromes</p>
      <p>Used a for loop nested inside another to iterate over 2 values</p>
      <p>Set the loops ranges from 80% of max to max number</p>
      <p>Multiplied numbers together and stored in product variable</p>
      <p>Stringified, split, reversed, joined, and parseInt'd product to get number reversed</p>
      <p>Pushed all numbers to palindromes array which had product equal to reversed number</p>
      <p>Used Math.max.apply on palindromes array to return largest one</p>
    </div>
  );
}

export default Problem4;
