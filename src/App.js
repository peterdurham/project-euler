import React, { Component } from 'react';
import './App.css';

import Problem1 from './Problems/Problem1';
import Problem2 from './Problems/Problem2';
import Problem3 from './Problems/Problem3';
import Problem4 from './Problems/Problem4';
import Problem5 from './Problems/Problem5';
import Problem6 from './Problems/Problem6';
import Problem7 from './Problems/Problem7';
import Problem8 from './Problems/Problem8';
import Problem9 from './Problems/Problem9';
import Problem10 from './Problems/Problem10';
import Problem11 from './Problems/Problem11';
import Problem12 from './Problems/Problem12';
// import Problem13 from './Problems/Problem13';
// import Problem14 from './Problems/Problem14';
// import Problem15 from './Problems/Problem15';
// import Problem16 from './Problems/Problem16';
// import Problem17 from './Problems/Problem17';
// import Problem18 from './Problems/Problem18';
// import Problem19 from './Problems/Problem19';
// import Problem20 from './Problems/Problem20';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Project Euler Problems & Notes</h1>
        <p className="App__text">Solution's to the following problems can be found in the src/Problems folder.</p>
        <p className="App__text">Problems 1-11 solved with solution notes below.</p>
        <Problem1 />
        <Problem2 />
        <Problem3 />
        <Problem4 />
        <Problem5 />
        <Problem6 />
        <Problem7 />
        <Problem8 />
        <Problem9 />
        <Problem10 />
        <Problem11 />
        <Problem12 />
      </div>
    );
  }
}

export default App;
