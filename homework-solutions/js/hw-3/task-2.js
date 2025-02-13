/*

Напишите программу, которая принимает целое положительное число n (одно любое число от 1 до 9), и выводит сумму равную 
n + nn + nnn, где n не перемножаются, а конкатенируются

*/

let positiveNumber = 4;
let result = positiveNumber + Number(positiveNumber.toString().repeat(2)) + Number(positiveNumber.toString().repeat(3));
console.log(result);