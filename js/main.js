// function getRandomNumber(min, max) {
//   if (min <= max && min >= 0) {
//     return Math.floor(Math.random() * (max - min + 1) ) + min;
//   }
//   return NaN;
// }

// getRandomNumber(2, 20);


function getLengthString(string, maxLength) {
  if (string.length <= maxLength) {
    return true;
  }
  return false;
}

getLengthString('test', 10);

function getRandomPositiveInteger (a, b) {
  if (a < 0 || b < 0) {
    return NaN;
  }
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));
  const result = Math.random() * (upper - lower + 1) + lower;

  return Math.floor(result);
}
getRandomPositiveInteger();


function checkStringLength (string, length) {
  return string.length <= length;
}
checkStringLength();
