// Дана строка 'aaa aaa aaa'. 
// Напишите регулярку, которая заменит первое 'aaa' на '!'. 

console.log('aaa aaa aaa'.replace(/^aaa/g, '!'));
// ---> ! aaa aaa

//////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////

// Дана строка 'aaa aaa aaa'. 
// Напишите регулярку, которая заменит последнее 'aaa' на '!'

console.log('aaa aaa aaa'.replace(/aaa$/g, '!'));
// ---> aaa aaa !