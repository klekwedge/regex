// Проверьте, содержит ли данное значение тире или подчеркивание
// Напишите реализацию для проверки того, содержит ли
// данное значение тире или подчеркивание.

console.log(/[_-]/gi.test('hello-world')); // true
console.log(/[_-]/gi.test('100_23')); // true
console.log(/[_-]/gi.test('h')); // false
console.log(/[_-]/gi.test('_')); // true
console.log(/[_-]/gi.test('-')); // true
