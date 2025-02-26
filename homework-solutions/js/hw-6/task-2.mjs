/*
  У вас есть массив названий пицц вашего конкурента.
  Создайте скрипт с циклом, который будет проверять ваш набор названий пицц (массив) 
  и набор названий пицц конкурента (массив), пицц которых нет у конкурента присвойте в переменную "resultUnique" (массив).
  Если все ваши пиццы есть у конкурента результатом будет "null" присвойте в переменную "resultNull".

  Скрипт не должен зависеть от регистра, в котором указаны названия пицц у вас и конкурента
  Воспользуйтесь наборами пицц, что приведены ниже.

  Пиццы:
  const competitorPizzas = ['Peperoni', 'Caprichosa', 'Diablo', '4 cheeses', 'hawai']
  const myPizzasT1 = ['Peperoni', 'Margherita', 'Diablo', 'Vegetarian'];
  const myPizzasT2 = ['Peperoni', 'Caprichosa', 'Diablo', '4 cheeses', 'hawai'];
*/

const competitorPizzas = ['Peperoni', 'Caprichosa', 'Diablo', '4 cheeses', 'hawai']
const myPizzasT1 = ['Peperoni', 'Margherita', 'Diablo', 'Vegetarian'];
const myPizzasT2 = ['Peperoni', 'Caprichosa', 'Diablo', '4 cheeses', 'hawai'];

let resultUnique = [];
let resultNull;

let competitorPizzasLowerCase = [];
for (let i = 0; i < competitorPizzas.length; i++) {
  competitorPizzasLowerCase.push(competitorPizzas[i].toLowerCase());
}

const resultUnique1 = [];
for (let i = 0; i < myPizzasT1.length; i++) {
  if (!competitorPizzasLowerCase.includes(myPizzasT1[i].toLowerCase())) {
    resultUnique1.push(myPizzasT1[i]);
  }
}

if (resultUnique1.length) {
  resultUnique = [...resultUnique1];
} else {
  resultNull = null;
}

const resultUnique2 = [];
for (let i = 0; i < myPizzasT2.length; i++) {
  if (!competitorPizzasLowerCase.includes(myPizzasT2[i].toLowerCase())) {
    resultUnique2.push(myPizzasT2[i]);
  }
}

if (resultUnique2.length) {
  resultUnique = [...resultUnique2];
} else {
  resultNull = null;
}

export { resultNull, resultUnique };
