// Подсчитать количество слов в строке
// Напишите программу для подсчета количества слов в строке.
// Примечание:
// - Удалите пробелы из начальной и конечной позиции.
// - Преобразовать 2 или более пробелов в 1.

let str = ' this       string      has  five words '

str = str.replace(/\s+/g, ' ') // ' this string has five words '
str = str.replace(/^\s|\s$/g, '') // 'this string has five words'

let count = 0;
str.replace(/[a-zA-Z0-9]+/g, function(str){
  count++;
  return str;
}) 

console.log(count)