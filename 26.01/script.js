/* Написать функцию которая возвращает true, если в переданной строке есть хотя бы одна цифра.
Написать функцию, которая находит в переданной строке время и возвращает его.Формат времени это два числа разделенных двоеточием.Например, строка“ Breakfast at 09: 00 in the room 123: 456” должна вернуть только 09: 00, но не 123: 456.
Написать функцию, которая принимает в себя массив содержащий несколько различных слов.Функция должна убрать из массива все слова начинающиеся на букву“ С”(в верхнем регистре) и вернуть новый массив.
Написать функцию, которая проверяет что переданная строка содержит в себе буквы“ a” и“ c”(в этом порядке) и любое количество символом между ними, включая 0.
 */

//1)
/* function isNum(str) {
  const regexp = /\d/;
  return regexp.test(str)
}

console.log(isNum('fsfsd')); */

//2)
/* function findTime(str) {
  const regexp = /\d\d:\d\d/;

  return str.match(regexp);
}

console.log(findTime('Breakfast at 09:00 in the room 123: 456')[0]); */

// 3)
/* function excludeWords(arr) {
  const regexp = /c/;

  return arr.filter(word => word.match(regexp));
}

console.log(excludeWords(['cucumber', 'array', 'web', 'cider'])); */

// 4)
function letterOrder(str) {
  const regexp = /\w*?a\w*?u\w*?c/;

  return regexp.test(str);
}

console.log(letterOrder('aufdfsdc'))