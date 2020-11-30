

/* Алгоритм перебирает элементы массива попарно, один за одним.При этом выбирает больший элемент и меняет его с меньшим
в порядке сортировки до тех пор, пока первый наибольший элемент не станет в нужное место. Затем алгоритм повторяется 
с каждым элемнтом массива до тех пор, пока все не станут упорядочены. Количество повторений равно количеству элементов массива. */

// let arr = [5, 4, 3, 2, 1]
 
function bubbleSort(array) {
  for (let n = 0; n < array.length; n++) { //прописываем условие основного цикла
    for (let i = 0; i < array.length - 1 - n; i++) { //прописываем дополнительный цикл для замены пар чисел
      if (array[i] > array[i + 1]) { // проверка условия больше ли текущий элемент массива следующего за ним
        let swap = array[i] // если условие верно создаем переменную swap, в которую сохраняем значение большего элемента (i)
        array[i] = array[i + 1] // потом присваеваем значение меньшего(следующего) элемента текущему(большему)
        array[i + 1] = swap // а здесть присваеваем следующему(меньшему) элементу сохраненное значение текущего(большего) элемента. Эта и предыдущая итерация меняют элементы метсами
      };
    };
  };
  return array;
};

console.log(bubbleSort(arr))

/* 1) Написать функцию fill, которая принимает в качестве параметров длину массива и любое значение.
Функция должна вернуть новый массив с указанной длиной и все элементы должны быть указанным значением. */

function fill(arrLenght, arrValue) {
  let newArray = [];
  for (i = 0; i < arrLenght; i++) {
    newArray.push(arrValue)
  };
  return newArray;
};

/* 2) Написать функцию reverse, которая принимает в качестве параметров массив и возвращает новый, точно такой же,
только с элементами в обратном порядке. */

function reverse(array) {
  let swap = []
  for (let i = 0; i < array.length; i++) {
    swap.unshift(array[i])
  };
  return swap;
};

console.log(reverse(arr));

/* 3) Написать функцию compact, которая принимает в качестве параметров массив, и возвращает новый,
в котором нет значений false, undefined, пустых строк, нулей и null.
 */

// let arrNew = [1, 5, false, 2, undefined, ' ', 0, null];

function compact(array) {
  let clearArr = [];
  for (i = 0; i < array.length; i++) {
    if (typeof(array[i]) == 'number' && array[i] != 0) {
      clearArr.push(array[i]);
    };
  };
  return clearArr;
};

console.log(compact(arrNew));

/* 4) Написать функцию isEqual, которая принимает в качестве параметров два массива и проверяет их идентичность.
Напоминаю, что массивы - это ссылочные типы данных и простая проверка на равенство двух переменных не сработает. */

function isEqual(firstArr, secondArr) {
  if (firstArr.length != secondArr.length) {
    return ('Массивы не равны');
  }
  for (i = 0; i <= firstArr.length; i++) {
    if (firstArr[i] != secondArr[i]) {
      return ('Массивы не равны!');
    };
  };
  return ('Массивы равны!')
};

console.log(isEqual(arr, arrNew));

/* 5) Написать функцию intersection, которая принимает в качестве параметров два массива, и возвращает новый,
который состоит из общих элементов переданных массивов, то есть тех, которые есть и в первом, и во втором.
 */

// let arrNew = [1, 8, 4, 6, 5, 0, 32, 64, 128, 32, 64];
// let arr = [1, 5, 9, 6, 64];

function intersection(firstArr, secondArr) {
  let newArr = [];
  for (i = 0; i <= firstArr.length; i++) {
    for (j = 0; j < secondArr.length; j++) {
      if (firstArr[i] == secondArr[j]) {
        newArr.push(firstArr[i])
      };
    };
  };
  let newSet = new Set(newArr);
  newArr = Array.from(newSet);
  return newArr;
};

console.log(intersection(arr, arrNew));