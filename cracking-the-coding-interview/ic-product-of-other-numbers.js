const numbers = [
  1,
  7,
  3,
  4,
];

const getProductOfAllIntsExceptAtIndex = (array) => {
  const product = array.reduce((acc, curr) => acc * curr, 1);

  const productExceptInts = numbers.map(curr => product / curr);

  return productExceptInts;
};

const productExceptInts = numbers.map((num, indA, arr) => (
  arr.reduce((acc, int, indB) => (indA === indB ? acc : acc * int), 1)
));

console.log(productExceptInts);
