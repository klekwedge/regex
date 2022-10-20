// Подсчет количества гласных в заданной строке
// Напишите реализацию для подсчета количества гласных в заданной строке.

const str = 'JavaScript validation with regular expression'
let count = 0;
str.replace(/[aeiou]+/gi, function(str){
  count++;
}) 

console.log(count)