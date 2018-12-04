/*
  Author: Fremy Santana

  Exercise 1.5 from Cracking the Coding Interview
*/

function oneAway(str1, str2) {
  var str1Arr = str1.split(''); var str2Arr = str2.split('');
  while (str2Arr.length > 0) {
    console.log(str1Arr, str2Arr)
    var char = str2Arr.shift();
    if (str1Arr.indexOf(char) > -1 ) {
      str1Arr.splice(str1Arr.indexOf(char), 1);
    }
  }
  
  console.log(str1Arr);

  return str1Arr.length <= 1;
}

console.log(oneAway('pale', 'ple'));
console.log(oneAway('pales', 'pale'));
console.log(oneAway('pale', 'bale'));
console.log(oneAway('pale', 'bake'));
