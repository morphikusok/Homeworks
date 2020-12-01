// Написать функцию search, которая принимает в качестве параметров две строки.Функция вернуть количество того,
// сколько раз вторая строка встречается в первой.

let string = 'Hello, Worldrldrld',
  string1 = 'rld';

function search(str1, str2) {
  let counter = 0;
  str1 = str1.split(str2);
  for (i = 0; i < str1.length; i++) {
    if (str1[i] == "") counter++;
  }
  return counter;
}

console.log(search(string, string1));

// Написать функцию strip, которая принимает в качестве параметров строку, и убирает из нее все пробелы в начале и в конце.

function strip(str) {
  let result = [];
  let tempStr = str.split(' ');
  for (i = 0; i < tempStr.length; i++) {
    if (tempStr[i] != '') {
      result.push(tempStr[i]);
    }
  }
  return result.join(' ');
}

console.log(strip(string));

// Написать функцию checkIfEnds, которая принимает в качестве параметров две строки и проверяет заканчивается ли первая строка второй.

let s = 'Hello, world',
  st = 'world';

function checkIfEnds(str1, str2) {
  if (str1.length < str2.length) {
    return false;
  } else {
    var newStr1 = [];
    var newStr2 = [];
    for (i = 0; i < str1.length; i++) newStr1.push(str1[str1.length - i - 1]); // здесь я "перевернул" строки и запихнул в массивы, что бы сравнивать сначала
    for (i = 0; i < str2.length; i++) newStr2.push(str2[str2.length - i - 1]);
    for (i = 0; i < newStr2.length; i++) {
      if (newStr1[i] != newStr2[i]) {
        return false;
      }
    }
  } return true;
}
console.log(checkIfEnds(s, st));

// Написать функцию compare, которая проверяет на равенство две строки, причем проверка не должна зависеть от регистра.

function compare(str1, str2) {
  if (str1.length != str2.length) {
    return ('Строки не равны!');
  } else {
    var newStr1 = str1.toLowerCase();
    var newStr2 = str2.toLowerCase();
    for (i = 0; i < str1.length; i++) {
      if (newStr1[i] != newStr2[i]) {
        return ('Строки не равны!');
      }
    }
  }
  return ('Строки равны!');
}

console.log(compare(string, string1));