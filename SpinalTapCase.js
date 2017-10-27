/*Algorithm challenge on FreeCodeCamp.
Convert a string to spinal case. Spinal case is 
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
    if (capMatches.length === 1 && newStr.search(caps) === 0){
      return newStr;
    }
    else if (newStr.search(caps) === 0) {
      for (j = 1; j < capMatches.length; j++) {
        newStr = newStr.replace(capMatches[j], ' ' + capMatches[j]);
      }
      return newStr.split(' ');
    }
    else {
      for (j = 0; j < capMatches.length; j++) {
        newStr = newStr.replace(capMatches[j], ' ' + capMatches[j]);
      }
      return newStr.split(' ');
    }
  }
  return newStr;
}

function spinalCase(str) {
  var nonCaps = new RegExp(/[\s\_\-]/, 'g');

  var strArr = str.split(nonCaps);
  for (i = 0; i < strArr.length; i++) {
    var capsGone = splitAtCaps(strArr[i]);
    strArr[i] = capsGone;
  }
  var newStrArr = strArr.reduce(function(a,b) {return a.concat(b);}, []);

  var spinalCase = [];
  for (i=0; i < newStrArr.length; i++) {
    spinalCase.push(newStrArr[i].toLowerCase(), '-');
  }
  spinalCase.pop();

  return spinalCase.join('');
}
