'use strict';

function product(array){
  let productArray = [];
  for (let i = 0; i < array.length; i++){
    let currentProduct = [];
    for (let j = 0; j < array.length; j++){
      array[j] === array[i] ? false:currentProduct.push(array[j]);
    }
    productArray.push(currentProduct.reduce((x,y)=>x*y));
  }
  return productArray;
}

const arr1 = [1,3,9,4];

console.log(product(arr1));
