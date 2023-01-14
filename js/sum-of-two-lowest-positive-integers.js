/*
https://www.codewars.com/kata/558fc85d8fd1938afb000014/train/javascript
*/

function sumTwoSmallestNumbers(numbers) {  
    const s = numbers.sort((a, b) => a-b);
    return s[0] + s[1];
};


// решение с деструктуризацией

function sumTwoSmallestNumbers(numbers) {  
    const [first, second] = numbers.sort((a,b)=>a-b);
    return first + second;
};
