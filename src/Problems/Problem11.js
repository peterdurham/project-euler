import React, {Component} from 'react';
import './Problems.css'

class Problem11 extends Component {
  state = {showSolution:false}

  showSolutionHandler = () => {
    this.setState({showSolution:!this.state.showSolution})
  }

  findGreatestProduct = (numbers) => {
    
    let separatedNumbers = numbers.split('\n');
    separatedNumbers = separatedNumbers.filter((item)=>item.length>0);
    
    for(let i = 0; i<20; i++){
      // let row = separatedNumbers[i].split(' ');
      separatedNumbers[i] = separatedNumbers[i].split(' ');
    }
    
    
    let greatestProduct = 1;

    //find horizontal product
    for(let i = 0; i<20; i++){
      for(let j = 0; j<17; j++){
        let product = separatedNumbers[i][j]*separatedNumbers[i][j+1]*separatedNumbers[i][j+2]*separatedNumbers[i][j+3];
        if(product > greatestProduct){
          greatestProduct = product;
        }
      }
    }
   
    //find vertical product 
    for(let i = 0; i<17; i++){
      for(let j=0; j<20; j++){
        let product = separatedNumbers[i][j]*separatedNumbers[i+1][j]*separatedNumbers[i+2][j]*separatedNumbers[i+3][j];
        if(product > greatestProduct){
          greatestProduct = product;
        }
      }
    }

    //find top left to bottom right diagonal products
    for(let i = 0; i<17; i++){
      for(let j =0; j<17; j++){
        let product = separatedNumbers[i][j]*separatedNumbers[i+1][j+1]*separatedNumbers[i+2][j+2]*separatedNumbers[i+3][j+3];
        if(product > greatestProduct){
          greatestProduct = product;
        }
      }
    }
    
    //find top right to bottom left diagonal products
    for(let i = 3 ; i<20; i++){
      for(let j=0; j<17; j++){
        let product = separatedNumbers[i][j]*separatedNumbers[i-1][j+1]*separatedNumbers[i-2][j+2]*separatedNumbers[i-3][j+3];
        if(product > greatestProduct){
          greatestProduct = product;
        }
      }
    }
    return greatestProduct;
  }




  render() {
    let solution = null;
    if(this.state.showSolution) {
      solution = <Solution />
    }
    let numbers = `08 02 22 97 38 15 00 40 00 75 04 05 07 78 52 12 50 77 91 08

49 49 99 40 17 81 18 57 60 87 17 40 98 43 69 48 04 56 62 00

81 49 31 73 55 79 14 29 93 71 40 67 53 88 30 03 49 13 36 65

52 70 95 23 04 60 11 42 69 24 68 56 01 32 56 71 37 02 36 91

22 31 16 71 51 67 63 89 41 92 36 54 22 40 40 28 66 33 13 80

24 47 32 60 99 03 45 02 44 75 33 53 78 36 84 20 35 17 12 50

32 98 81 28 64 23 67 10 26 38 40 67 59 54 70 66 18 38 64 70

67 26 20 68 02 62 12 20 95 63 94 39 63 08 40 91 66 49 94 21

24 55 58 05 66 73 99 26 97 17 78 78 96 83 14 88 34 89 63 72

21 36 23 09 75 00 76 44 20 45 35 14 00 61 33 97 34 31 33 95

78 17 53 28 22 75 31 67 15 94 03 80 04 62 16 14 09 53 56 92

16 39 05 42 96 35 31 47 55 58 88 24 00 17 54 24 36 29 85 57

86 56 00 48 35 71 89 07 05 44 44 37 44 60 21 58 51 54 17 58

19 80 81 68 05 94 47 69 28 73 92 13 86 52 17 77 04 89 55 40

04 52 08 83 97 35 99 16 07 97 57 32 16 26 26 79 33 27 98 66

88 36 68 87 57 62 20 72 03 46 33 67 46 55 12 32 63 93 53 69

04 42 16 73 38 25 39 11 24 94 72 18 08 46 29 32 40 62 76 36

20 69 36 41 72 30 23 88 34 62 99 69 82 67 59 85 74 04 36 16

20 73 35 29 78 31 90 01 74 31 49 71 48 86 81 16 23 57 05 54

01 70 54 71 83 51 54 69 16 92 33 48 61 43 52 01 89 19 67 48`
    return (
      <div className="Problem">
        <h2>Problem 11: Largest product in a grid</h2>
        <p>In the 20×20 grid below, four numbers along a diagonal line have been marked in red.</p>
        <p>08 02 22 97 38 15 00 40 00 75 04 05 07 78 52 12 50 77 91 08</p>
        <p>49 49 99 40 17 81 18 57 60 87 17 40 98 43 69 48 04 56 62 00</p>
        <p>81 49 31 73 55 79 14 29 93 71 40 67 53 88 30 03 49 13 36 65</p>
        <p>52 70 95 23 04 60 11 42 69 24 68 56 01 32 56 71 37 02 36 91</p>
        <p>22 31 16 71 51 67 63 89 41 92 36 54 22 40 40 28 66 33 13 80</p>
        <p>24 47 32 60 99 03 45 02 44 75 33 53 78 36 84 20 35 17 12 50</p>
        <p>32 98 81 28 64 23 67 10 <span className="Red">26</span> 38 40 67 59 54 70 66 18 38 64 70</p>
        <p>67 26 20 68 02 62 12 20 95 <span className="Red">63</span> 94 39 63 08 40 91 66 49 94 21</p>
        <p>24 55 58 05 66 73 99 26 97 17 <span className="Red">78</span> 78 96 83 14 88 34 89 63 72</p>
        <p>21 36 23 09 75 00 76 44 20 45 35 <span className="Red">14</span> 00 61 33 97 34 31 33 95</p>
        <p>78 17 53 28 22 75 31 67 15 94 03 80 04 62 16 14 09 53 56 92</p>
        <p>16 39 05 42 96 35 31 47 55 58 88 24 00 17 54 24 36 29 85 57</p>
        <p>86 56 00 48 35 71 89 07 05 44 44 37 44 60 21 58 51 54 17 58</p>
        <p>19 80 81 68 05 94 47 69 28 73 92 13 86 52 17 77 04 89 55 40</p>
        <p>04 52 08 83 97 35 99 16 07 97 57 32 16 26 26 79 33 27 98 66</p>
        <p>88 36 68 87 57 62 20 72 03 46 33 67 46 55 12 32 63 93 53 69</p>
        <p>04 42 16 73 38 25 39 11 24 94 72 18 08 46 29 32 40 62 76 36</p>
        <p>20 69 36 41 72 30 23 88 34 62 99 69 82 67 59 85 74 04 36 16</p>
        <p>20 73 35 29 78 31 90 01 74 31 49 71 48 86 81 16 23 57 05 54</p>
        <p>01 70 54 71 83 51 54 69 16 92 33 48 61 43 52 01 89 19 67 48</p>
        <p>The product of these numbers is 26 × 63 × 78 × 14 = 1788696.</p>
        <br/>
        <p>What is the greatest product of four adjacent numbers in the same direction (up, down, left, right, or diagonally) in the 20×20 grid?</p>
        <br/>
        <h2>Greatest product: {this.findGreatestProduct(numbers)}</h2>

        <button className="Button" onClick={() => this.showSolutionHandler()}>{this.state.showSolution ? 'Hide solution notes' : 'Show solution notes'}</button>
        {solution}
      </div>
    );
  }
}

const Solution = () => {
  return (
    <div>
      <p>Solved</p>
      <p></p>
      <p></p>
    </div>
  );
}

export default Problem11;
