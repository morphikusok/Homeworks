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
    var newStr1Array = [];
    var newStr2Array = [];
    for (i = 0; i < str1.length; i++) newStr1Array.unshift(str1[i]); 
    for (i = 0; i < str2.length; i++) newStr2Array.unshift(str2[i]);
    for (i = 0; i < newStr2Array.length; i++) {
      if (newStr1Array[i] != newStr2Array[i]) {
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
    for (i = 0; i < str1.length; i++) {
      if (str1[i].toLowerCase() != str2[i].toLowerCase()) {
        return ('Строки не равны!');
      }
    }
  }
  return ('Строки равны!');
}

console.log(compare(string, string1));