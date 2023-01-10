/*
https://www.codewars.com/kata/541c8630095125aba6000c00/train/javascript
*/

const MAX_POSITIVE_SINGLE_DIGIT_NUMBER = 9

function digitalRoot(n) {
  return n > MAX_POSITIVE_SINGLE_DIGIT_NUMBER ? digitalRoot(getSumOf(n)) : n;
}

const getSumOf = (n) => {
  return n
    .toString()
    .split("")
    .reduce((sum, value) => sum + parseInt(value), 0);  
};