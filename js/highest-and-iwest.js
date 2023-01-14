/*
https://www.codewars.com/kata/554b4ac871d6813a03000035/train/javascript
*/

//regexp для выбора первого и последнего символа в строке   ^.|.$

function highAndLow(numbers){
    const s = numbers.split(' ').sort((a, b) => b - a);
    return `${s[0]} ${s[s.length - 1]}`;
  }