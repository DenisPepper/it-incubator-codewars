/*
https://www.codewars.com/kata/5648b12ce68d9daa6b000099/train/javascript
*/

var number = function(busStops){
    return busStops.reduce((acc,el) => acc += (el[0] - el[1]),0) 
   }