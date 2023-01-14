/*
https://www.codewars.com/kata/56269eb78ad2e4ced1000013/train/javascript
*/

function findNextSquare(sq) {
    const sRoot = Math.sqrt(sq);
    return Number.isInteger(sRoot) ? sq + 2*sRoot + 1 : -1;
}