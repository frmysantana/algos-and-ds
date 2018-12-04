function dropElements(arr, func) {
    console.log(func);
    while(arr.length >= 1) {
       // test foremost element of the array
       if (func(arr[0])) {
         break; // stop loop and return the remaining array if 
                // element passes
       } else {
         arr.shift(); // remove element if it fails
       }
     }
     
     return arr;
   }
   
var test = [[[1, 2, 3, 4], function(n) {return n >= 3;}],
  [[0, 1, 0, 1], function(n) {return n === 1;}],
  [[1, 2, 3], function(n) {return n > 0;}],
  [[1, 2, 3, 4], function(n) {return n > 5;}],
  [[1, 2, 3, 7, 4], function(n) {return n > 3;}],
  [[1, 2, 3, 9, 2], function(n) {return n > 2;}]
];

var ans = [ [3, 4], [1, 0, 1], [1, 2, 3], [], [7, 4], [3, 9, 2] ];

test.forEach(function(el, i) {
    console.log('current element: ' + el);
    var result = dropElements(el);
    if (result === this[i]) {
        console.log('true');
    } else {
        console.log('false; \n\tresult: ' + result + '\n\tans: ' + this[i])
    }
}, ans);
