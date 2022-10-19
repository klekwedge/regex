// Дана строка 'aeeea aeea aea axa axxa axxxa'. 
// Напишите регулярку, которая найдет строки следующего вида: 
// по краям стоят буквы 'a', а между ними - или буква 'e' 
// любое количество раз или по краям стоят буквы 'a', а между ними - 
// буква 'x' любое количество раз. 

console.log('aeeea aeea aea axa axxa axxxa'.replace(/a(e+|x+)a/g, '!'));
// ---> ! ! ! ! ! ! !

// console.log('aeeea aeea aea axa axxa axxxa'.replace(/ae+a|ax+a/, '!'));
// // ---> ! aeea aea axa axxa axxxa

//////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////

// Дана строка 'aeeea aeea aea axa axxa axxxa'. 
// Напишите регулярку, которая найдет строки 
// следующего вида: по краям стоят буквы 'a', 
// а между ними - или буква 'e' два раза или буква 'x' любое количество раз.

console.log('aeeea aeea aea axa axxa axxxa'.replace(/a(e{2}|x+)a/g, '!'));
// ---> aeeea ! aea ! ! !

// console.log('aeeea aeea aea axa axxa axxxa'.replace(/ae{2}a|ax+a/, '!'))
// // ---> aeeea ! aea axa axxa axxxa

