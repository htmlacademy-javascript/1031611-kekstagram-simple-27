function getRandomNumber(min, max) {
  if (min <= max && min >= 0 && max >= 0) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
  }
  return NaN;
}

getRandomNumber(2, 20);


function getLengthString(string, maxLength) {
  if (string.length <= maxLength) {
    return true;
  }
  return false;
}

getLengthString('test', 10);
