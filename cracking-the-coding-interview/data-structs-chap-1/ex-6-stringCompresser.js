/*
  Author: Fremy Santana
  My attemp at question 1.6 of Cracking the Coding Intervview.
*/

function compressString(str) {
   var strArray = str.split(''); var compArr = [];

  while (strArray.length > 0) {
    var char = strArray.shift(); 
    var lastCompChar = compArr[compArr.length -2]; // find the last character
    if (compArr === [] || char !== lastCompChar) {
      compArr.push(char); compArr.push(1);
    } else {
      compArr[compArr.length - 1] += 1; // increment last count
    }

    // console.log(strArray.length > 0);
  }

  var compStr = compArr.join('');

  if (compStr.length < str.length) {
    return compStr;
  } else {
    return str;
  }
}

console.log(compressString('aaaaabca'));