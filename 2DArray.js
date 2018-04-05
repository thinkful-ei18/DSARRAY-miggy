'use strict';


function zeroTheMatrix(matrix){
  let zColumns = [];
  let zRows = [];
  //find rows & columns
  for (let i = 0; i < matrix.length; i++){
    for (let j = 0; j < matrix[i].length; j++){
      if (matrix[i][j] === 0){
        zColumns.push(j);
        zRows.push(i);
      }
    }
  }
  //drop repeats
  zColumns  = [...new Set(zColumns)];
  zRows  = [...new Set(zRows)];
  console.log('rows',zRows,'cols',zColumns);

  //zero the rows
  for (let k = 0; k < matrix.length; k++){
    if (zRows.includes(k)){
      for (let m = 0; m < matrix[k].length;m++){
        matrix[k][m] = 0;
      }
    }
  }
  //zero the columns
  for (let i = 0; i <matrix.length; i++){
    for (let j = 0; j< matrix[i].length ; j++){
      if(zColumns.includes(j)){
        matrix[i][j] = 0;
      }
    }
  }

  return matrix;
}

let exampleMatrix = [
  [1,0,1,1,0],
  [0,1,1,1,0],
  [1,1,1,1,1],
  [1,0,1,1,1],
  [1,1,1,1,1]
];


console.log(zeroTheMatrix(exampleMatrix));
