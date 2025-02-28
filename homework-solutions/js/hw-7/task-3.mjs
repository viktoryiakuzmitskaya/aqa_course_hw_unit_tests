/*
  digitalRoot
  Напишите рекурсивную функцию, которая принимает на вход число и складывает его цифры. 
  Если сумма получилась больше 9 - снова сложите цифры.
  И так пока, сумма не станет меньше либо равной 9. 
  После окончания сложений возвращает полученное число.
  Например при подаче числа 19 (1+9=10>9, потому 1+0=1) выводится 1

*/

function digitalRoot(number) {
  let sumOfDigits = 0;
  let stringOfDigits = String(number);
  for (let i = 0; i < stringOfDigits.length; i++) {
    let digit = Number(stringOfDigits[i]);
    sumOfDigits += digit;
  }
  return  sumOfDigits <= 9 ? sumOfDigits : digitalRoot(sumOfDigits);
}

export { digitalRoot };
