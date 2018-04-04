'use strict';

function mergeArr(array1,array2){
  const mergedArray = [];

  for (var i = 0; i < array1.length; i++) {
    mergedArray.push(array1[i]);
  }
  for (var j = 0; j < array2.length; j++) {
    mergedArray.push(array2[j]);
  }
  return mergedArray.sort((x,y) => {
    return x-y;
  });
}

const arr1 = [1, 3, 6, 8, 11];
const arr2 = [2, 3, 5, 8, 9, 10];

console.log(mergeArr(arr1,arr2));
