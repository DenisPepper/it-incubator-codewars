/*
https://www.codewars.com/kata/54ff3102c1bad923760001f3/train/javascript
*/

function getCount(str) {
    const matches = str.match(/[aeiou]/g) || [];
    return matches.length;
}