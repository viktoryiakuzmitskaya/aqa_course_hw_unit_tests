"use strict";
// 1. Объявите переменные для каждого из следующих типов данных с явным указанием типа после символв "двоеточие":
//     - Число: переменная num1, значение 42.
//     - Строка: переменная str, значение "Hello, TypeScript!".
//     - Булево: переменная isComplete, значение true.
//     - Массив чисел: переменная numbers, значения [1, 2, 3, 4, 5].
//     - Массив строк: переменная cities, значения ["Minsk", "Warsaw", "London"].
//     - Объект: переменная person, объект с полями name: "Alice", age: 30, city: "Minsk".
Object.defineProperty(exports, "__esModule", { value: true });
let num1 = 42;
let str = "Hello, TypeScript!";
let isComplete = true;
const numbers = [1, 2, 3, 4, 5];
const cities = ["Minsk", "Warsaw", "London"];
const person = {
    name: "Alice",
    age: 30,
    city: "Minsk"
};
// 6. Создайте функцию calculateDiscount, которая принимает объект типа DiscountedProduct и возвращает итоговую цену с учетом скидки. 
//    Затипизировать явно и входные и выходные данные. Используйте следующие данные:
const product = {
    id: 1,
    name: "Laptop",
    price: 1000,
    discount: 10
};
function calculateDiscount(discountedProduct) {
    const { price = 0, discount } = discountedProduct;
    return price - price * discount / 100;
}
console.log(calculateDiscount(product)); // Ожидается: 900
