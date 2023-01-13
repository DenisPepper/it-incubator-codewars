/*
https://www.codewars.com/kata/57eadb7ecd143f4c9c0000a3/solutions/javascript?filter=me&sort=best_practice&invalids=false
*/

function abbrevName(name) {
  return name
    .match(/(^|\s)\w/gi)
    .join('.')
    .replace(/\s/, '')
    .replace(/\w/g, (str) => str.toUpperCase());
}


// regexp для выделения первых букв в словах
/*
решение с нормальной регуляркой
*/
return str.match(/\b\w/gi).join('.').toUpperCase();