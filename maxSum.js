'use strict';

function maxSum(array){
  const sequences = [];
  for (var i = 0; i < array.length; i++) {
    for (var j = 0; j < array.length+1; j++) {
      array.slice(i,j).length !== 0 ? sequences.push(array.slice(i,j)) : false;
    }
  }
  const arrSums = sequences.map((arr) => {
    return arr.reduce((x,y)=> x+y);
  });
  let currentMax = arrSums[0];
  for (let i = 1; i < arrSums.length; i++) {
    currentMax < arrSums[i] ? currentMax = arrSums[i] : false;
  }
  return currentMax;
}


const arr1 = [4,6,-3,5,-2,1];
console.log(maxSum(arr1));
