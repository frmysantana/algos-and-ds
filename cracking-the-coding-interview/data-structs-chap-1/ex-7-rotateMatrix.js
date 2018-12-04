/*
  Author: Fremy Santana
  Given an image represented by an NXN matrix, where each pixel in the image is 4 bytes,
  write a method to rotate the image by 90 degrees.

  Can you do this in place?
*/

function rotateMatrix(mtrx) {
  var mtrxLen = mtrx[0].length;
  var rotatedMtrx = [];

  for (var i = 0; i < mtrxLen; i++) {
    var rotatedMtrxRow = []
    for (var j = mtrxLen - 1; j > -1; j--) {
      rotatedMtrxRow.push(mtrx[j][i]);
    }
    rotatedMtrx.push(rotatedMtrxRow);
  }

  return rotatedMtrx;
}

console.log(rotateMatrix([[1, 2, 3], [4, 5, 6], [7, 8, 9]]));