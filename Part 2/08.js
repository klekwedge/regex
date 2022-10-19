// Дана строка 'bbb /aaa\ bbb /ccc\'. 
// Напишите регулярку, которая найдет содержимое 
// всех конструкций /...\ и заменит их на '!'.  

console.log('bbb /aaa\\ bbb /ccc\\'.replace(/\/...\\/g, '!'));
// ---> bbb ! bbb !


// console.log('bbb /aaa\\ bbb /ccc\\'.replace(/\/.+\\\\/, '!'))
// // ---> bbb /aaa\ bbb /ccc\
