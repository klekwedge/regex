// Дана строка 'a\a abc'. Напишите регулярку, 
// которая заменит строку 'a\a' на '!'. 

console.log('a\\a abc'.replace(/a\\\a/g, '!'));
// ---> ! abc

// console.log('a\a abc'.replace(/a\\\\a/, '!'));
// // ---> aa abc

//////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////

// Дана строка 'a\a a\\a a\\\a'. 
// Напишите регулярку, которая заменит строку 'a\\\a' на '!'.

console.log('a\\a a\\\\a a\\\\\\a'.replace(/a\\\\\\a/g, '!'));
// ---> a\a a\\a !

// console.log('a\a a\\\a a\\\\\a'.replace(/a(\\\\){3}a/, '!'));
// // ---> aa a\a a\\a
