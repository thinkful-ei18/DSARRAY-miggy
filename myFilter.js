'use strict';

function myFilter(array){
  const filteredArray = [];
  for (let i = 0; i < array.length; i++) {
    array[i] > 5 ? filteredArray.push(array[i]):false;
  }
  return filteredArray;
}

const arr1 = [1,2,3,4,5,6,7,8];
console.log(myFilter(arr1));
