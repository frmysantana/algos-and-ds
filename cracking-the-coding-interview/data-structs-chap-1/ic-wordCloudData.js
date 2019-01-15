function isLetter(str) {
  return /[a-z]/i.test(str);
}

function normalizeWords(str) {
  let noPunctuations = '';
  const punctuations = ['.', '!', '?', ':', ';', '"', '(', ')', ','];

  for (let i = 0; i < str.length; i++) {
    if (punctuations.indexOf(str[i]) === -1) {
      if ((str[i] === "'" && str[i - 1] !== ' ')
          || (str[i] === "'" && !isLetter(str[i + 1]))) {
        noPunctuations += str[i]; i++;
      }
      noPunctuations += str[i];
    }
  }

  return noPunctuations.toLowerCase();
}

console.log(normalizeWords("Mr. cross-cutting concern doesn't and you're fat."));

// function cloudMap(str) = {

// }
// var normalizedString  = normalizeWords(inputStr);
