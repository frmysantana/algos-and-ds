/*
  Author: Fremy Santana

  Write an algorithm such that if an element in an MxN matrix is 0, its entire 
  row and column are set to 0.
*/

function zeroMatrix(mtrx) {

  // Find what row has a 0
  var row = mtrx.map(function (arr, i) {
    if (arr.indexOf(0) > -1) {
      return i;
    }
    return null;
  }).filter(function (e) {
    return e !== null;
  });

  // console.log(row);
  // Find what column has a 0
  var column = mtrx.map(function (arr) {
    return arr.indexOf(0);
  }).filter(function (e) {
    return e > -1;
  }); 

  // Create an entire row of 0's
  var zeroRow = [];
  for (var i = 0; i < mtrx[0].length; i++) {
    zeroRow.push(0);
  }
  
  // Set column to 0
  for (var i = 0; i < column.length; i++) {
    mtrx = mtrx.map(function (arr) {
      arr[column[i]] = 0;
      return arr;
    });
  }

  // Set row to 0
  for (var i = 0; i < row.length; i++) {
    mtrx[row[i]].splice(0, mtrx[0].length, zeroRow);
  }

  return mtrx;
}

console.log(zeroMatrix([[1, 2, 4, 8], [0, 3, 5, 9], [6, 7, 15, 10], [11, 12, 13, 14]]));

