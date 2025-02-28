/*
1. Цикл for..of в массиве
  - Создайте массив [1,2,3,4,5,6,7,8,9,10]
  - Создайте цикл for..of, бегущий по массиву, в котором будет реализована следующая логика:
    если элемент четный - возведет его в квадрат
    если элемент нечетный - возведет его в 3ю степень

  Значение добавьте в массив 'forOf' 
*/
const forOf = [];
const arrayItemsPow = [1,2,3,4,5,6,7,8,9,10];
for (let item of arrayItemsPow) {
  if (item%2 === 0) {
    forOf.push(Math.pow(item, 2));
  } else {
    forOf.push(Math.pow(item, 3));
  }
}

/*
2. Методы массивов
  - Создайте массив [1,2,3,4,5]
  - Добавьте в конец массива число 6 соответствующим методом
  - Добавьте в начало массива число 0 соответствующим методом
  - Удалите элемент с индексом 2 из массива соответствующим методом
  - Удалите последний элемент из массива соответствующим методом

  В результате вы должны получить массив [0, 1, 3, 4, 5], присвойте в переменную "result"
*/

let result;
const arrayForMethods = [1,2,3,4,5];
arrayForMethods.push(6);
arrayForMethods.unshift(0);
arrayForMethods.splice(2, 1);
arrayForMethods.pop(arrayForMethods.log - 1);
result = arrayForMethods;

/*
3. Деструктуризация массивов
  - Создайте массив [3, 11, 32, 7, 20] 
  - Через деструктуризацию получите в новые переменные первый, второй и остальные элементы массива

  Пример: [1,2,3,4,5] => first === 1; second === 2, rest === [3,4,5]
*/

const arrayForDestructuring = [3, 11, 32, 7, 20];
const [first, second, ...rest] = arrayForDestructuring;

/*
4. Конкатенация массивов
  - Создайте массив с числами [1,2,3,4,5]
  - Создайте еще 1 массив с числами [6, 7, 8, 9, 10]
  - Используйте спред оператор

  Создайте переменную mergedArray, который будет хранить значения из массивов 1 и 2
*/

const firstArrayForConcatenation = [1,2,3,4,5];
const secondArrayForConcatenation = [6, 7, 8, 9, 10];
const mergedArray = [...firstArrayForConcatenation, ...secondArrayForConcatenation];

export { forOf, result, first, second, rest, mergedArray };
