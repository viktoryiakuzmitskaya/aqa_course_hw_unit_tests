/*

(НЕ ОБЯЗАТЕЛЬНО)

Преобразовать Task 2 таким образом, чтобы значение НАПРИМЕР '2' (т.е. ЛЮБАЯ строка в которой лежат ТОЛЬКО ЦИФРЫ) пропускалось, 
  преобразовываясь в number

*/

let minAge = 18;
let maxAge = 60;
let age = "25";

if (typeof age === "string" && !isNaN(age)) {
  age = Number(age);
}

if (typeof age !== "number") {
  console.log("Incorrect data type");
}

if (age < minAge) {
  console.log(`You don't have access cause your age is ${age} It's less then `);
} else if (age >= minAge && age < maxAge) {
  console.log("Welcome  !")
} else if (age > maxAge) {
  console.log("Keep calm and look Culture channel");
} else {
  console.log("Technical work");
}
