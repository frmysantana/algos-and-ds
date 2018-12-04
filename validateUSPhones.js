/*Return true if the passed string is a valid US phone number.
* There are many valid formats, but all of them require the area code.
* If the country code is provided, it must be 1.
**/

// Hold all regular expressions that represent valid phone number
// formats.
var acceptedPatterns = [
  /\d{10}/, // e.g. '2345678902'

  /\d{3} \d{3} \d{4}/, // e.g. '234 567 8902'

  /\d{3}-\d{3}-\d{4}/, // e.g. '234-567-8902'

  /\(\d{3}\) ?\d{3}-\d{4}/, // e.g. '(234) 567-8902', or '(234)567-8902'

  // Including country code.
  /1 \d{3} \d{3} \d{4}/, // e.g. '1 234 567 8902'

  /1 \d{3}-\d{3}-\d{4}/, // e.g. '1 234-567-8902'

  /1 \(\d{3}\) \d{3}-\d{4}/, // e.g. '1 (234) 567-8902'

  /1\(\d{3}\)\d{3}-\d{4}/ // e.g. '1(234)567-8902'
];

function telephoneCheck(str) {
  for (var i=0; i < acceptedPatterns.length; i++) {
    var replacedStr = str.replace(acceptedPatterns[i], '');

    // Any string of less than 10 or more than 11 digits will yield
    // false, even if it contains a valid substring. 
    if (replacedStr === '') {
      return true;
    } else if (i === acceptedPatterns.length - 1) {
      return false;
    }
  }
}

// Tests for telephoneCheck
var testArr = [
  "1 555-555-5555", "1 (555) 555-5555", "5555555555", "555-555-5555", 
  "(555)555-5555", "1(555)555-5555", "555-5555", "5555555",
  "1 555)555-5555",
  "1 555 555 5555", "1 456 789 4444", "123**&!!asdf#", "55555555", 
  "(6505552368)", "2 (757) 622-7382", "0 (757) 622-7382", "-1 (757) 622-7382", 
  "2 757 622-7382", "10 (757) 622-7382", "27576227382", "(275)76227382",
  "2(757)6227382", "2(757)622-7382", "555)-555-5555", "(555-555-5555", 
  "(555)5(55?)-5555"
];

var ans = [true, true, true, true, true, true, false, false, false, true, true,
  false, false, false, false, false, false, false, false, false, false, false,
  false, false, false, false
];

testArr.forEach(function (el, i) {
  var result = telephoneCheck(el);
  if (result === ans[i]) {
    console.log(true);
  } else {
    console.log(false, el, i + 1)
  }
}, ans);
