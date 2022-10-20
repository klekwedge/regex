// Дана строка с целыми числами.
// С помощью регулярки преобразуйте строку так,
// чтобы вместо этих чисел стояли их квадраты

console.log(
  '10 6 3 2'.replace(/\d+/g, function (match) {
    return match * match;
  })
);
// ---> 100 36 9 4

//////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////

// Дана строка с целыми числами. Найдите числа,
// стоящие в кавычках и увеличьте их в два раза.
// Пример: из строки 2aaa'3'bbb'4' сделаем строку 2aaa'6'bbb'8'.

console.log(
  "2aaa'3'bbb'4'".replace(/\d+(?=')/g, function (match) {
    return match * 2;
  })
);

// ---> 2aaa'6'bbb'8'

//////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////

// Дана строка в которой есть вставки {{текст}}.
// Найдите все такие вставки и поменяйте в них порядок букв на обратный
// (то есть из 'текст' нужно сделать 'тскет').

console.log(
  "2aaa'3'{{текст}}'4'".replace(/(т)(е)(к)(с)(т)(?=}})/g, '$5$4$3$2$1')
);

// ---> 2aaa'3'{{тскет}}'4'

//////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////

// Дана строка '23 + 35 ='. Числа могут быть любыми.
// Выведите на экран результат операции в виде '23 + 35 = 58'.

console.log(
  '23 + 35 ='.replace(/(\d+) \+ (\d+) =/g, function (match, pocket1, pocket2) {
    const sum = +pocket1 + +pocket2;
    return match + " " +sum;
  })
);

// ---> 23 + 35 = 58