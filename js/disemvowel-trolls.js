/*
https://www.codewars.com/kata/52fba66badcd10859f00097e/train/javascript

For example, the string "This website is for losers LOL!" would become "Ths wbst s fr lsrs LL!".
*/

function disemvowel(str) {
    return str.replace(/[aeiouAEIOU]/g, "");
}