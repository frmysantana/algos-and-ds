/*Convert a string to spinal case. Spinal case is 
all-lowercase-words-joined-by-dashes.*/

function splitAtCaps(str) {
  var caps = new RegExp(/[A-Z]/, 'g');
  var capMatches = str.match(caps);
  var newStr = str;
  
  if (capMatches) {
  	// Return the same string if the only capital letter is the first letter
    if (capMatches.length === 1 && newStr.search(caps) === 0){
      return newStr;
    }
    else {
      // If ternary is true, the first letter is capital and should thus be skipped.
      var i = newStr.search(caps) === 0 ? 1 : 0;
      while (i < capMatches.length) {
        newStr = newStr.replace(capMatches[i], ' ' + capMatches[i]);
        i++;
      }
      return newStr.split(' ');
    }
  }

  // Return the same string if there were no capital letters.
  return newStr;
}

function spinalCase(str) {
  // Split the string at all spaces, underscores and hyphens.
  // var nonCaps = new RegExp(/[\s\_\-]/, 'g');
  var strArr = str.split(/[\s\_\-]/g);

  // For the resulting substrings, split at any capital letters
  for (var i = 0; i < strArr.length; i++) {
    var capsGone = splitAtCaps(strArr[i]);
    strArr[i] = capsGone;
  }

  // Flatten the resulting nested array
  var newStrArr = strArr.reduce(function(a,b) {return a.concat(b);}, []);

  var spinalCase = [];

  // Adds the hyphens between each word and ensures all letters are lowercase
  for (var i = 0; i < newStrArr.length; i++) {
    spinalCase.push(newStrArr[i].toLowerCase(), '-');
  }
  spinalCase.pop(); // Remove the trailing hyphen

  return spinalCase.join('');
}

// Test cases
var testArr = ["This Is Spinal Tap","thisIsSpinalTap","The_Andy_Griffith_Show",
				"Teletubbies say Eh-oh","AllThe-small Things"];

// The correct outcome of each test case
var ansArr = ["this-is-spinal-tap","this-is-spinal-tap","the-andy-griffith-show",
        "teletubbies-say-eh-oh","all-the-small-things"]

// Run the tests
testArr.forEach(function(el, i, arr) {console.log(spinalCase(el) === this[i]);}, ansArr);
