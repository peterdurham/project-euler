import React, {Component} from 'react';
import './Problems.css'

class Problem8 extends Component {
  state = {showSolution:false}

  showSolutionHandler = () => {
    this.setState({showSolution:!this.state.showSolution})
  }

  largestProduct = (seriesStr) => {
    //converted string to array of ints
    let Arr = seriesStr.split('').map((num)=>parseInt(num)).filter((num)=>(num>-1 && num<10));
    let largestProduct = 1;
    let index = null;
    //for looped over every entry in array, noting the product of 13 consecutive digits
    for(let i = 0 ; i<1000 ; i++){
      let currentProduct = Arr[i]*Arr[i+1]*Arr[i+2]*Arr[i+3]*Arr[i+4]*Arr[i+5]*Arr[i+6]*Arr[i+7]*Arr[i+8]*Arr[i+9]*Arr[i+10]*Arr[i+11]*Arr[i+12];
      //checked if the product was the biggest so far
      if(currentProduct>largestProduct){
        largestProduct = currentProduct;
        index = i;
      }
    }
    let digits = (""+Arr[index]+Arr[index+1]+Arr[index+2]+Arr[index+3]+Arr[index+4]+Arr[index+5]+Arr[index+6]+Arr[index+7]+Arr[index+8]+Arr[index+9]+Arr[index+10]+Arr[index+11]+Arr[index+12])
    console.log(index);
    //returned largest product
    return largestProduct;
  }

  render() {
    let solution = null;
    if(this.state.showSolution) {
      solution = <Solution />
    }
    let series = `73167176531330624919225119674426574742355349194934
96983520312774506326239578318016984801869478851843
85861560789112949495459501737958331952853208805511
12540698747158523863050715693290963295227443043557
66896648950445244523161731856403098711121722383113
62229893423380308135336276614282806444486645238749
30358907296290491560440772390713810515859307960866
70172427121883998797908792274921901699720888093776
65727333001053367881220235421809751254540594752243
52584907711670556013604839586446706324415722155397
53697817977846174064955149290862569321978468622482
83972241375657056057490261407972968652414535100474
82166370484403199890008895243450658541227588666881
16427171479924442928230863465674813919123162824586
17866458359124566529476545682848912883142607690042
24219022671055626321111109370544217506941658960408
07198403850962455444362981230987879927244284909188
84580156166097919133875499200524063689912560717606
05886116467109405077541002256983155200055935729725
71636269561882670428252483600823257530420752963450`;
    return (
      <div className="Problem">
        <h2>Problem 8: Largest product in a series (Solved)</h2>
        <p>The four adjacent digits in the 1000-digit number that have the greatest product are 9 × 9 × 8 × 9 = 5832.</p>
        <span>73167176531330624919225119674426574742355349194934</span><br/>
        <span>96983520312774506326239578318016984801869478851843</span><br/>
        <span>85861560789112949495459501737958331952853208805511</span><br/>
        <span>12540698747158523863050715693290963295227443043557</span><br/>
        <span>66896648950445244523161731856403098711121722383113</span><br/>
        <span>62229893423380308135336276614282806444486645238749</span><br/>
        <span>30358907296290491560440772390713810515859307960866</span><br/>
        <span>70172427121883998797908792274921901699720888093776</span><br/>
        <span>65727333001053367881220235421809751254540594752243</span><br/>
        <span>52584907711670556013604839586446706324415722155397</span><br/>
        <span>53697817977846174064955149290862569321978468622482</span><br/>
        <span>83972241375657056057490261407972968652414535100474</span><br/>
        <span>82166370484403199890008895243450658541227588666881</span><br/>
        <span>16427171479924442928230863465674813919123162824586</span><br/>
        <span>17866458359124566529476545682848912883142607690042</span><br/>
        <span>24219022671055626321111109370544217506941658960408</span><br/>
        <span>07198403850962455444362981230987879927244284909188</span><br/>
        <span>84580156166097919133875499200524063689912560717606</span><br/>
        <span>05886116467109405077541002256983155200055935729725</span><br/>
        <span>71636269561882670428252483600823257530420752963450</span><br/>
        <p>Find the thirteen adjacent digits in the 1000-digit number that have the greatest product. What is the value of this product?</p>
        <h4>13 adjacent digits: 5*5*7*6*6*8*9*6*6*4*8*9*5</h4>
        <h4>Starting index: 197</h4>
        <h3>Largest Product in series: {this.largestProduct(series)}</h3>
        <button className="Button" onClick={() => this.showSolutionHandler()}>{this.state.showSolution ? 'Hide solution notes' : 'Show solution notes'}</button>
        {solution}
      </div>
    );
  }
}

const Solution = () => {
  return (
    <div>
      <p>Converted string to an array of integers using split, map, and filter methods</p>
      <p>Initialized largest product to 1</p>
      <p>Used a for loop over all indexes of the array, 0 to 999</p>
      <p>Multiplied (i)th entry of array by (i+1)th, (i+2)th, ... , (i+11)th, (i+12)th</p>
      <p>Checked if product was larger than previous largest and replaced if so</p>
      <p>Noted the index of largest product and 13 digits</p>
      <p>Returned largest product</p>
    </div>
  );
}

export default Problem8;
