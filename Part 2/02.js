// Дана строка 'a1a a2a a3a a4a a5a aba aca'. 
// Напишите регулярку, которая найдет строки, 
// в которых по краям стоят буквы 'a', а между ними одна цифра.

console.log('a1a a2a a3a a4a a5a aba aca'.replace(/a\da/g, '!'));
// ---> ! ! ! ! ! aba aca

//////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////

// Дана строка 'a1a a22a a333a a4444a a55555a aba aca'. 
// Напишите регулярку, которая найдет строки, в которых 
// по краям стоят буквы 'a', а между ними любое количество цифр.

console.log('a1a a22a a333a a4444a a55555a aba aca'.replace(/a\d+a/g, '!'));
// ---> ! ! ! ! ! aba aca

//////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////

// Дана строка 'aa a1a a22a a333a a4444a a55555a aba aca'. 
// Напишите регулярку, которая найдет строки, в которых
// по краям стоят буквы 'a', а между ними любое количество
// цифр (в том числе и ноль цифр, то есть строка 'aa')

console.log('aa a1a a22a a333a a4444a a55555a aba aca'.replace(/a\d*a/g, '!'));
// ---> ! ! ! ! ! ! aba aca

//////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////

// Дана строка 'avb a1b a2b a3b a4b a5b abb acb'. 
// Напишите регулярку, которая найдет строки следующего вида: 
// по краям стоят буквы 'a' и 'b', а между ними - не число. 


console.log('avb a1b a2b a3b a4b a5b abb acb'.replace(/a\Db/g, '!'));
// ---> ! a1b a2b a3b a4b a5b ! !

//////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////

// Дана строка 'ave a#b a2b a$b a4b a5b a-b acb'. 
// Напишите регулярку, которая найдет строки следующего вида: 
// по краям стоят буквы 'a' и 'b', а между ними - не буква и не цифра.

console.log('ave a#b a2b a$b a4b a5b a-b acb'.replace(/a\Wb/g, '!'));
// ---> ave ! a2b ! a4b a5b ! acb

//////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////

// Дана строка 'ave a#a a2a a$a a4a a5a a-a aca'. 
// Напишите регулярку, которая заменит все пробелы на '!'.

console.log('ave a#b a2b a$b a4b a5b a-b acb'.replace(/\s/g, '!'));
// ---> ave!a#b!a2b!a$b!a4b!a5b!a-b!acb

