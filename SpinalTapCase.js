/*Convert a string to spinal case. Spinal case is 
all-lowercase-words-joined-by-dashes.
spinalCase("This Is Spinal Tap")    -->"this-is-spinal-tap"
spinalCase("thisIsSpinalTap")       -->"this-is-spinal-tap"
spinalCase("The_Andy_Griffith_Show")-->"the-andy-griffith-show"
spinalCase("Teletubbies say Eh-oh") -->"teletubbies-say-eh-oh"
spinalCase("AllThe-small Things")   -->"all-the-small-things"
*/

function splitAtCaps(str) {
  var caps = new RegExp(/[A-Z]/, 'g');
  var capMatches = str.match(caps);
  var newStr = str;
  
  if (capMatches) {
  	// Return the same string if the only capital letter is the first letter
    if (capMatches.length === 1 && newStr.search(caps) === 0){
      return newStr;
    }
    // Split at second capital letter, because the first capital letter is
    // also the first letter.
    else if (newStr.search(caps) === 0) {
      for (var i = 1; i < capMatches.length; i++) {
        newStr = newStr.replace(capMatches[i], ' ' + capMatches[i]);
      }
      return newStr.split(' ');
    }
    // Split at all capital letters
    else {
      for (var i = 0; i < capMatches.length; i++) {
        newStr = newStr.replace(capMatches[i], ' ' + capMatches[i]);
      }
      return newStr.split(' ');
    }
  }

  // Return the same string if there were no capital letters.
  return newStr;
}

function spinalCase(str) {
  // Split the string at all spaces, underscores and hyphens.
  var nonCaps = new RegExp(/[\s\_\-]/, 'g');
  var strArr = str.split(nonCaps);

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

var testArr = ["This Is Spinal Tap","thisIsSpinalTap","The_Andy_Griffith_Show",
				"Teletubbies say Eh-oh","AllThe-small Things"];

// Run test cases.
testArr.forEach(function(el) {console.log(spinalCase(el)); } );
