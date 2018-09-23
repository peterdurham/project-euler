import React, {Component} from 'react';
import './Problems.css'

import picture from '../assets/p015.gif'

class Problem15 extends Component {
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
        <h2>Problem 15: Lattice paths (unsolved)</h2>
        <p>Starting in the top left corner of a 2×2 grid, and only being able to move to the right and down, there are exactly 6 routes to the bottom right corner.</p>
        <img src={picture}/>
        <p>How many such routes are there through a 20×20 grid?</p>
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

export default Problem15;
