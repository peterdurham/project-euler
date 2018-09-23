import React, {Component} from 'react';
import './Problems.css'

class Problem9 extends Component {
  state = {showSolution:false}

  showSolutionHandler = () => {
    this.setState({showSolution:!this.state.showSolution})
  }

  pythagoreanTriplet = () => {
    //looped over two values a & b
    for(let a = 2 ; a < 1000 ; a++){
      for(let b = 3 ; b <1000 ; b++){
        //found the c value for and b using Pythagorean theorem
        let sum = Math.pow(a,2) + Math.pow(b,2)
        let c = Math.sqrt(sum);
        //if c was a whole number, checked if a+b+c was 1000
        if(c % 1 === 0){
          let sumCheck = a + b + c;
          if(sumCheck === 1000){
            console.log("A", a, "B", b, "C", c);
            //returned first value satisfying conditions
            return a*b*c;
          }
        }
      }
    }
  }

  render() {
    let solution = null;
    if(this.state.showSolution) {
      solution = <Solution />
    }

    return (
      <div className="Problem">
        <h2>Problem 9: Special Pythagorean Triplet (Solved)</h2>
        <p>A Pythagorean triplet is a set of three natural numbers, a lessthan b lessthan c, for which,</p>
        <p>a<sup>2</sup> + b<sup>2</sup> = c<sup>2</sup></p>
        <p>For example, 3<sup>2</sup> + 4<sup>2</sup> = 9 + 16 = 25 = 5<sup>2</sup>.</p>
        <p>There exists exactly one Pythagorean triplet for which a + b + c = 1000.</p>
        <p>Find the product abc.</p>
        <h4>200<sup>2</sup> + 375<sup>2</sup> = 425<sup>2</sup></h4>
        <h4>product = 200 * 375 * 425</h4>
        <h3>Special Pythagorean triplet product: {this.pythagoreanTriplet()}</h3>
        <button className="Button" onClick={() => this.showSolutionHandler()}>{this.state.showSolution ? 'Hide solution notes' : 'Show solution notes'}</button>
        {solution}
      </div>
    );
  }
}

const Solution = () => {
  return (
    <div>
      <p>Used for loop for a over all natural numbers 2 to 1000</p>
      <p>Nested for loop for b over all natural numbers 3 to 1000</p>
      <p>Inside loops, added a<sup>2</sup> and b<sup>2</sup> to find c<sup>2</sup> then took square root to find c</p>
      <p>If c % 1 was 0 (Pythagorean triplet), used if to check whether sum was 1000</p>
      <p>If a + b + c was 1000, logged values and returned a * b * c</p>
    </div>
  );
}

export default Problem9;
