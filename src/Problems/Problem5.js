import React, {Component} from 'react';
import './Problems.css'

class Problem5 extends Component {
  state = {showSolution:false}

  showSolutionHandler = () => {
    this.setState({showSolution:!this.state.showSolution})
  }

  smallestMultiple = () => {
    //checked each number up to a large number for divisibility by 20, 19, ..., 3, 2
    //increased max value for i until a value was found
      for(let i = 20 ; i < 270000000; i++){
        if(i%20===0){
          if(i%19===0){
            if(i%18===0){
              if(i%17===0){
                if(i%16===0){
                  if(i%15===0){
                    if(i%14===0){
                      if(i%13===0){
                        if(i%12===0){
                          if(i%11===0){
                            if(i%10===0){
                              if(i%9===0){
                                if(i%8===0){
                                  if(i%7===0){
                                    if(i%6===0){
                                      if(i%5===0){
                                        if(i%4===0){
                                          if(i%3===0){
                                            if(i%2===0){
                                              return i;
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
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
        <h2>Problem 5: Smallest multiple (Solved)</h2>
        <p>2520 is the smallest number that can be divided by each of the numbers from 1 to 10 without any remainder.</p>
        <p>What is the smallest positive number that is evenly divisible by all of the numbers from 1 to 20?</p>
        <h3>Smallest Number evenly divisible by 1-20: {this.smallestMultiple()}</h3>
        <button className="Button" onClick={() => this.showSolutionHandler()}>{this.state.showSolution ? 'Hide solution notes' : 'Show solution notes'}</button>
        {solution}
      </div>
    );
  }
}

const Solution = () => {
  return (
    <div>
      <p>Used a for loop to iterate up to an arbitrarily large number</p>
      <p>Nested 19 if statements checking divisibility by 20,19,18,...4,3,2 with a return inside</p>
      <p>Increased for loop max number by a factor of 10 until a value was returned</p>
    </div>
  );
}


export default Problem5;
